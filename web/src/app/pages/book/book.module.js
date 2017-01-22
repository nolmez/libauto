/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.book', ['ui.select', 'ngSanitize'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('listBook', {
                url: '/book',
                templateUrl: 'app/pages/book/views/list.html',
                controller: 'BookListCtrl',
                // template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
                // abstract: true,
                title: 'Books',
                sidebarMeta: {
                    icon: 'ion-ios-book-outline',
                    order: 300
                }
            })
            .state('addBook', {
                url: '/book/add',
                templateUrl: 'app/pages/book/views/add.html',
                controller: 'BookAddCtrl',
                // template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
                // abstract: true,
                title: 'Add Book'
            })
            .state('editBook', {
                url: '/book/edit/{id:int}',
                templateUrl: 'app/pages/book/views/edit.html',
                controller: 'BookEditCtrl',
                // template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
                // abstract: true,
                title: 'Edit Book'
            });
    }
})();
