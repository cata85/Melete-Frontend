var editorDiv = document.getElementById('source');
var Range = require('ace/range').Range;
var editor = ace.edit('source');

// Initialize ace
editor.getSession().setMode('ace/mode/javascript');
editor.setFontSize(12);
editor.setOption("maxLines", 100);


//function displayFunction(var code) {
    //return null;
//}