module.exports = function(app){
	
	app.get('/', function(req, res){
		res.render('index');
		console.log(req);
	})

	app.post('/submit', function(req, res){

		res.render('index', {name: req.body.msg});
		
	})
}
