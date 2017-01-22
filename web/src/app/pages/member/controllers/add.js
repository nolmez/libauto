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
                    name: member.name
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
