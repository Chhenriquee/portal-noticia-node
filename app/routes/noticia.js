module.exports = function(app) {

	app.get('/noticia', function(req, res){

		var connection = app.config.dbConnection();	
		var noticiasModels = app.app.models.noticiasModels;

		noticiasModels.getNoticia(connection, function(error, result){
			res.render("noticias/noticia", {noticia : result});
		});
	});
};
