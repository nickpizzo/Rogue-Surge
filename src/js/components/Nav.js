import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import '../../css/partials/nav.scss';
import mainLogo from '../../img/rogue-logo.svg';
import overwatchLogo from '../../img/overwatch-logo.svg';
import csgoLogo from '../../img/csgo-logo.svg';
import rogueTwitch from '../../img/rogue-twitch.svg';
import rogueStore from '../../img/rogue-store.svg';

var twitchStyle = {width:"105px"};
var storeStyle = {width:"80px"};

export default class Nav extends Component {

	render() {
		return (
      <div>
        <header><Link to="/"><img src={mainLogo} className="logo"/></Link>
          <ul>
            <li><Link to="/overwatch"><img src={overwatchLogo} className="overwatch-logo"/></Link></li>
            <li><Link to="/csgo"><img src={csgoLogo} className="csgo-logo"/></Link></li>
            <li><Link to="/link2" className="test"><img src={rogueTwitch} style={twitchStyle} className="csgo-logo"/></Link></li>
            <li><Link to="/link2" className="test"><img src={rogueStore} style={storeStyle} className="csgo-logo"/></Link></li>
          </ul>
        </header>
      </div>
		)
	}
}
