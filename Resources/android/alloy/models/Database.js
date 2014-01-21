exports.definition = {
    config: {
        columns: {
            idusuario: "int",
            usuario: "string",
            "contraseña": "string"
        },
        adapter: {
            type: "sql",
            collection_name: "database"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("database", exports.definition, []);

collection = Alloy.C("database", exports.definition, model);

exports.Model = model;

exports.Collection = collection;