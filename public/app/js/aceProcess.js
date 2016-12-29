var jsonReaderInput = ace.edit('jsonReaderInput');
jsonReaderInput.setTheme('ace/theme/monokai');
jsonReaderInput.getSession().setMode('ace/mode/javascript');

var jsonReaderOutput = ace.edit('jsonReaderOutput');
jsonReaderOutput.setTheme('ace/theme/monokai');
jsonReaderOutput.getSession().setMode('ace/mode/javascript');

jsonReaderInput.getSession().on('change', function (e) {
  post('/api/jsonreadingprocess', { name: 'Omal Perera' });
  jsonReaderOutput.setValue('the new text here');
});

// post request sender
function post(path, params) {
  method = 'post'; // Set method to post by default if not specified.

  var form = document.createElement('form');
  form.setAttribute('method', method);
  form.setAttribute('action', path);

  for (var key in params) {
    if (params.hasOwnProperty(key)) {
      var hiddenField = document.createElement('input');
      hiddenField.setAttribute('type', 'hidden');
      hiddenField.setAttribute('name', key);
      hiddenField.setAttribute('value', params[key]);

      form.appendChild(hiddenField);
    }
  }

  document.body.appendChild(form);
  form.submit();
}
