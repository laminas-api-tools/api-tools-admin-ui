(function () {
  'use strict';

  angular
    .module('api-tools', [
      'api-tools.core',
      'api-tools.service',
      'api-tools.modal',
      'api-tools.api-module',
      'api-tools.rest',
      'api-tools.rpc',
      'api-tools.content-negotiation',
      'api-tools.authentication',
      'api-tools.database',
      'api-tools.documentation',
      'api-tools.package',
      'api-tools.about',

      'ngSanitize',
      'ui.bootstrap',
      'ui.router',
      'ui.tree',
      'ui.select',
      'angular-ladda',
      'unsavedChanges',
      'ngTagsInput',
      'checklist-model',
      'toggle-switch',
      'angular-growl'
    ]);
})();
