/*global module*/

(function () {
  var express = require('express');
  var router = express.Router();

  // middleware that is specific to this router
  router.use(function timeLog(req, res, next) {
      console.log('Time: ', Date.now());
      next();
    });

  // define the home page route
  router.get('/', function (req, res) {
      res.send('json Reader home page');
    });

  // define the about route
  router.post('/jsonreadingprocess', function (req, res) {
      res.json('About json reader 123');
    });

  module.exports = router;

}());
