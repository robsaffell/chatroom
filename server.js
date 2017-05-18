var express = require('express'),
	app		= express (),
	http  = require('http'),
	bp		= require('body-parser'),
	path	= require('path'),
	port 	= 8000,
	server = http.createServer(app),
	io = require('socket.io')(server);


app.use(bp.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname + '/client')));
app.set('views', path.join(__dirname + '/client/templates'));
app.set('view engine', 'ejs');
require('./server/config/routes.js')(app);

io.on('connection', function(client) {
    console.log('Client connected...');

    client.on('join', function(data) {
        console.log(data);
				client.emit('messages', 'Hello from server');
    });

});


server.listen(port, function(){
	console.log('working');
})
