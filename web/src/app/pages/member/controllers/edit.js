/**
 * Created by safaariman on 21.01.2017.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.author')
        .controller('MemberEditCtrl', MemberEditCtrl);

    /** @ngInject */
    function MemberEditCtrl($scope, $stateParams, $filter, $http, toastr, $q, $location) {
        var id = $stateParams.id;
        $scope.member = null;

        $http({
            method: 'GET',
            url: 'http://localhost:3000/api/member/' + id + '/',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(function successCallback(response) {
            $scope.member = response.data;
        }, function errorCallback(response) {
            console.log(response);
        });

        function updateMember(data, deferred) {
            $http({
                method: 'PUT',
                url: 'http://localhost:3000/api/member/' + id + '/',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                data: {
                    name: data.name
                }
            }).then(function successCallback(response) {
                deferred.resolve(response);
                $location.path('/member');
            }, function errorCallback(response) {
                deferred.reject();
            });
        }

        $scope.save = function (member) {
            var deferred = $q.defer();
            updateMember(member, deferred);
            return deferred.promise;
        }
    }

})();
