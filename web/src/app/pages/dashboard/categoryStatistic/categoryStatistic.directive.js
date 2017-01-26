/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('categoryStatistic', categoryStatistic);

  /** @ngInject */
  function categoryStatistic() {
    return {
      restrict: 'E',
      controller: 'CategoryStatisticCtrl',
      templateUrl: 'app/pages/dashboard/categoryStatistic/categoryStatistic.html'
    };
  }
})();