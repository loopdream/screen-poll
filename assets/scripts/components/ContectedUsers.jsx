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
    this._userCount();
  }

  _userCount() {
    this.socket.on('user:count', data => {
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
