// modules
var http = require('http');
var express = require('express');
var devUtilServerApp = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var appConfigs = require('./app/configs.app.js');

var server = http.createServer(devUtilServerApp);

process.on('uncaughtException', function (error) {
  if (error !== undefined) {
    console.log('undefined error : ' + error);
  }else {
    console.log(JSON.stringify(error));
  }
});

// configuration

// setting up the port
var port = appConfigs.serverPort;

// get all data/stuff of the body (POST) parameters
// parse application/json
devUtilServerApp.use(bodyParser.json());

// parse application/vnd.api+json as json
devUtilServerApp.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// parse application/x-www-form-urlencoded
devUtilServerApp.use(bodyParser.urlencoded({ extended: true }));

// override with the X-HTTP-Method-Override header in the request. simulate DELETE/PUT
devUtilServerApp.use(methodOverride('X-HTTP-Method-Override'));

// set the static files location /public/img will be /img for users
//devUtilServerApp.use(express.static(__dirname + '/public'));
devUtilServerApp.set('view options', { layout: false });
devUtilServerApp.use(express.static(__dirname + '/public'));

// routes
require('./app/routes')(devUtilServerApp); // configure our routes

// start app
devUtilServerApp.listen(port);

// shoutout to the user
console.log('Server Started on port ' + port);

// expose app
exports = module.exports = devUtilServerApp;
