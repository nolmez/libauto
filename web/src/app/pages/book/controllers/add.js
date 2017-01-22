/**
 * Created by safaariman on 21.01.2017.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.author')
        .controller('BookAddCtrl', BookAddCtrl);

    /** @ngInject */
    function BookAddCtrl($scope, $route, $filter, $location, $http, toastr, $q) {
        $scope.book = {};

        function createBook(book, deferred) {
            $http({
                method: 'POST',
                url: 'http://localhost:3000/api/book/',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                data: {
                    name: book.name
                }
            }).then(function successCallback(response) {
                deferred.resolve(response);
                $location.path('/book');
            }, function errorCallback(response) {
                deferred.reject();
            });
        }

        $scope.save = function (book) {
            var deferred = $q.defer();
            createBook(book, deferred);
            return deferred.promise;
        }
    }

})();
