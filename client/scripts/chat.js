$(document).ready(function() {
	$("#close").click(function(){
		window.close();
	});

	$("#pics").click(function() {
		$("#popup").toggle();
	});
	var socket = io.connect('http://localhost:8000');
	socket.emit('join', function(data){
		console.log('Clint.emit');
	})
	socket.on('connection', function(data) {
		console.log('Hellow');
	});
	socket.on('messages', function(data) {
			alert(data);
	});
	$('#submit').click(function(){

		var formData = $('#box').serializeArray()
		$('.left').append(formData[0].value)
		socket.emit('text', formData)
		$("#text").each(function() {
			this.reset();
		})
		return false;
	});
	socket.on('screen', function(data){
		console.log(data);
		$('.right').append(data)

	})
});
