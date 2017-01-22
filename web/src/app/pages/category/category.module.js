/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.category', ['ui.select', 'ngSanitize'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('listCategory', {
                url: '/category',
                templateUrl: 'app/pages/category/views/list.html',
                controller: 'CategoryListCtrl',
                // template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
                // abstract: true,
                title: 'Categories',
                sidebarMeta: {
                    icon: 'ion-ios-pricetags-outline',
                    order: 100
                }
            })
            .state('addCategory', {
                url: '/category/add',
                templateUrl: 'app/pages/category/views/add.html',
                controller: 'CategoryAddCtrl',
                // template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
                // abstract: true,
                title: 'Add Category'
            })
            .state('editCategory', {
                url: '/category/edit/{id:int}',
                templateUrl: 'app/pages/category/views/edit.html',
                controller: 'CategoryEditCtrl',
                // template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
                // abstract: true,
                title: 'Edit Category'
            });
    }
})();
