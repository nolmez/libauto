/**
 * Created by safaariman on 21.01.2017.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.author')
        .controller('PublishingHouseListCtrl', PublishingHouseListCtrl);

    /** @ngInject */
    function PublishingHouseListCtrl($scope, $route, $filter, confirmModalService, $uibModal, $http, toastr, $q) {
        $scope.publishing_houses = null;
        $scope.safePublishingHouses = [];
        $scope.publishing_housesPageSize = 10;

        $http({
            method: 'GET',
            url: 'http://localhost:3000/api/publishing_house/',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(function successCallback(response) {
            $scope.publishing_houses = response.data;
        }, function errorCallback(response) {
            console.log(response);
        });

        $scope.removePublishingHouse = function (publishing_house) {
            var deferred = $q.defer();
            var publishing_houses = $scope.publishing_houses;
            var index = publishing_houses.indexOf(publishing_house);
            console.log(publishing_house);
            console.log(index);

            var modalOptions = {
                closeButtonText: 'Cancel',
                actionButtonText: 'Remove',
                headerText: 'Attention!',
                bodyText: 'Are you sure you want to remove publishing_house \'' + publishing_house.name + '\'?'
            };

            confirmModalService.showModal({}, modalOptions).then(function () {
                var modalOptions = {
                    closeButtonText: 'Cancel',
                    actionButtonText: 'Remove',
                    headerText: 'Attention!',
                    bodyText: 'Look! I am serious. This is your last chance. Think twice and click once!'
                };

                confirmModalService.showModal({}, modalOptions).then(function () {
                    $http({
                        method: 'DELETE',
                        url: 'http://localhost:3000/api/publishing_house/' + publishing_house.id + '/',
                        headers: {
                            'Access-Control-Allow-Origin': '*'
                        }
                    }).then(function successCallback(response) {
                        deferred.resolve(response);
                        publishing_houses.splice(index, 1);
                    }, function errorCallback(response) {
                        deferred.reject();
                    });
                });
            });

            return deferred.promise;
        };
    }
})();
