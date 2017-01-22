/**
 * Created by safaariman on 21.01.2017.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.author')
        .controller('CategoryAddCtrl', CategoryAddCtrl);

    /** @ngInject */
    function CategoryAddCtrl($scope, $route, $filter, $location, $http, toastr, $q) {
        $scope.category = {};

        function createCategory(category, deferred) {
            $http({
                method: 'POST',
                url: 'http://localhost:3000/api/category/',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                data: {
                    name: category.name
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
            createCategory(category, deferred);
            return deferred.promise;
        }
    }

})();
