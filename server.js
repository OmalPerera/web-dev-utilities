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
  var jsonReaderEndpoint = global.DIRegistry.get('jsonReaderEndpoint');

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

  // configure app to use bodyParser(). This will help to get data from POST
  devUtilServerApp.use(bodyParser.json());
  devUtilServerApp.use(bodyParser.urlencoded({ extended: true }));
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

  //Registering the Routes & all the routes will be prefixed by /api
  devUtilServerApp.use('/api', jsonReaderEndpoint);

  // start app
  devUtilServerApp.listen(port);

  // shoutout to the user
  console.log('Server Started on port ' + port);

  // expose app
  exports = module.exports = devUtilServerApp;

}());
