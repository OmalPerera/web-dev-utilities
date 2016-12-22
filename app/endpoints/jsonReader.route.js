/*global module*/

(function () {

  module.exports = function (express, devUtilServerApp) {
    /*
    devUtilServerApp.get('/jsonReader/readProcess', function (req, res) {
      devUtilServerApp.emit('testEvent');
      console.log('---------------- got it - GET-----------------');
      res.status(200);
      res.write('<html><body><h1>Reading Precess Started</h1></body></html>');
      res.end();
      return res;
    });
    */
    /*
      express.Router class to create modular, mountable route handlers.
      A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.
    */

    //var express = require('express');
    var router = express.Router();

    //POST Request
    router.route('/jsonreader/readproces').get(function (req, res) {
          devUtilServerApp.emit('testEvent');
          console.log('---------------- got it - POST -----------------');
          res.status(200);
          res.write('<html><body><h1>Reading Precess Started</h1></body></html>');
          res.end();
          return res;
        });

    return router;
  };
}());
