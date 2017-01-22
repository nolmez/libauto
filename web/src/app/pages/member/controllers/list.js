/**
 * Created by safaariman on 21.01.2017.
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.author')
        .controller('MemberListCtrl', MemberListCtrl);

    /** @ngInject */
    function MemberListCtrl($scope, $route, $filter, confirmModalService, $uibModal, $http, toastr, $q) {
        $scope.members = null;
        $scope.safeMembers = [];
        $scope.membersPageSize = 10;

        $http({
            method: 'GET',
            url: 'http://localhost:3000/api/member/',
            headers: {
                'Access-Control-Allow-Origin': '*'
            }
        }).then(function successCallback(response) {
            $scope.members = response.data;
        }, function errorCallback(response) {
            console.log(response);
        });

        $scope.removeMember = function (member) {
            var deferred = $q.defer();
            var members = $scope.members;
            var index = members.indexOf(member);
            console.log(member);
            console.log(index);

            var modalOptions = {
                closeButtonText: 'Cancel',
                actionButtonText: 'Remove',
                headerText: 'Attention!',
                bodyText: 'Are you sure you want to remove member \'' + member.name + '\'?'
            };

            confirmModalService.showModal({}, modalOptions).then(function () {
                var modalOptions = {
                    closeButtonText: 'Cancel',
                    actionButtonText: 'Remove',
                    headerText: 'Attention!',
                    bodyText: 'Look! I am serious. This is your last chance. Think twice and click once!'
                };

                confirmModalService.showModal({}, modalOptions).then(function () {
                    $http({
                        method: 'DELETE',
                        url: 'http://localhost:3000/api/member/' + member.id + '/',
                        headers: {
                            'Access-Control-Allow-Origin': '*'
                        }
                    }).then(function successCallback(response) {
                        deferred.resolve(response);
                        members.splice(index, 1);
                    }, function errorCallback(response) {
                        deferred.reject();
                    });
                });
            });

            return deferred.promise;
        };
    }
})();
