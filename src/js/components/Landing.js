import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

import LandingSlider from './Slider';
import YoutubePlayer from './YoutubePlayer';

import '../../css/partials/landing.scss';
import '../../css/partials/youtube-player.scss';

export default class Landing extends Component {
	componentDidMount () {
		window.twttr && window.twttr.widgets.load(this.twitter)
	}

	render() {
		return (
			<div>
				<LandingSlider/>
				<div className="container-2">
					<div className="row-2">
						<div className="youtube-2">
							<h1>WATCH</h1>
							<div className="video-container">
								<YoutubePlayer videoId="hCfNy51RrHQ" />
							</div>
						</div>
						<div className="spacer"></div>
						<div className="twitter-2" ref={(ref) => this.twitter=ref}>
							<h1>FOLLOW ON <FontAwesome name='twitter'/></h1>
							<a className="twitter-timeline" data-width="380" data-height="363" data-theme="dark" data-link-color="#FAB81E" href="https://twitter.com/GoingRogueGG">Tweets by GoingRogueGG</a>
						</div>
					</div>
					<h1>WATCH MORE</h1>
					<div className="row-3">
						<div className="video-container2">
							<YoutubePlayer videoId='OclYPa6GOKg' />
						</div>
						<div className="spacer"></div>
						<div className="video-container2">
							<YoutubePlayer videoId='IeovWjNYxOA' />
						</div>
						<div className="spacer"></div>
						<div className="video-container2">
							<YoutubePlayer videoId='I540K5OFNCs' />
						</div>
					</div>
				</div>
			</div>
		)
	}
}
