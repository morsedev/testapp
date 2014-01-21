exports.definition = {
    config: {
        columns: {
            nombre: "string",
            opcion: "string"
        },
        adapter: {
            type: "sql",
            collection_name: "opcion"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {
            validate: function(attrs) {
                for (var key in attrs) {
                    var value = attrs[key];
                    if ("defaultuser" === key && 0 >= value.length) return "Error: opcion default user no seteada";
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

model = Alloy.M("opcion", exports.definition, []);

collection = Alloy.C("opcion", exports.definition, model);

exports.Model = model;

exports.Collection = collection;