import React, { Component } from 'react';
import { Link } from 'react-router';
import { stack as Menu } from 'react-burger-menu';
import Radium from 'radium';

let RadiumLink = Radium(Link);

export default class MobileNav extends Component {
  state = {
		isOpen: false
	}

  closeMobileNav = () => {
    this.setState({isOpen: false})
  }

  render () {
    return (
      // <Menu right isOpen={this.state.isOpen}>
      <Menu right isOpen={true}>
        <RadiumLink onClick={this.closeMobileNav} className="menu-item" to="/">Home</RadiumLink>
        <hr/>
        <RadiumLink className="menu-item" style={{cursor: 'auto'}}>Teams:</RadiumLink>
        <RadiumLink onClick={this.closeMobileNav} className="menu-item" to="/overwatch">Overwatch</RadiumLink>
        <RadiumLink onClick={this.closeMobileNav} className="menu-item" to="/overwatch">CS:GO</RadiumLink>
        <hr/>
        <RadiumLink onClick={this.closeMobileNav} className="menu-item" to="/overwatch">Ownership & Management</RadiumLink>
        <hr/>
        <RadiumLink onClick={this.closeMobileNav} className="menu-item" to="/overwatch">Rogue Twitch</RadiumLink>
        <hr/>
        <RadiumLink onClick={this.closeMobileNav} className="menu-item" to="/overwatch">Rogue Store</RadiumLink>
      </Menu>
    );
  }
}
