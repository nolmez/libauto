/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.library', ['ui.select', 'ngSanitize'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('listLibrary', {
                url: '/library',
                templateUrl: 'app/pages/library/views/list.html',
                controller: 'LibraryListCtrl',
                // template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
                // abstract: true,
                title: 'Libraries',
                sidebarMeta: {
                    icon: 'ion-ios-drag',
                    order: 250
                }
            })
            .state('addLibrary', {
                url: '/library/add',
                templateUrl: 'app/pages/library/views/add.html',
                controller: 'LibraryAddCtrl',
                // template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
                // abstract: true,
                title: 'Add Library'
            })
            .state('editLibrary', {
                url: '/library/edit/{id:int}',
                templateUrl: 'app/pages/library/views/edit.html',
                controller: 'LibraryEditCtrl',
                // template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
                // abstract: true,
                title: 'Edit Library'
            });
    }
})();
