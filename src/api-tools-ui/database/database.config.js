/* jshint latedef: false */
(function () {
  'use strict';

  angular
    .module('api-tools.database')
    .config(config);

  var content = {
    url: '/db',
    views: {
      'content@': {
        templateUrl: 'api-tools-ui/database/database.html',
        controller: 'Database',
        controllerAs: 'vm'
      }
    }
  };

  config.$inject = [ '$stateProvider' ];
  function config ($stateProvider) {
    $stateProvider
      .state('ag.database', content)
  }

})();
