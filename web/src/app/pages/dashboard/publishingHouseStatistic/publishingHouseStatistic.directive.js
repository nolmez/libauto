/**
 * @author v.lugovksy
 * created on 16.12.2015
 */
(function () {
  'use strict';

  angular.module('BlurAdmin.pages.dashboard')
      .directive('publishingHouseStatistic', publishingHouseStatistic);

  /** @ngInject */
  function publishingHouseStatistic() {
    return {
      restrict: 'E',
      controller: 'PublishingHouseStatisticCtrl',
      templateUrl: 'app/pages/dashboard/publishingHouseStatistic/publishingHouseStatistic.html'
    };
  }
})();