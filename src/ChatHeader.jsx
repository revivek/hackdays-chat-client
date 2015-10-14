import React from 'react';


export default React.createClass({
  displayName: 'ChatHeader',

  propTypes: {
    name: React.PropTypes.string.isRequired
  },

  render: function() {
    return (
      <div className="ChatHeader">
        <h1 className="ChatHeader-title" title={this.props.name}>
          {this.props.name}
        </h1>
      </div>
    );
  }
});
