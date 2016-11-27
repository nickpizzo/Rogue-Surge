import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

import MobileNav from './MobileNav';

import '../../css/partials/nav.scss';

import mainLogo from '../../img/rogue-logo.svg';
import overwatchLogo from '../../img/overwatch-logo.svg';
import csgoLogo from '../../img/csgo-logo.svg';
import rogueTwitch from '../../img/rogue-twitch.svg';
import rogueStore from '../../img/rogue-store.svg';
import ownership from '../../img/ownership.svg';

export default class Nav extends Component {

	render() {
		return (
      <div>
        <header><Link to="/"><img src={mainLogo} className="logo"/></Link>
          <ul>
						<li className="dropdown">
							<button className="dropbtn">TEAMS<FontAwesome className="down-arrow" name="angle-down"/></button>
							<div className="dropdown-content">
								<Link to="/overwatch" style={{transform: 'none'}}><img src={overwatchLogo} className="overwatch-logo"/></Link>
								<Link to="/csgo" style={{transform: 'none'}}><img src={csgoLogo} className="csgo-logo"/></Link>
							</div>
						</li>
						<li><Link to="/ownership"><img src={ownership} className="ownership-logo" /></Link></li>
            <li><a href="https://www.twitch.tv/team/rogue" target="_blank"><img src={rogueTwitch} className="twitch-logo" /></a></li>
            <li><a href="http://www.rogue.gg/merchandise/" target="_blank"><img src={rogueStore} className="store-logo" /></a></li>
          </ul>
					<div className="mobile-nav">
						<MobileNav />
					</div>
        </header>

      </div>
		)
	}
}
