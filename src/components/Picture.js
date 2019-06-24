import React, { Component } from 'react';

class Picture extends Component {
  render() {
    return (
      <div>
        <div className="pic">
          {this.props.pic.name}<br/>
          {this.props.pic.picture}<br/>
          {this.props.pic.description}<br/>
          <div className="pic-actions">
            {this.props.pic.liked ?
              <button onClick={() => {this.props.handleCheck(this.props.pic, this.props.arrayIndex, 'likedPictures')}}>heart</button> :
              <button onClick={() => {this.props.handleCheck(this.props.pic, this.props.arrayIndex, 'pictures')}}>empty heart</button>
            }
            <button onClick={() => {this.props.handleDelete(this.props.pic.id, this.props.arrayIndex, this.props.currentArray)}}>X</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Picture;
