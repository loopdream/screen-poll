// React components
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
// import PollApp from './PollApp.jsx';
// Import routing components
import ReactDOM from 'react-dom';
import Presenter from './Presenter.jsx';
import Client from './Client.jsx';

const app = document.getElementById('app');

// var AboutPage = require('./AboutPage.jsx');
// var FAQPage = require('./FAQPage.jsx');

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/poll/:pollId" component={Client} />
    <Route path="/poll/:pollId/presenter" component={Presenter} />
  </Router>
  , app
);
