/*global describe, it, expect, should, before, beforeEach, after, afterEach */
'use strict';

describe('Laminas API Tools: Module Exists', function () {
  var module;

  beforeEach(function() {
    module = angular.module('api-tools');
  });

  it('should be registered', function() {
    expect(module).not.toBe(null);
  });

  describe('Dependencies:', function() {
    var deps;

    function hasModule(m) {
      return deps.indexOf(m) >= 0;
    }

    beforeEach(function() {
      deps = module.value('appName').requires;
    });

    it('should have api-tools.core as a dependency', function() {
      /*jshint expr: true */
      expect(hasModule('api-tools.core')).toBe(true);
    });

    it('should have api-tools.service as a dependency', function() {
      /*jshint expr: true */
      expect(hasModule('api-tools.service')).toBe(true);
    });

    it('should have api-tools.modal as a dependency', function() {
      /*jshint expr: true */
      expect(hasModule('api-tools.modal')).toBe(true);
    });

    it('should have api-tools.api-module as a dependency', function() {
      /*jshint expr: true */
      expect(hasModule('api-tools.api-module')).toBe(true);
    });

    it('should have api-tools.rest as a dependency', function() {
      /*jshint expr: true */
      expect(hasModule('api-tools.rest')).toBe(true);
    });

    it('should have api-tools.rpc as a dependency', function() {
      /*jshint expr: true */
      expect(hasModule('api-tools.rpc')).toBe(true);
    });

    it('should have api-tools.content-negotiation as a dependency', function() {
      /*jshint expr: true */
      expect(hasModule('api-tools.content-negotiation')).toBe(true);
    });

    it('should have api-tools.authentication as a dependency', function() {
      /*jshint expr: true */
      expect(hasModule('api-tools.authentication')).toBe(true);
    });

    it('should have api-tools.database as a dependency', function() {
      /*jshint expr: true */
      expect(hasModule('api-tools.database')).toBe(true);
    });

    it('should have api-tools.documentation as a dependency', function() {
      /*jshint expr: true */
      expect(hasModule('api-tools.documentation')).toBe(true);
    });

    it('should have api-tools.package as a dependency', function() {
      /*jshint expr: true */
      expect(hasModule('api-tools.package')).toBe(true);
    });
  });
});
