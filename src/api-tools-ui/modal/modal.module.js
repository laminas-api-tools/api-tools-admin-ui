(function () {
  'use strict';

  angular
    .module('api-tools.modal', [
      'ui.router'
    ])
    .filter('emptyObject', function () {
      return function (obj) {
        return angular.equals({}, obj);
      };
    });
})();
