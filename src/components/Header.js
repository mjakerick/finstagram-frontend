import React, { Component } from 'react';

class Header extends Component {
  render () {
    return (
      <div>
        <header className="header">
          <div className="title">
            <h2>Finstagram</h2>
          </div>
          <div className="search">
            <input type="text" placeholder="#search"></input>
          </div>
          <div className="functions">
            <a>Discover</a>
            <a>Likes</a>
            <a>Profile</a>
          </div>
        </header>
        <hr/>
      </div>
    )
  }
}

export default Header;
