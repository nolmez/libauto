/**
 * Created by safaariman on 21.01.2017.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.author')
        .controller('BookEditCtrl', BookEditCtrl);

    /** @ngInject */
    function BookEditCtrl($scope, $stateParams, $filter, $http, toastr, $q, $location) {
        var id = $stateParams.id;
        $scope.book = null;

        $http({
            method: 'GET',
            url: 'http://localhost:3000/api/book/' + id + '/',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(function successCallback(response) {
            $scope.book = response.data;
        }, function errorCallback(response) {
            console.log(response);
        });

        function updateBook(data, deferred) {
            $http({
                method: 'PUT',
                url: 'http://localhost:3000/api/book/' + id + '/',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                data: {
                    name: data.name
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
            updateBook(book, deferred);
            return deferred.promise;
        }
    }

})();
