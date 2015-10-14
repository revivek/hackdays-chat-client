import React from 'react';

import ChatThreadMessage from './ChatThreadMessage.jsx';


export default React.createClass({
  displayName: 'ChatThread',

  propTypes: {
    messages: React.PropTypes.array.isRequired,
    members: React.PropTypes.object.isRequired
  },

  componentDidMount: function() {
    const domNode = React.findDOMNode(this);
    domNode.scrollTop = domNode.scrollHeight;
  },

  componentDidUpdate: function() {
    const domNode = React.findDOMNode(this);
    domNode.scrollTop = domNode.scrollHeight;
  },

  render: function() {
    return (
      <div className="ChatThread">
        {this.props.messages.map((message, idx, messages) => {
          const showMemberHeader = (
            idx === 0 || messages[idx - 1].mID !== message.mID
          );

          return (
            <ChatThreadMessage
              key={idx}
              member={this.props.members[message.mID]}
              showMemberHeader={showMemberHeader}
              message={message} />
          )
        })}
      </div>
    );
  }
});
