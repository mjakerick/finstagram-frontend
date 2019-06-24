import React, { Component } from 'react';

import Picture from './Picture'

class Pics extends Component {
  render() {
    return (
      <div className="pics">
        { this.props.currentView === 'pics' ?
          <div>
            <h2>New Posts</h2>
            {this.props.pictures.map((pic, index) => {
              return (
                <Picture
                  key={index}
                  arrayIndex={index}
                  pic={pic}
                  handleCheck={this.props.handleCheck}
                  handleDelete={this.props.handleDelete}
                />
              )
            })}
          </div> :
          <div>
            <h2>Liked Posts</h2>
            {this.props.likedPictures.map((pic, index) => {
              return (
                <Picture
                  key={index}
                  arrayIndex={index}
                  pic={pic}
                  handleCheck={this.props.handleCheck}
                  handleDelete={this.props.handleDelete}
                />
              )
            })}
          </div>
        }
      </div>
    )
  }
}

export default Pics;
