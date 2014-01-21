exports.definition = {
	config : {
		columns : {
			"nombre" : "string",
			"opcion" : "string"
		},
		adapter : {
			type : "sql",
			collection_name : "opcion"
		}
	},
	extendModel : function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
			validate : function(attrs) {
				for (var key in attrs) {
					var value = attrs[key];
					if (key === "defaultuser") {
						if (value.length <= 0) {
							return "Error: opcion default user no seteada";
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