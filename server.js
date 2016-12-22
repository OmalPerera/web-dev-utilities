(function () {
  'use strict';

  //load the DI & Container Registry
  var CoolBeans = require('CoolBeans');
  global.DIRegistry = new CoolBeans('./app/utils/diregistry.util.json');

  //load the dependencies
  var http = global.DIRegistry.get('http');
  var express = global.DIRegistry.get('express');
  var methodOverride = global.DIRegistry.get('methodOverride');
  var bodyParser = global.DIRegistry.get('bodyParser');
  var jsonReader = global.DIRegistry.get('jsonReader');

  var devUtilServerApp = express();
  var server = http.createServer(devUtilServerApp);

  var appConfigs = require('./app/configs.app.js');
  /*
  process.on('uncaughtException', function (error) {
    if (error !== undefined) {
      console.log('undefined error : ' + error);
    }else {
      console.log(JSON.stringify(error));
    }
  });
  */

  // setting up the port
  var port = appConfigs.serverPort;

  /**bodyParser.json(options)
    * Parses the text as JSON and exposes the resulting object on req.body.
  */
  devUtilServerApp.use(bodyParser.json());

  // parse application/vnd.api+json as json
  devUtilServerApp.use(bodyParser.json({ type: 'application/vnd.api+json' }));

  // parse application/x-www-form-urlencoded
  /** bodyParser.urlencoded(options)
    * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
    * and exposes the resulting object (containing the keys and values) on req.body
  */
  devUtilServerApp.use(bodyParser.urlencoded({ extended: true }));

  // override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
  devUtilServerApp.use(methodOverride('X-HTTP-Method-Override'));

  // set the static files location /public/img will be /img for users
  //devUtilServerApp.use(express.static(__dirname + '/public'));
  devUtilServerApp.set('view options', { layout: false });
  devUtilServerApp.use(express.static(__dirname + '/public'));

  devUtilServerApp.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header', 'Content-Type');
    res.header('Access-Control-Allow-Methods', 'GET,POST');
    next();
  });

  // routes
  require('./app/routes/publicRoutes.routes')(devUtilServerApp); // configure our routes

  // API routing
  devUtilServerApp.use('/api', jsonReader);

  //endpoints
  //var jsonReader = require('./app/endpoints/jsonreader.route')(express, devUtilServerApp);
  //devUtilServerApp.use('/jsonreader/readprocess', jsonReader.route);

  // start app
  devUtilServerApp.listen(port);

  // shoutout to the user
  console.log('Server Started on port ' + port);

  // expose app
  exports = module.exports = devUtilServerApp;

}());
