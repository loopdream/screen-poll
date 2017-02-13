import React from 'react';
import ContectedUsers from './ContectedUsers.jsx';


export default class ClientApp extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
				<h1>I am the client</h1>
        <ContectedUsers />
      </div>
    );
  }
}
