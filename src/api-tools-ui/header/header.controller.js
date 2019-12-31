/* jshint latedef: false */
(function () {
  'use strict';

  angular
    .module('api-tools')
    .controller('Header', Header);

  Header.$inject = [ 'SidebarService' ];

  function Header(SidebarService){
    /* jshint validthis:true */
    var vm = this;
    vm.setSelected = SidebarService.setSelected;
    vm.isCollapsed = true;
  }
})();
