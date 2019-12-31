/* jshint latedef: false */
(function () {
  'use strict';

  angular
    .module('api-tools.about')
    .config(config);

  var apimodule = {
    url: '/about',
    views: {
      'content@': {
        templateUrl: 'api-tools-ui/about/about.html',
        controller: 'About',
        controllerAs: 'vm'
      }
    }
  };

  config.$inject = [ '$stateProvider' ];
  function config ($stateProvider) {
    $stateProvider
      .state('ag.about', apimodule)
  }

})();
