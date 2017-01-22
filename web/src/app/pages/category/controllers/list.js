/**
 * Created by safaariman on 21.01.2017.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.author')
        .controller('CategoryListCtrl', CategoryListCtrl);

    /** @ngInject */
    function CategoryListCtrl($scope, $route, $filter, confirmModalService, $uibModal, $http, toastr, $q) {
        $scope.categories = null;
        $scope.safeCategories = [];
        $scope.categoriesPageSize = 10;

        $http({
            method: 'GET',
            url: 'http://localhost:3000/api/category/',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(function successCallback(response) {
            $scope.categories = response.data;
        }, function errorCallback(response) {
            console.log(response);
        });

        $scope.removeCategory = function (category) {
            var deferred = $q.defer();
            var categories = $scope.categories;
            var index = categories.indexOf(category);
            console.log(category);
            console.log(index);

            var modalOptions = {
                closeButtonText: 'Cancel',
                actionButtonText: 'Remove',
                headerText: 'Attention!',
                bodyText: 'Are you sure you want to remove category \'' + category.name + '\'?'
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
                        url: 'http://localhost:3000/api/category/' + category.id + '/',
                        headers: {
                            'Access-Control-Allow-Origin': '*'
                        }
                    }).then(function successCallback(response) {
                        deferred.resolve(response);
                        categories.splice(index, 1);
                    }, function errorCallback(response) {
                        deferred.reject();
                    });
                });
            });

            return deferred.promise;
        };
    }
})();
