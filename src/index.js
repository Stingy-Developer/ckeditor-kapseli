import { CONFIG } from "./default.js";

import { _Ckeditor } from "./components/Ckeditor";
Kapseli.plugins.add("ckeditor-kapseli", (app, opts) => {

    const CONF = {
            ...CONFIG,
            ...opts || {}
    }
    
    const Component = app.Component;

    const add_comp = (el,k) => {
        app.View.addComponent(el,k);
    }

    let CKEDITOR = _Ckeditor(Component);
    let c = new CKEDITOR();
    add_comp("CKEDITOR",c);

});