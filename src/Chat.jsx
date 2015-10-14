import React from 'react';

import ChatHeader from './ChatHeader.jsx';
import ChatThread from './ChatThread.jsx';
import ChatNewMessage from './ChatNewMessage.jsx';


export default React.createClass({
  displayName: 'Chat',

  propTypes: {
    name: React.PropTypes.string.isRequired,
    members: React.PropTypes.object.isRequired,
    messages: React.PropTypes.array.isRequired,
    sendMessage: React.PropTypes.func.isRequired
  },

  render: function() {
    return (
      <div className="Chat">
        <ChatHeader name={this.props.name} />
        <ChatThread
          messages={this.props.messages}
          members={this.props.members} />
        <ChatNewMessage sendMessage={this.props.sendMessage} />
      </div>
    );
  }
});
