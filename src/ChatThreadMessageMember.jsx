import React from 'react';


export default React.createClass({
  displayName: 'ChatThreadMessageMember',

  propTypes: {
    member: React.PropTypes.object.isRequired
  },

  render: function() {
    return (
      <div className="ChatThreadMessageMember">
        <span 
          className="ChatThreadMessageMember-dot"
          style={{backgroundColor: '#' + this.props.member.colorHex}}></span>
        <span>{this.props.member.name}</span>
      </div>
    );
  }
});
