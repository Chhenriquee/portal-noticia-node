module.exports = function(app) {

	app.get('/noticia', function(req, res){

		var connection = app.config.dbConnection();	
		var noticiasModels = new app.app.models.NoticiasDAO(connection);

		noticiasModels.getNoticia(function(error, result){
			res.render("noticias/noticia", {noticia : result});
		});
	});
};
