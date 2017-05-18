module.exports = function(app){

	app.get('/', function(req, res){
		res.render('index');
		console.log(req.body);
	})

	app.post('/submit', function(req, res){
		res.render('index', req.body);
		console.log(req.body);
	})
}
