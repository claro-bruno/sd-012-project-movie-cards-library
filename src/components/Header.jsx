// Iniciando o projeto
import React from 'react';

const textoCabecalho = 'Movie Cards Library';

class Header extends React.Component {
  render() {
    return (<header><h1>{textoCabecalho}</h1></header>);
  }
}

export default Header;
