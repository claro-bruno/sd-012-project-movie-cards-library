import React from 'react';
import { FaYoutube, FaInstagram } from 'react-icons/fa';

class Footer extends React.Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer__social">
          <a href="https://www.instagram.com/gabrieltjunkes/">
            <FaInstagram size="40" color="#fff" />
          </a>
          <a href="https://www.youtube.com/c/GabrielKsns">
            <FaYoutube size="40" color="#fff" />
          </a>
        </div>
        <p className="footer__copyright">Made by Gabriel Takaki ©</p>
      </footer>
    );
  }
}

export default Footer;
