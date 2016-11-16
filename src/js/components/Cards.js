import React from 'react';
import { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import '../../css/partials/cards.scss'

export class PlayerCard extends Component {
	render() {
		return (
			<div className="player-card">
        <img className="player-image" src={this.props.playerImage} />
        <div className="player-name">{this.props.playerName}</div>
        <div className="player-twitter">
					<FontAwesome name='twitter'/>
					{this.props.playerTwitter}
				</div>
        <div className="player-twitch">
					<FontAwesome name='twitch'/>
					{this.props.playerTwitch}
				</div>
			</div>
		)
	}
}

export class ManagerCard extends Component {
	render() {
		return (
			<div className="manager-card">
        <div className="manager-profile">{this.props.managerImage}</div>
				<div className="manager-name">{this.props.managerName}</div>
				<div className="manager-bio">{this.props.managerBio}</div>
			</div>
		)
	}
}

module.exports = { PlayerCard, ManagerCard }
