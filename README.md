Laminas API Tools Admin UI (develop branch)
===================================

This is the source code for the new Laminas API Tools Admin User Interface.
We rewrote from scratch the UI in [AngularJS](https://angularjs.org/) with performance improvement and usability.

We added some new features:

- Doctrine support for DB connected REST service;
- DB autodiscovering for table and fields;
- Build package API file, ready for deployment (develop in progress, see [TODO list](TODO.md));
- Per-API authentication (develop in progress, see [TODO list](TODO.md));

> **Note**
>
> To be able to run the new UI you need to use the **develop** branch of [api-tools-skeleton](https://github.com/laminas-api-tools/api-tools-skeleton)
> For instance, you can install the develop branch using composer:
>
> ```sh
> composer create-project laminas-api-tools/api-tools-skeleton api-tools dev-develop
> ```
>
> This command install the api-tools-skeleton application in the api-tools local folder. 


Requirements
------------

- [npm](https://npmjs.org/), for installing the various development
  requirements, which primarily includes [Grunt](http://gruntjs.com) and
  [Bower](http://bower.io/), and tools these to utilize.
- [Grunt](http://gruntjs.com/) must be installed globally in order to allow using
  it to serve a source build and run tests.
- [Bower](http://bower.io/) must be installed globally in order to allow using
  it to install development dependencies.

Run the following command from this directory to install dependencies:

```bash
$ npm install
```

If you have not yet installed Grunt, please do so:

```bash
$ sudo npm install -g grunt
```

If you have not yet installed Bower, please do so:

```bash
$ sudo npm install -g bower
```

Finally, invoke Bower to install the relevant CSS and JS libraries:

```bash
$ bower install
```

Invoking the Admin
------------------

There are three ways to invoke the Admin UI: as part of an Laminas API Tools project,
standalone via [node](https://nodejs.org), or via source using grunt.

### Via Laminas API Tools

Add the admin as a dev requirement to your project:

```bash
$ composer require-dev "laminas-api-tools/api-tools-admin-ui:~1.0"
```

and add the module `Laminas\ApiTools\Admin\Ui` to the list of modules in
`config/development.config.php.dist` (and potentially
`config/development.config.php` if already in development mode.

Navigating to the URI `/api-tools/ui` in your Laminas API Tools application will now hit the UI.

### Standalone

The standalone method fires up a webserver using node. This method requires that
you have a running Laminas API Tools Admin API and know the URL, and that that server is
configured to enable CORS; see [the Laminas API Tools CORS
documentation](https://api-tools.getlaminas.org/documentation/recipes/allowing-request-from-other-domains)
if you need help setting this aspect up. Make a note of the URI for your server;
the API URI will be `<server>/api-tools/api`.

Additionally, we recommend noting the URI to your API documentation, so that the
navigation item can point to it.

Fire up the admin UI using:

```bash
$ node index.js --src --api=<URI to Laminas API Tools Admin API (ends in /api-tools/api)>
```

(For help with options, see `node index.js -h`.)

By default, if you do not specify a port, the server will run on port 3000; you
can specify a port with the `--port=<port>` option.

### Source invocation via Grunt

The `grunt serve` command does several things:

- Runs `grunt watch`, which looks for file changes and runs tasks such as
  `jshint`, unit tests, and combining partials into JS templates.
- Runs a livereload, static HTTP server; any file change will force it to
  reload, and trigger any browser windows with the UI loaded to reload.

The grunt server runs in the same way as the standalone server: it accepts the
same options, and has the same CORS limitations. As an example:

```bash
$ grunt serve --api=<URI to Laminas API Tools Admin API (ends in /api-tools/api)> \
> --doc=<URI to API documentation> --port=3001 --host=ag.dev
```

Please see our [contributing guide](CONTRIBUTING.md) for information on how to
run tests and hack on the UI.
