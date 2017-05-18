module.exports = function(app){

	app.get('/', function(req, res){
		res.render('index');
	})

	app.post('/submit', function(req, res){
		res.render('index', req.body);
		console.log(req.body);
	})
}
