/**
 * Created by safaariman on 21.01.2017.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.author')
        .controller('AuthorEditCtrl', AuthorEditCtrl);

    /** @ngInject */
    function AuthorEditCtrl($scope, $stateParams, $filter, $http, toastr, $q, $location) {
        var id = $stateParams.id;
        $scope.author = null;

        $http({
            method: 'GET',
            url: 'http://localhost:3000/api/author/' + id + '/',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(function successCallback(response) {
            $scope.author = response.data;
        }, function errorCallback(response) {
            console.log(response);
        });

        function updateAuthor(author, deferred) {
            $http({
                method: 'PUT',
                url: 'http://localhost:3000/api/author/' + id + '/',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                data: {
                    first_name: author.first_name,
                    last_name: author.last_name,
                    email: author.email,
                    phone_number: author.phone_number
                }
            }).then(function successCallback(response) {
                deferred.resolve(response);
                $location.path('/author');
            }, function errorCallback(response) {
                deferred.reject();
            });
        }

        $scope.save = function (author) {
            var deferred = $q.defer();
            updateAuthor(author, deferred);
            return deferred.promise;
        }
    }

})();
