import React, {Component} from 'react';
import { stack as Menu } from 'react-burger-menu';

export default class MobileNav extends Component {
  showSettings = (event) => {
    event.preventDefault();

  }

  render () {

    return (
      <Menu right>
        <a id="home" className="mobile-nav-item" href="/">Home</a>
        <a id="about" className="mobile-nav-item" href="/about">About</a>
        <a id="contact" className="mobile-nav-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="mobile-nav-item" href="">Settings</a>
      </Menu>
    );
  }
}
