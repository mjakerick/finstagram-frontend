import React, { Component } from 'react';

import Picture from './Picture'

class Pics extends Component {
  render() {
    return (
      <div className="pics">
        { this.props.currentView === 'pics' ?
          <div className="lookin-gud">
            <h2>New Posts</h2>
            <div className="pic-stuff">
              {this.props.pictures.map((pic, index) => {
                return (
                  <Picture
                    key={index}
                    arrayIndex={index}
                    pic={pic}
                    handleCheck={this.props.handleCheck}
                    currentArray='pictures'
                    handleDelete={this.props.handleDelete}
                  />
                )
              })}
            </div>
          </div> :
          <div className="lookin-gud">
            <h2>Liked Posts</h2>
            <div className="pic-stuff">
              {this.props.likedPictures.map((pic, index) => {
                return (
                  <Picture
                    key={index}
                    arrayIndex={index}
                    pic={pic}
                    handleCheck={this.props.handleCheck}
                    currentArray='likedPictures'
                    handleDelete={this.props.handleDelete}
                  />
                )
              })}
            </div>
          </div>
        }
      </div>
    )
  }
}

export default Pics;
