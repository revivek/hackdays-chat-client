import React from 'react';


export default React.createClass({
  displayName: 'ChatThreadMessageImage',

  propTypes: {
    src: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <img
        className="ChatThreadMessageImage"
        src={this.props.src} />
    );
  }
});
