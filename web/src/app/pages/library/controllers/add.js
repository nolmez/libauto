/**
 * Created by safaariman on 21.01.2017.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.author')
        .controller('LibraryAddCtrl', LibraryAddCtrl);

    /** @ngInject */
    function LibraryAddCtrl($scope, $route, $filter, $location, $http, toastr, $q) {
        $scope.library = {};

        function createLibrary(library, deferred) {
            $http({
                method: 'POST',
                url: 'http://localhost:3000/api/library/',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                data: {
                    name: library.name
                }
            }).then(function successCallback(response) {
                deferred.resolve(response);
                $location.path('/library');
            }, function errorCallback(response) {
                deferred.reject();
            });
        }

        $scope.save = function (library) {
            var deferred = $q.defer();
            createLibrary(library, deferred);
            return deferred.promise;
        }
    }

})();
