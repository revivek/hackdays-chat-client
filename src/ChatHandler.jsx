/**
 * ChatHandler:
 * Top-level component for the Chat app.
 *
 * Fetches data as state and passes the updated
 * entire chat data down as props to Chat.
 *
 * The React-defined functions are marked with
 * "React" comments. You can see the entire list here:
 * https://facebook.github.io/react/docs/component-specs.html
 *
 * We can define our own as well, and refer to them with
 * `this.[METHOD_NAME]`.
 */

import React from 'react';
import socketIO from 'socket.io-client';

import Chat from './Chat.jsx';


export default React.createClass({
  // React
  displayName: 'ChatHandler',

  // React
  propTypes: {
    mID: React.PropTypes.string.isRequired 
  },

  // React
  getDefaultProps: function() {
    return {
      socket: socketIO('http://localhost:7076')
    };
  },

  // React
  componentWillMount: function() {
    this.props.socket.emit('member:create', {mID: this.props.mID});
    window.addEventListener('onbeforeunload', this.leave);
  },

  // React
  componentDidMount: function() {
    this.props.socket.on('update', (data) => {
      if (this.isMounted()) { this.setState(data); }
    });
  },

  // React
  componentWillUnmount: function() {
    window.removeEventListener('onbeforeunload', this.leave);
  },

  // Self-defined
  leave: function() {
    this.props.socket.emit('member:delete', {mID: this.props.mID});
  },

  // Self-defined
  sendMessage: function(text) {
    this.props.socket.emit('message:create', {
      mID: this.props.mID,
      text: text
    });
  },

  // React
  render: function() {
    // To start
    if (!this.state) {
      return null;
    }

    return (
      <Chat 
        name={this.state.name}
        members={this.state.members}
        messages={this.state.messages}
        sendMessage={this.sendMessage} />
    );
  }
});
