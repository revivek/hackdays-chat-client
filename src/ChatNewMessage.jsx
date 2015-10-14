/**
 * ChatNewMessage:
 *
 * CSS classes to place:
 * - ChatNewMessage
 * - ChatNewMessage-input
 */

import React from 'react';


export default React.createClass({
  displayName: 'ChatNewMessage',

  propTypes: {
    sendMessage: React.PropTypes.func.isRequired
  },

  sendMessage: function(evt) {
    const text = evt.target.value;

    if (text) {
      this.props.sendMessage(text);
    }
  },

  onKeyUp: function(evt) {
    evt.preventDefault();

    if (evt.keyCode === 13) {
      this.sendMessage(evt);
      evt.target.value = '';
    }
  },

  render: function() {
    return (
      <div className="ChatNewMessage">
        <input
          className="ChatNewMessage-input"
          placeholder="Type here and press Enter"
          onKeyUp={this.onKeyUp}
          maxLength={500} />
      </div>
    );
  }
});
