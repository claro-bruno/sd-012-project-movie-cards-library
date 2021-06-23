// implement Header component here
import React, { Component } from 'react';

class Header extends Component {
  render() {
    const imgURL = 'https://fontmeme.com/permalink/210623/29ac601cddbbf6fc4b4bc0da36e74ea1.png';
    return (
      <header className="header">
        <img src={ imgURL } className="titleIMG" border="0" alt="netflix-font" />
        <h1 className="title">Movie Cards Library</h1>
      </header>);
  }
}

export default Header;
