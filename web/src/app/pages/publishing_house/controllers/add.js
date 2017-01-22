/**
 * Created by safaariman on 21.01.2017.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.author')
        .controller('PublishingHouseAddCtrl', PublishingHouseAddCtrl);

    /** @ngInject */
    function PublishingHouseAddCtrl($scope, $route, $filter, $location, $http, toastr, $q) {
        $scope.publishing_house = {};

        function createPublishingHouse(publishing_house, deferred) {
            $http({
                method: 'POST',
                url: 'http://localhost:3000/api/publishing_house/',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                data: {
                    name: publishing_house.name
                }
            }).then(function successCallback(response) {
                deferred.resolve(response);
                $location.path('/publishing_house');
            }, function errorCallback(response) {
                deferred.reject();
            });
        }

        $scope.save = function (publishing_house) {
            var deferred = $q.defer();
            createPublishingHouse(publishing_house, deferred);
            return deferred.promise;
        }
    }

})();
