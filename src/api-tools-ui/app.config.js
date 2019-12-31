/* jshint latedef: false */
(function () {
  'use strict';

  angular
    .module('api-tools')
    .config(config)
    .directive('autofocus', ['$timeout', function($timeout) {
      return {
        restrict: 'A',
        link : function($scope, $element) {
          $timeout(function() {
            $element[0].focus();
          });
        }
      };
    }]);

  config.$inject = [
    '$provide',
    '$stateProvider',
    '$urlRouterProvider',
    '$httpProvider',
    'localStorageServiceProvider',
    'uiSelectConfig',
    'growlProvider'
  ];

  function config ($provide, $stateProvider, $urlRouterProvider, $httpProvider, localStorageServiceProvider, uiSelectConfig, growlProvider) {

    $provide.value(
      'agApiPath',
      angular.element('body').data('ag-api-path') ||
      angular.element('body').data('api-base-path') ||
      '/api'
    );

    /* jshint validthis: true */
    $stateProvider.state({
      name : 'ag',
      url : '/',
      controller: 'Application',
      views: {
        'header@' : {
          templateUrl: 'api-tools-ui/header/header.html',
          controller: 'Header',
          controllerAs: 'vm',
          parent: this
        },
        'sidebar@': {
          templateUrl: 'api-tools-ui/sidebar/sidebar.html',
          controller: 'Sidebar',
          controllerAs: 'vm',
          parent: this
        },
        'content@': {
          templateUrl: 'api-tools-ui/dashboard/dashboard.html',
          controller: 'Dashboard',
          controllerAs: 'vm',
          parent: this
        }
      }
    });

    $urlRouterProvider.otherwise('/');

    localStorageServiceProvider
      .setPrefix('api-tools');

    uiSelectConfig.theme = 'bootstrap';

    growlProvider.globalReversedOrder(true);
    growlProvider.globalTimeToLive(5000);
    growlProvider.globalDisableCountDown(true);
    growlProvider.onlyUniqueMessages(false);
  }

})();
