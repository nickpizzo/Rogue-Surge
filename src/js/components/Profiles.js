import React from 'react';
import { Component } from 'react';

export default class PlayerCard extends Component {
	render() {
		return (
			<div className="player-profile">
        <div>{this.props.playerImage}</div>
        <div>{this.props.playerName}</div>
        <div>{this.props.playerTwitter}</div>
			</div>
		)
	}
}

export default class ManagerCard extends Component {
	render() {
		return (
			<div className="player-profile">
        <div>{this.props.managerImage}</div>
        <div>{this.props.managerName}</div>
			</div>
		)
	}
}
