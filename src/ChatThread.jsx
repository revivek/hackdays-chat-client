import React from 'react';

import ChatThreadMessage from './ChatThreadMessage.jsx';


export default React.createClass({
  displayName: 'ChatThread',

  propTypes: {
    messages: React.PropTypes.array.isRequired,
    members: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <div className="ChatThread">
      </div>
    );
  }
});
