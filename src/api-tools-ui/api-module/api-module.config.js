/* jshint latedef: false */
(function () {
  'use strict';

  angular
    .module('api-tools.api-module')
    .config(config);

  var apimodule = {
    url: '/module/:api/:ver',
    views: {
      'content@': {
        templateUrl: 'api-tools-ui/api-module/api-module.html',
        controller: 'ApiModule',
        controllerAs: 'vm'
      }
    }
  };

  config.$inject = [ '$stateProvider' ];
  function config ($stateProvider) {
    $stateProvider
      .state('ag.apimodule', apimodule)
  }

})();
