$(function(){
	
	var socket = io();
	// console.log('HELLO', $('#m'), socket);

	$('form').submit(function(e){
		console.log('Sumbit!', $('#m').val());
		socket.emit('chat message', $('#m').val());
		$('#m').val('');
		e.preventDefault();
		return false;
	});

	socket.on('chat message', function(msg){
		$('#messages').append($('<li>').text(msg));
	});

	socket.on('connectedUsers', function(msg){
		$('#connectedUsers span').html(msg);
	});

});