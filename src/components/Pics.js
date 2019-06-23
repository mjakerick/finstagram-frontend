import React, { Component } from 'react';

import Picture from './Picture'

class Pics extends Component {
  render() {
    return (
      <div className="pics">
          <div className="picture">
          {this.props.pictures.map((pic, index) => {
            return (
              <Picture
                key={index}
                arrayIndex={index}
                pic={pic}
                currentArray='pictures'
                handleDelete={this.props.handleDelete}
              />
            )
          })}
          </div>
      </div>
    )
  }
}

export default Pics;
