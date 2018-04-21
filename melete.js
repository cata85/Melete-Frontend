var numChilds = 0;
var childs = [];


function childFunc(code) {
    if (numChilds == 0) {
        childs.push(new CodeNode(null));
    }
    else {
        childs.push(new CodeNode(childs[numChilds - 1]));
    }
    numChilds++;

    childs[numChilds - 1].makeEditor(code);
}


var editorDiv = document.getElementById('source');
var Range = require('ace/range').Range;
var editor = ace.edit('source');

// Initialize ace
editor.getSession().setMode('ace/mode/javascript');
editor.setFontSize(12);
editor.setOptions({
    maxLines: 100,
    minLines: 30
});
editor.session.setValue(
                        "function reverse(str) {\n" +
                        "    if (str === \"\") {\n" +
                        "        return\"\";\n" +
                        "    }else{\n" +
                        "        return reverse(str.substr(i)) + str[0];\n" +
                        "    }\n" +
                        "}\n\n" +
                        "var str = \"hello\";\n" +
                        "console.log(reverse(str));"
                        );
editor.gotoLine(editor.session.getLength());