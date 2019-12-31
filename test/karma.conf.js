// Karma configuration
// Generated on Thu Feb 19 2015 13:32:04 GMT+0100 (CET)

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '..',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      // vendor
      'src/vendor/angular/angular.js',
      'src/vendor/angular-ui-bootstrap-bower/ui-bootstrap-tpls.min.js',
      'src/vendor/angular-ui-router/release/angular-ui-router.min.js',
      'src/vendor/angular-mocks/angular-mocks.js',
      
      // src
      'src/api-tools-ui/**/*.module.js',
      'src/api-tools-ui/**/*.js',

      //'src/api-tools-ui/app.config.js',
      //'src/api-tools-ui/core/**/*.js',
      //'src/api-tools-ui/header/**/*.js',
      //'src/api-tools-ui/sidebar/**/*.js',
      //'src/api-tools-ui/dashboard/**/*.js',
      //'src/api-tools-ui/modal/**/*.js',
      //'src/api-tools-ui/api-module/**/*.js',
      //'src/api-tools-ui/rest/**/*.js',
      //'src/api-tools-ui/rpc/**/*.js',
      //'src/api-tools-ui/content-negotiation/**/*.js',
      //'src/api-tools-ui/authentication/**/*.js',
      //'src/api-tools-ui/database/**/*.js',
      //'src/api-tools-ui/documentation/**/*.js',
      //'src/api-tools-ui/package/**/*.js',
      //'src/api-tools-ui/service/**/*.js',

      'test/unit/**/*.js'
    ],


    // list of files to exclude
    exclude: [

    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {

    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
