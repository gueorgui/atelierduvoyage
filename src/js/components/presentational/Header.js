import React, { Component } from 'react';
import PropTypes from 'prop-types';
import style from './Header.scss';
import logo from './images/logo.png';

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return(
      <header>
        <div className="logo-container">
          <img src={logo} alt="Atelier du Voyage" className="logo" />
        </div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  highlight: PropTypes.string.isRequired
};

export default Header;
