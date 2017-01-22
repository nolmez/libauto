/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.publishing_house', ['ui.select', 'ngSanitize'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('listPublishingHouse', {
                url: '/publishing_house',
                templateUrl: 'app/pages/publishing_house/views/list.html',
                controller: 'PublishingHouseListCtrl',
                // template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
                // abstract: true,
                title: 'Publishing Houses',
                sidebarMeta: {
                    icon: 'ion-ios-home-outline',
                    order: 100
                }
            })
            .state('addPublishingHouse', {
                url: '/publishing_house/add',
                templateUrl: 'app/pages/publishing_house/views/add.html',
                controller: 'PublishingHouseAddCtrl',
                // template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
                // abstract: true,
                title: 'Add Publishing House'
            })
            .state('editPublishingHouse', {
                url: '/publishing_house/edit/{id:int}',
                templateUrl: 'app/pages/publishing_house/views/edit.html',
                controller: 'PublishingHouseEditCtrl',
                // template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
                // abstract: true,
                title: 'Edit Publishing House'
            });
    }
})();
