import { CONFIG } from "./default.js";

import { _Ckeditor } from "./components/Ckeditor";
Kapseli.plugins.add("ckeditor-kapseli", (app, opts) => {

    const CONF = {
            ...CONFIG,
            ...opts || {}
    }

    let add_comp = app.View.addComponent;
    const Component = app.Component;

    let CKEDITOR = _Ckeditor(Component);
    let c = new CKEDITOR();
    add_comp("CKEDITOR",c);

});