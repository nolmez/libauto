/**
 * Created by safaariman on 21.01.2017.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.author')
        .controller('BookListCtrl', BookListCtrl);

    /** @ngInject */
    function BookListCtrl($scope, $route, $filter, confirmModalService, $uibModal, $http, toastr, $q) {
        $scope.books = null;
        $scope.safeBooks = [];
        $scope.booksPageSize = 10;

        $http({
            method: 'GET',
            url: 'http://localhost:3000/api/book/',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(function successCallback(response) {
            $scope.books = response.data;
        }, function errorCallback(response) {
            console.log(response);
        });

        $scope.removeBook = function (book) {
            var deferred = $q.defer();
            var books = $scope.books;
            var index = books.indexOf(book);
            console.log(book);
            console.log(index);

            var modalOptions = {
                closeButtonText: 'Cancel',
                actionButtonText: 'Remove',
                headerText: 'Attention!',
                bodyText: 'Are you sure you want to remove book \'' + book.name + '\'?'
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
                        url: 'http://localhost:3000/api/book/' + book.id + '/',
                        headers: {
                            'Access-Control-Allow-Origin': '*'
                        }
                    }).then(function successCallback(response) {
                        deferred.resolve(response);
                        books.splice(index, 1);
                    }, function errorCallback(response) {
                        deferred.reject();
                    });
                });
            });

            return deferred.promise;
        };
    }
})();
