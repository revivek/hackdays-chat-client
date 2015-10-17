import React from 'react';


export default React.createClass({
  displayName: 'ChatHeader',

  propTypes: {
    name: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <div className="ChatHeader">
      </div>
    );
  }
});
