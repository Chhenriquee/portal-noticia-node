var mysql = require('mysql');

var connMySQL = function(){
		console.log('Conectado com Banco de dados');
		return mysql.createConnection({
			host : 'localhost', 
			user : 'root',
			password : '1234',
			database : 'portal_noticias'
		});
}

module.exports = function () {
	console.log('O autoload carregou modulo com banco de dados')
	return connMySQL;
}