import React, { Component } from 'react';
import { Link } from 'react-router';
import { stack as Menu } from 'react-burger-menu';
import Radium from 'radium';

import owSmall from '../../img/overwatch-small-logo.svg';
import csgoSmall from '../../img/csgo-small-logo.svg';

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
      <Menu right isOpen={this.state.isOpen}>
        <RadiumLink onClick={this.closeMobileNav} className="menu-item" to="/">
          Home
        </RadiumLink>
        <hr/>
        <RadiumLink className="menu-item" style={{cursor: 'auto'}}>
          Teams:
        </RadiumLink>
        <RadiumLink onClick={this.closeMobileNav} className="menu-item" to="/overwatch" style={{color: '#e7e7e7'}}>
          <img style={{color: 'white', margin: '0 10px 0 20px', width: '20px', }} src={owSmall}/>
          Overwatch
        </RadiumLink>
        <RadiumLink onClick={this.closeMobileNav} className="menu-item" to="/csgo" style={{color: '#e7e7e7'}}>
          <img style={{color: 'white', margin: '0 10px 0 20px', width: '16px'}} src={csgoSmall}/>
          CS:GO
        </RadiumLink>
        <hr/>
        <RadiumLink onClick={this.closeMobileNav} className="menu-item" to="/ownership">
          Ownership & Management
        </RadiumLink>
        <hr/>
        <a href="https://www.twitch.tv/team/rogue" target="_blank" onClick={this.closeMobileNav} className="menu-item" to="/overwatch">
          Rogue Twitch
        </a>
        <hr/>
        <a href="http://www.rogue.gg/merchandise/" target="_blank" onClick={this.closeMobileNav} className="menu-item" to="/overwatch">
          Rogue Store
        </a>
      </Menu>
    );
  }
}
