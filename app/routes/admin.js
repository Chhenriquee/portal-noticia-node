module.exports = function(application){
	application.get('/formulario_inclusao_noticia', function(req, res){
		res.render("admin/form_add_noticia");
	});

	application.post('/noticias/salvar', function(req, res){
		var noticia = req.body;

		var connection = application.config.dbConnection();	
		var noticiasModels = new application.app.models.NoticiasDAO(connection);

		noticiasModels.salvarNoticia(noticia, function(error, result){
			res.redirect('/noticias');
		});
	});
}