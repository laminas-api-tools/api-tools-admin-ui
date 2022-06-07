Laminas API Tools Admin UI (develop branch)
===================================

[![Build Status](https://github.com/laminas-api-tools/api-tools-admin-ui/actions/workflows/continuous-integration.yml/badge.svg)](https://github.com/laminas-api-tools/api-tools-admin-ui/actions/workflows/continuous-integration.yml)

> ## 🇷🇺 Русским гражданам
>
> Мы, участники Laminas, родились и живем в разных странах. У многих из нас есть друзья, родственники и коллеги как в России, так и в Украине. Некоторые из нас родились в России. Некоторые из нас живут в России. У некоторых бабушки и дедушки сражались с фашистами во Второй мировой войне. Здесь никто не поддерживает фашизм.
>
> У одного из нас есть украинская родственница, которая спаслась из дома вместе с сыном. Поезд задержался из-за бомбежки на дороге впереди. У нас есть друзья, которые прячутся в бомбоубежищах. Мы с тревогой ждем весточки от них после воздушных налетов, которые беспорядочно наносят удары и попадают по больницам, школам, детским садам и домам. Мы не берем это из каких-либо СМИ. Мы наблюдаем это напрямую.
>
> Вы доверяете нам достаточно, чтоб использовать наши программы, и мы просим вас довериться нам вновь. Мы нуждаемся в помощи. Выходите и протестуйте против этой бесполезной войны. Остановите кровопролитие. Скажите "Нет войне!"
>
> ## 🇺🇸 To Citizens of Russia
>
> We at Laminas come from all over the world. Many of us have friends, family and colleagues in both Russia and Ukraine. Some of us were born in Russia. Some of us currently live in Russia. Some have grandparents who fought Nazis in World War II. Nobody here supports fascism.
>
> One team member has a Ukrainian relative who fled her home with her son. The train was delayed due to bombing on the road ahead. We have friends who are hiding in bomb shelters. We anxiously follow up on them after the air raids, which indiscriminately fire at hospitals, schools, kindergartens and houses. We're not taking this from any media. These are our actual experiences.
>
> You trust us enough to use our software. We ask that you trust us to say the truth on this. We need your help. Go out and protest this unnecessary war. Stop the bloodshed. Say "stop the war!"

This is the source code for the new Laminas API Tools Admin User Interface.
We rewrote from scratch the UI in [AngularJS](https://angularjs.org/) with performance improvement and usability.

We added some new features:

- Doctrine support for DB connected REST service;
- DB autodiscovering for table and fields;
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
