/**
 * Created by safaariman on 21.01.2017.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.author')
        .controller('CategoryEditCtrl', CategoryEditCtrl);

    /** @ngInject */
    function CategoryEditCtrl($scope, $stateParams, $filter, $http, toastr, $q, $location) {
        var id = $stateParams.id;
        $scope.category = null;

        $http({
            method: 'GET',
            url: 'http://localhost:3000/api/category/' + id + '/',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(function successCallback(response) {
            $scope.category = response.data;
        }, function errorCallback(response) {
            console.log(response);
        });

        function updateCategory(data, deferred) {
            $http({
                method: 'PUT',
                url: 'http://localhost:3000/api/category/' + id + '/',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                data: {
                    name: data.name
                }
            }).then(function successCallback(response) {
                deferred.resolve(response);
                $location.path('/category');
            }, function errorCallback(response) {
                deferred.reject();
            });
        }

        $scope.save = function (category) {
            var deferred = $q.defer();
            updateCategory(category, deferred);
            return deferred.promise;
        }
    }

})();
