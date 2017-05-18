var express = require('express'),
	app		= express (),
	bp		= require('body-parser'),
	path	= require('path'),
	port 	= 8000;

app.use(bp.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname + '/client')));
app.set('views', path.join(__dirname + '/client/templates'));
app.set('view engine', 'ejs');
io.on('connection', function(client) {
    console.log('Connected...');
    client.on('join', function(data) {
        console.log(data);
    });

});
require('./server/config/routes.js')(app);

app.listen(port, function(){
	console.log('working');
})
