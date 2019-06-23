import React, { Component } from 'react';

class Picture extends Component {
  render() {
    return (
      <div className="pic">
        <div className="pic-info">
          <h4>{this.props.pic.name}</h4>
          <h4>{this.props.pic.picture}</h4>
          <h4>{this.props.pic.description}</h4>
          // <div className="likes-delete">
          //  <button className="delete" onClick={() => { this.props.handleDelete(this.props.pic.id, this.props.arrayIndex, this.props.currentArray)}}>X</button>
          // </div>
         </div>
      </div>
    )
  }
}

export default Picture;
