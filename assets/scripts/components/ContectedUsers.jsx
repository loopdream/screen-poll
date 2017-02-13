import React from 'react';

import io from 'socket.io-client'


export default class ContectedUsers extends React.Component {

  constructor(props) {
    super(props);
    this.socket = io();
    this.state = { 
        userCount: null
    };
  }

  componentDidMount() {
    this._userJoin();
    this._userLeft();
  }

  _userJoin() {
    this.socket.on('user:join', data => {
      this.setState({ userCount: data });
    });
  }

  _userLeft() {
    this.socket.on('user:left', data => {
      this.setState({ userCount: data });
    });
  }
 

  render() {
    return (
      <div>
				<p>
          Connected Users: <span id="connectedUsers">{this.state.userCount}</span>
        </p>
      </div>
    );
  }
}
