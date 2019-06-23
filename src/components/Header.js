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
            <ul>
              <li onClick={() => {this.props.handleView('pics')}}>
                Discover
              </li>
              <li onClick={() => {this.props.handleView('liked')}}>
                Liked Posts
              </li>
            </ul>
          </div>
        </header>
        <hr/>
      </div>
    )
  }
}

export default Header;
