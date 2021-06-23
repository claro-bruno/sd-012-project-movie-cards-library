import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <p>
          <span>Desenvolvido por </span>
          <a href="https://www.rslfilho.com.br/" target="_blank" rel="noreferrer">Roberval Filho</a>
          <span> usando React - Bloco 11 - </span>
          <a href="http://www.betrybe.com.br/" target="_blank" rel="noreferrer">Trybe</a>
        </p>
      </div>
    );
  }
}

export default Footer;
