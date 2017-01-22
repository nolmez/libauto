/**
 * Created by safaariman on 21.01.2017.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.author')
        .controller('AuthorAddCtrl', AuthorAddCtrl);

    /** @ngInject */
    function AuthorAddCtrl($scope, $route, $filter, $location, $http, toastr, $q) {
        $scope.author = {};

        function createAuthor(author, deferred) {
            $http({
                method: 'POST',
                url: 'http://localhost:3000/api/author/',
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
            createAuthor(author, deferred);
            return deferred.promise;
        }
    }

})();
