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

        function updateMember(member, deferred) {
            $http({
                method: 'PUT',
                url: 'http://localhost:3000/api/member/' + id + '/',
                headers: {
                    'Access-Control-Allow-Origin': '*'
                },
                data: {
                    first_name: member.first_name,
                    last_name: member.last_name,
                    mail: member.mail,
                    phone_number: member.phone_number,
                    gender: member.gender,
                    address: member.address,
                    city: member.city,
                    state: member.state,
                    country:member.country,
                    zip_code: member.zip_code
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
