import React from 'react';


export default React.createClass({
  displayName: 'ChatThreadMessageText',

  propTypes: {
    text: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <div className="ChatThreadMessageText">
        {this.props.text}
      </div>
    );
  }
});
