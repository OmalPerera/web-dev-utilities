(function () {
  function doReadJsonProcess(stringifiedJson, callback) {
    var body = {
      userInput: stringifiedJson,
    };
    console.log('--------------- doReadJsonProcess started ---------------');
    callback('abc');
  }
}());
