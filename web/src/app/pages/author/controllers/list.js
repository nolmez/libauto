/**
 * Created by safaariman on 21.01.2017.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.author')
        .controller('AuthorListCtrl', AuthorListCtrl);

    /** @ngInject */
    function AuthorListCtrl($scope, $route, $filter, confirmModalService, $uibModal, $http, toastr, $q) {

        $scope.authors = null;
        $scope.safeAuthors = [];
        $scope.authorsPageSize = 10;

        $http({
            method: 'GET',
            url: 'http://localhost:3000/api/author/',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(function successCallback(response) {
            $scope.authors = response.data;
        }, function errorCallback(response) {
            console.log(response);
        });

        $scope.removeAuthor = function (author) {
            var deferred = $q.defer();
            var authors = $scope.authors;
            var index = authors.indexOf(author);
            console.log(author);
            console.log(index);

            var modalOptions = {
                closeButtonText: 'Cancel',
                actionButtonText: 'Remove',
                headerText: 'Attention!',
                bodyText: 'Are you sure you want to remove author \'' + author.first_name + ' ' + author.last_name + '\'?'
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
                        url: 'http://localhost:3000/api/author/' + author.id + '/',
                        headers: {
                            'Access-Control-Allow-Origin': '*'
                        }
                    }).then(function successCallback(response) {
                        deferred.resolve(response);
                        authors.splice(index, 1);
                    }, function errorCallback(response) {
                        deferred.reject();
                    });
                });
            });

            return deferred.promise;
        };
    }
})();
