/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.dashboard')
        .controller('CategoryStatisticCtrl', CategoryStatisticCtrl);

    /** @ngInject */
    function CategoryStatisticCtrl($scope, $filter, baConfig, colorHelper, $http) {

        var receivedData = null;
        var receivedDataSorted = null;
        $scope.total_books_count = null;

        $http({
            method: 'GET',
            url: 'http://localhost:3000/api/category_based_book_counts/',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(function successCallback(response) {

            $scope.transparent = baConfig.theme.blur;
            var dashboardColors = baConfig.colors.dashboard;

            $scope.total_books_count = response.data.total_books_count;
            receivedData = response.data.category_books;

            for (var i = 0; i < receivedData.length; i++) {
                receivedData[i].book_counts = parseInt(receivedData[i].book_counts)
            }

            receivedData.sort(function (a, b) {
                return a.book_counts - b.book_counts;
            });

            receivedDataSorted = $filter('orderBy')(receivedData, 'book_counts', true);
            console.log(receivedData);
            console.log(receivedDataSorted);

            var labels = [];
            var data = [];
            var percentage = [];

            for (var j = 0; j < 5; j++) {
                labels.push(receivedDataSorted[j].name);
                data.push(receivedDataSorted[j].book_counts);
                percentage.push(parseInt(receivedDataSorted[j].book_counts * 100 / $scope.total_books_count));
            }


            console.log(labels);
            console.log(data);


            var backgroundColor = [
                dashboardColors.white,
                dashboardColors.blueStone,
                dashboardColors.surfieGreen,
                dashboardColors.silverTree,
                dashboardColors.gossip
            ];
            var hoverBackgroundColor = [
                colorHelper.shade(dashboardColors.white, 15),
                colorHelper.shade(dashboardColors.blueStone, 15),
                colorHelper.shade(dashboardColors.surfieGreen, 15),
                colorHelper.shade(dashboardColors.silverTree, 15),
                colorHelper.shade(dashboardColors.gossip, 15)
            ];

            $scope.doughnutData = {
                labels: labels,
                datasets: [
                    {
                        data: data,
                        backgroundColor: backgroundColor,
                        hoverBackgroundColor: hoverBackgroundColor,
                        percentage: percentage
                    }
                ]
            };

            var ctx = document.getElementById('category-chart-area').getContext('2d');
            window.myDoughnut = new Chart(ctx, {
                type: 'doughnut',
                data: $scope.doughnutData,
                options: {
                    cutoutPercentage: 64,
                    responsive: true,
                    elements: {
                        arc: {
                            borderWidth: 0
                        }
                    }
                }
            });

        }, function errorCallback(response) {
            console.log(response);
        });


    }
})();