/**
 * Created by safaariman on 21.01.2017.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.author')
        .controller('LibraryEditCtrl', LibraryEditCtrl);

    /** @ngInject */
    function LibraryEditCtrl($scope, $stateParams, $filter, $http, toastr, $q, $location) {
        var id = $stateParams.id;
        $scope.library = null;

        $http({
            method: 'GET',
            url: 'http://localhost:3000/api/library/' + id + '/',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(function successCallback(response) {
            $scope.library = response.data;
        }, function errorCallback(response) {
            console.log(response);
        });

        function updateLibrary(data, deferred) {
            $http({
                method: 'PUT',
                url: 'http://localhost:3000/api/library/' + id + '/',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                data: {
                    name: data.name
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
            updateLibrary(library, deferred);
            return deferred.promise;
        }
    }

})();
