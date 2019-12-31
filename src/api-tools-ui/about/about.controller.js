/* jshint latedef: false */
(function () {
  'use strict';

  angular
  .module('api-tools.about')
  .controller('About', About);

  About.$inject = [ '$stateParams', 'api', '$timeout' ];

  function About($stateParams, api, $timeout) {
    /* jshint validthis:true */
    var vm = this;

    vm.version = '@dev';

    function init() {
      api.getApiToolsVersion(function (data) {
        vm.version = data.version;
      });
    }

    init();
  }
})();
