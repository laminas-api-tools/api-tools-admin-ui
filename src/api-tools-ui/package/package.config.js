/* jshint latedef: false */
(function () {
  'use strict';

  angular
    .module('api-tools.package')
    .config(config);

  var content = {
    url: '/package',
    views: {
      'content@': {
        templateUrl: 'api-tools-ui/package/package.html',
        controller: 'Package',
        controllerAs: 'vm'
      }
    }
  };

  config.$inject = [ '$stateProvider' ];
  function config ($stateProvider) {
    $stateProvider
      .state('ag.package', content)
  }

})();
