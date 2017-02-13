// React components
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
// import PollApp from './PollApp.jsx';
// Import routing components
import ReactDOM from 'react-dom';
import PresenterApp from './PresenterApp.jsx';
import ClientApp from './ClientApp.jsx';

const app = document.getElementById('app');


// $('form').submit(function(e){
// 	console.log('Sumbit!', $('#m').val());
// 	socket.emit('chat message', $('#m').val());
// 	$('#m').val('');
// 	e.preventDefault();
// 	return false;
// });

// socket.on('chat message', function(msg){
// 	$('#messages').append($('<li>').text(msg));
// });

// socket.on('user:join', function(msg) {
// 	console.log('user:join', msg);
// 	$('#connectedUsers').html(msg);
// });

// socket.on('user:left', function(msg) {
// 	console.log('user:left', msg);
// 	$('#connectedUsers').html(msg);
// });


ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/poll/:pollId" component={ClientApp} />
    <Route path="/poll/:pollId/presenter" component={PresenterApp} />
  </Router>
  , app
);
