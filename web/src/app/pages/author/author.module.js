/**
 * @author v.lugovsky
 * created on 16.12.2015
 */
(function () {
    'use strict';

    angular.module('BlurAdmin.pages.author', ['ui.select', 'ngSanitize'])
        .config(routeConfig);

    /** @ngInject */
    function routeConfig($stateProvider) {
        $stateProvider
            .state('listAuthor', {
                url: '/author',
                templateUrl: 'app/pages/author/views/list.html',
                controller: 'AuthorListCtrl',
                // template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
                // abstract: true,
                title: 'Authors',
                sidebarMeta: {
                    icon: 'ion-ios-compose-outline',
                    order: 250
                }
            })
            .state('addAuthor', {
                url: '/author/add',
                templateUrl: 'app/pages/author/views/add.html',
                controller: 'AuthorAddCtrl',
                // template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
                // abstract: true,
                title: 'Add Author'
            })

            .state('editAuthor', {
                url: '/author/edit/{id:int}',
                templateUrl: 'app/pages/author/views/edit.html',
                controller: 'AuthorEditCtrl',
                // template: '<ui-view autoscroll="true" autoscroll-body-top></ui-view>',
                // abstract: true,
                title: 'Edit Author'
            });
    }
})();
