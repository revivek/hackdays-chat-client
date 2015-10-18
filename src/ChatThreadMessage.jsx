import React from 'react';

import ChatThreadMessageMember from './ChatThreadMessageMember.jsx';
import ChatThreadMessageText from './ChatThreadMessageText.jsx';


export default React.createClass({
  displayName: 'ChatThreadMessage',

  propTypes: {
    message: React.PropTypes.object.isRequired,
    member: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <div className="ChatThreadMessage">
        <ChatThreadMessageMember member={this.props.member} />
        <ChatThreadMessageText text={this.props.message.text} />
      </div>
    );
  }
});
