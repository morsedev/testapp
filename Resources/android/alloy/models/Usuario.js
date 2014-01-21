exports.definition = {
    config: {
        columns: {
            nombre: "TEXT",
            password: "TEXT"
        },
        adapter: {
            type: "sql",
            collection_name: "usuario"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            validate: function(attrs) {
                for (var key in attrs) {
                    var value = attrs[key];
                    if ("nombre" === key && 0 >= value.length) return "Error: Nombre no existe";
                    if ("password" === key && 0 >= value.length) return "Error: Password no existe";
                }
            }
        });
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("usuario", exports.definition, []);

collection = Alloy.C("usuario", exports.definition, model);

exports.Model = model;

exports.Collection = collection;