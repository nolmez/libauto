/**
 * Created by safaariman on 21.01.2017.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.author')
        .controller('LibraryListCtrl', LibraryListCtrl);

    /** @ngInject */
    function LibraryListCtrl($scope, $route, $filter, confirmModalService, $uibModal, $http, toastr, $q) {
        $scope.libraries = null;
        $scope.safeLibraries = [];
        $scope.librariesPageSize = 10;

        $http({
            method: 'GET',
            url: 'http://localhost:3000/api/library/',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(function successCallback(response) {
            $scope.libraries = response.data;
        }, function errorCallback(response) {
            console.log(response);
        });

        $scope.removeLibrary = function (library) {
            var deferred = $q.defer();
            var libraries = $scope.libraries;
            var index = libraries.indexOf(library);
            console.log(library);
            console.log(index);

            var modalOptions = {
                closeButtonText: 'Cancel',
                actionButtonText: 'Remove',
                headerText: 'Attention!',
                bodyText: 'Are you sure you want to remove library \'' + library.name + '\'?'
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
                        url: 'http://localhost:3000/api/library/' + library.id + '/',
                        headers: {
                            'Access-Control-Allow-Origin': '*'
                        }
                    }).then(function successCallback(response) {
                        deferred.resolve(response);
                        libraries.splice(index, 1);
                    }, function errorCallback(response) {
                        deferred.reject();
                    });
                });
            });

            return deferred.promise;
        };
    }
})();
