var db = Ti.Database.open("db");
db.execute('CREATE TABLE IF NOT EXISTS usuario(id INTEGER PRIMARY KEY, usuario TEXT, password TEXT);');
db.execute('CREATE TABLE IF NOT EXISTS opciones(nombre TEXT UNIQUE, opcion TEXT);');
var opcionRS = db.execute("SELECT * FROM opciones WHERE nombre = 'defaultuser'");
var print;

//var defaultuser = "defaultuser";

if (opcionRS !== null || opcionRS !== undefined) {

	while (opcionRS.isValidRow()) {
		print = opcionRS.fieldByName('nombre');
		alert(print);
		opcionRS.next();
	}
}

//var user = Alloy.createModel('usuario', {nombre: 'gaby', password: '1234'});
//if(user.isValid()){
//	user.save();
//}

//var lista = Alloy.createCollection('usuario');
//lista.fetch();


//var print = lista.where({nombre: 'gaby'});
	
if(print === null || print === "" || print === undefined){
		alert("nada");
		db.execute("INSERT INTO opciones (nombre, opcion) values('defaultuser', null);");
	}
//}


function doClick(e) {
	alert(print);
}

$.index.open();
