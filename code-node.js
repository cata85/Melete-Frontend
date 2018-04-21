class CodeNode {

    constructor(parent) {
        this.parent = parent;
        if (this.parent == null) {
            this.ID = 1;
        }
        else {
            this.ID = this.parent.ID + 1;
        }
        this.container = document.createElement("div");
        this.container.className = "code-container";
        this.container.id = `func${this.ID}`;
        this.div = document.createElement("div");
        this.container.appendChild(this.div);
        document.getElementById("container").appendChild(this.container);
        this.editor = ace.edit(this.div)
    }


    makeEditor(code) {
        code = "function reverse(str) {\n" +
               "    if (str === \"\") {\n" +
               "        return\"\";\n" +
               "    }else{\n" +
               "        return reverse(str.substr(i)) + str[0];\n" +
               "    }\n" +
               "}";

        this.editor.getSession().setMode('ace/mode/javascript');
        this.editor.setFontSize(12);
        this.editor.setOption("maxLines", 10);
        this.editor.session.setValue(code);
        var lineNumber = this.editor.session.getLength();
        this.editor.gotoLine(lineNumber);
    }
}