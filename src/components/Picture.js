import React, { Component } from 'react';

import favorite from './imgs/favorite.png';
import heart from './imgs/heart.png';

class Picture extends Component {
  render() {
    return (
      <div className="picture">
        <div className="pic">
          <div className="name">{this.props.pic.name}<br/></div>
          <img src={this.props.pic.picture} alt={this.props.pic.name}/><br/>
          <div className="desc">{this.props.pic.description}<br/></div>
          <div className="pic-actions">
            {this.props.pic.liked ?
              <div className="favorite"><img src={favorite} alt="heart" onClick={() => {this.props.handleCheck(this.props.pic, this.props.arrayIndex, this.props.currentArray)}}/></div> :
              <div className="heart"><img src={heart} alt="empty-heart" onClick={() => {this.props.handleCheck(this.props.pic, this.props.arrayIndex, this.props.currentArray)}}/></div>
            }
            <button onClick={() => {this.props.handleDelete(this.props.pic.id, this.props.arrayIndex, this.props.currentArray)}}>X</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Picture;
