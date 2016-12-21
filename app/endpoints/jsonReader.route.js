(function () {

  









  module.exports = function (express, Conversions) {
      var router = express.Router();

      router.route('/jsonreader/read').post(function (req, res) {
        Conversions.doReadJsonProcess(req.body, function (error, result) {
          if (error) {
            console.log('error in conversion');
          }else {
            console.log('successfully converted');
          }

          res.json('fafafafa');
        });

        //console.log('got it');
      });
    };
}());
