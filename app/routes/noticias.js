module.exports = function(application) {

	application.get('/noticias', function(req, res){

		var connection = application.config.dbConnection();	
		var noticiasModels = new application.app.models.NoticiasDAO(connection);

		noticiasModels.getNoticias(function(error, result){
			res.render("noticias/noticias", {noticias : result});
		});
	});
};
