import React from 'react';

import ChatThreadMessageMember from './ChatThreadMessageMember.jsx';
import ChatThreadMessageText from './ChatThreadMessageText.jsx';
import ChatThreadMessageImage from './ChatThreadMessageImage.jsx';


function isImageURL(candidate) {
  return /(https?:\/\/.*\.(?:png|jpg|jpeg|gif))/i.test(candidate);
}


export default React.createClass({
  displayName: 'ChatThreadMessage',

  propTypes: {
    showMemberHeader: React.PropTypes.bool.isRequired,
    message: React.PropTypes.object.isRequired,
    member: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <div className="ChatThreadMessage">
        {this.props.showMemberHeader ? (
          <ChatThreadMessageMember member={this.props.member} />
        ) : null}

        {isImageURL(this.props.message.text) ? (
          <ChatThreadMessageImage src={this.props.message.text} />
        ) : (
          <ChatThreadMessageText text={this.props.message.text} />
        )}
      </div>
    );
  }
});
