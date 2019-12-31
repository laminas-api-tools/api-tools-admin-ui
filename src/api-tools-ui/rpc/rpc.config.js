/* jshint latedef: false */
(function () {
  'use strict';

  angular
    .module('api-tools.rpc')
    .config(config);

  var content = {
    url: '/module/:api/:ver/rpc/:rpc',
    views: {
      'content@': {
        templateUrl: 'api-tools-ui/rpc/rpc.html',
        controller: 'Rpc',
        controllerAs: 'vm'
      }
    }
  };

  config.$inject = [ '$stateProvider' ];
  function config ($stateProvider) {
    $stateProvider
      .state('ag.rpc', content)
  }

})();
