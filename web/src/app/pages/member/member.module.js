/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.member', ['ui.select', 'ngSanitize'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('listMember', {
                url: '/member',
                templateUrl: 'app/pages/member/views/list.html',
                controller: 'MemberListCtrl',
                // template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
                // abstract: true,
                title: 'Members',
                sidebarMeta: {
                    icon: 'ion-ios-pricetags-outline',
                    order: 100
                }
            })
            .state('addMember', {
                url: '/member/add',
                templateUrl: 'app/pages/member/views/add.html',
                controller: 'MemberAddCtrl',
                // template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
                // abstract: true,
                title: 'Add Member'
            })
            .state('editMember', {
                url: '/member/edit/{id:int}',
                templateUrl: 'app/pages/member/views/edit.html',
                controller: 'MemberEditCtrl',
                // template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
                // abstract: true,
                title: 'Edit Member'
            });
    }
})();
