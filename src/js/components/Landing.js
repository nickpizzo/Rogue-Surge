import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import '../../css/partials/landing.scss';

import Slider from './Slider'

export default class Landing extends Component {
	render() {
		return (
			<div>
				<Slider/>

			</div>
		)
	}
}
