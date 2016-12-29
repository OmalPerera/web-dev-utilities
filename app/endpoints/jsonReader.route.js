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
  router.get('/jsonreadingprocess', function (req, res) {
      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify({ id: 1, content: 'msg' }, null, 3));
    });

  module.exports = router;

}());
