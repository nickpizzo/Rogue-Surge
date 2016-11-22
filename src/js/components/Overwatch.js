import React from 'react';
import { Component } from 'react';

import {PlayerCard, ManagerCard} from './Cards';

import '../../css/partials/overwatch.scss'

import bchavasson from '../../img/benjaminchavasson.jpg';
import dbignet from '../../img/dylanbignet.jpg';
import jlboyer from '../../img/jeanlouisboyer.jpg';
import jlarsson from '../../img/johnathanlarsson.jpg';
import klindstrom from '../../img/kevynlindstrom.jpg';
import mbignet from '../../img/michaelbignet.jpg';

export default class Overwatch extends Component {
	render() {
		return (
			<div className="team-container">
				<h1>TEAM OVERWATCH</h1>
				<div className="overwatch-row-1">
					<PlayerCard  playerImage={mbignet} playerName='Michael Bignet' playerTwitter='Rogue_winz' playerTwitch='bignet'/>
					<PlayerCard  playerImage={dbignet} playerName='Dylan Bignet' playerTwitter='bignet' playerTwitch='bignet'/>
					<PlayerCard  playerImage={jlarsson} playerName='Jonathan Larsson' playerTwitter='bignet' playerTwitch='bignet'/>
				</div>
				<div className="overwatch-row-2">
					<PlayerCard  playerImage={klindstrom} playerName='Kevin Lindström' playerTwitter='bignet' playerTwitch='bignet'/>
					<PlayerCard  playerImage={bchavasson} playerName='Benjamin Chevasson' playerTwitter='bignet' playerTwitch='bignet'/>
					<PlayerCard  playerImage={jlboyer} playerName='Jean-Louis Boyer' playerTwitter='bignet' playerTwitch='bignet'/>
				</div>
			</div>
		)
	}
}
