/**
 * Created by safaariman on 21.01.2017.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.author')
        .controller('MemberAddCtrl', MemberAddCtrl);

    /** @ngInject */
    function MemberAddCtrl($scope, $route, $filter, $location, $http, toastr, $q) {
        $scope.member = {};

        function createMember(member, deferred) {
            $http({
                method: 'POST',
                url: 'http://localhost:3000/api/member/',
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
            createMember(member, deferred);
            return deferred.promise;
        }
    }

})();
