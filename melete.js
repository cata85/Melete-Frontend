var subDivCount = 1;
var top = 50;
var left = 600;


function displayFunction(code) {
    // Temporary, may not need subDivCount or divID!
    var div = document.createElement("div");
    div.id = "func" + subDivCount.toString();
    div.style.border = "1px solid lightgray";
    div.style.marginTop = top + "px";
    div.style.marginLeft = left + "px";
    div.style.width = "30%";
    document.body.insertBefore(div, null);
    subDivCount++;
    top+= 1000;
    code = "function reverse(str) {\n" +
           "    if (str === \"\") {\n" +
           "        return\"\";\n" +
           "    }else{\n" +
           "        return reverse(str.substr(i)) + str[0];\n" +
           "    }\n" +
           "}";
    var tempEditor = ace.edit(div.id);
    tempEditor.getSession().setMode('ace/mode/javascript');
    tempEditor.setFontSize(12);
    tempEditor.setOption("maxLines", 10);
    tempEditor.session.setValue(code);
    var lineNumber = tempEditor.session.getLength();
    tempEditor.gotoLine(lineNumber);
}


var editorDiv = document.getElementById('source');
var Range = require('ace/range').Range;
var editor = ace.edit('source');

// Initialize ace
editor.getSession().setMode('ace/mode/javascript');
editor.setFontSize(12);
editor.setOption("maxLines", 100);
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