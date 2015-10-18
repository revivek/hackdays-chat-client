import React from 'react';


export default React.createClass({
  displayName: 'ChatThreadMessageMember',

  propTypes: {
    member: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <div className="ChatThreadMessageMember">
        <span>{this.props.member.name}</span>
      </div>
    );
  }
});
