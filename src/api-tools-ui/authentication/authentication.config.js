/* jshint latedef: false */
(function () {
  'use strict';

  angular
    .module('api-tools.authentication')
    .config(config);

  var content = {
    url: '/auth',
    views: {
      'content@': {
        templateUrl: 'api-tools-ui/authentication/authentication.html',
        controller: 'Authentication',
        controllerAs: 'vm'
      }
    }
  };

  config.$inject = [ '$stateProvider' ];
  function config ($stateProvider) {
    $stateProvider
      .state('ag.authentication', content)
  }

})();
