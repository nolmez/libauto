/**
 * Created by safaariman on 21.01.2017.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.author')
        .controller('PublishingHouseEditCtrl', PublishingHouseEditCtrl);

    /** @ngInject */
    function PublishingHouseEditCtrl($scope, $stateParams, $filter, $http, toastr, $q, $location) {
        var id = $stateParams.id;
        $scope.publishing_house = null;

        $http({
            method: 'GET',
            url: 'http://localhost:3000/api/publishing_house/' + id + '/',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(function successCallback(response) {
            $scope.publishing_house = response.data;
        }, function errorCallback(response) {
            console.log(response);
        });

        function updatePublishingHouse(publishing_house, deferred) {
            $http({
                method: 'PUT',
                url: 'http://localhost:3000/api/publishing_house/' + id + '/',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                data: {
                    name: publishing_house.name,
                    address:publishing_house.address,
                    city:publishing_house.city,
                    state:publishing_house.state,
                    country:publishing_house.country,
                    zip_code:publishing_house.zip_code
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
            updatePublishingHouse(publishing_house, deferred);
            return deferred.promise;
        }
    }

})();
