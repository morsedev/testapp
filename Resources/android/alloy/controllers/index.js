function Controller() {
    function doClick() {
        alert(print);
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.index = Ti.UI.createWindow({
        backgroundColor: "white",
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    $.__views.label = Ti.UI.createLabel({
        width: Ti.UI.SIZE,
        height: Ti.UI.SIZE,
        color: "#000",
        text: "Hello, World",
        id: "label"
    });
    $.__views.index.add($.__views.label);
    doClick ? $.__views.label.addEventListener("click", doClick) : __defers["$.__views.label!click!doClick"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    var db = Ti.Database.open("db");
    db.execute("CREATE TABLE IF NOT EXISTS usuario(id INTEGER PRIMARY KEY, usuario TEXT, password TEXT);");
    db.execute("CREATE TABLE IF NOT EXISTS opciones(nombre TEXT UNIQUE, opcion TEXT);");
    var opcionRS = db.execute("SELECT * FROM opciones WHERE nombre = 'defaultuser'");
    var print;
    if (null !== opcionRS || void 0 !== opcionRS) while (opcionRS.isValidRow()) {
        print = opcionRS.fieldByName("nombre");
        alert(print);
        opcionRS.next();
    }
    if (null === print || "" === print || void 0 === print) {
        alert("nada");
        db.execute("INSERT INTO opciones (nombre, opcion) values('defaultuser', null);");
    }
    $.index.open();
    __defers["$.__views.label!click!doClick"] && $.__views.label.addEventListener("click", doClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;