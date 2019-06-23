import React, { Component } from 'react';

import Picture from './Picture'

class Pics extends Component {
  render() {
    return (
      <div className="pics">
        { this.props.currentView === 'pics' ?
          <div>"this is the pics view"</div> :
          <div>"this is the liked view"</div>
        }
        <Picture />
      </div>
    )
  }
}

export default Pics;
