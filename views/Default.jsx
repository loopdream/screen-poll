// Default layout template
var React = require('react');

var Default = React.createClass({

  render: function() {

    return(
      <html>
      <head>
        <meta charSet="utf-8"></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"></meta>
        <title>Poll App</title>
        <link href='https://fonts.googleapis.com/css?family=Varela+Round' rel='stylesheet' type='text/css'></link>
        <link href="/styles/main.css" rel="stylesheet"></link>
      </head>
      <body style={{fontFamily: ['Varela Round', 'sans-serif']}}>
        <div id="app"></div>
        <ul id="messages"></ul>
        <form action="">
          <input id="m" autocomplete="off" /><button>Send</button>
        </form>
         
        <script src="/socket.io/socket.io.js"></script>
        <script src="/scripts/bundle.js"></script>
      
      </body>
      </html>
    );
  }
});

module.exports = Default;

