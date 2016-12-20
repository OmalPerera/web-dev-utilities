var jsonReaderInput = ace.edit('jsonReaderInput');
jsonReaderInput.setTheme('ace/theme/monokai');
jsonReaderInput.getSession().setMode('ace/mode/javascript');

var jsonReaderOutput = ace.edit('jsonReaderOutput');
jsonReaderOutput.setTheme('ace/theme/monokai');
jsonReaderOutput.getSession().setMode('ace/mode/javascript');

jsonReaderInput.getSession().on('change', function (e) {
  jsonReaderOutput.setValue('the new text here');
});
