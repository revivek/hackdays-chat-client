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

  render: function() {
    return (
      <div className="ChatNewMessage">
      </div>
    );
  }
});
