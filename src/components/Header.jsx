// implement Header component here
import React from 'react';

const pageTitle = 'page-title';
const movieCardHeader = 'movie-card-header';
class Header extends React.Component {
  render() {
    return (
      <header className={ movieCardHeader }>
        <h1 className={ pageTitle }>Movie Cards Library</h1>
      </header>
    );
  }
}

export default Header;
