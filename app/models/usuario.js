exports.definition = {
	config : {
		columns : {
			"nombre" : "TEXT",
			"password" : "TEXT"
		},
		adapter : {
			type : "sql",
			collection_name : "usuario"
		}
	},
	extendModel : function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
			validate : function(attrs) {
				for (var key in attrs) {
					var value = attrs[key];
					if (key === "nombre") {
						if (value.length <= 0) {
							return "Error: Nombre no existe";
						}
					}
					if (key === "password") {
						if (value.length <= 0) {
							return "Error: Password no existe";
						}
					}
				}
			},
		});

		return Model;
	},
	extendCollection : function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
}; 