import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import { Grid, Row, Col } from 'react-flexgrid';
import FontAwesome from 'react-fontawesome';

import LandingSlider from './Slider';

import YoutubePlayer from './YoutubePlayer';

import '../../css/partials/landing.scss';
import '../../css/partials/youtube-player.scss';
import '../../css/partials/flexgrid.scss';

export default class Landing extends Component {
	componentDidMount () {
		window.twttr && window.twttr.widgets.load(this.twitter)
	}

	render() {
		return (
			<div>
				<LandingSlider/>
				<div className="container-2">
					<div className="grid">
						<Grid>
		          <Row>
		            <Col xs={12} md={8}><h1>WATCH</h1><YoutubePlayer videoId="I540K5OFNCs" /></Col>
		            <Col xs={12} md={4}>
									<h1>FOLLOW ON <FontAwesome name='twitter'/></h1>
									<div className="twitter-2" ref={(ref) => this.twitter=ref}>
									<a className="twitter-timeline" data-width="100%" data-height="382" data-theme="dark" data-link-color="#FAB81E" href="https://twitter.com/GoingRogueGG">Tweets by GoingRogueGG</a>
								</div>
							</Col>
		          </Row>
							<Row>
		            <Col xs={12} md={4}><h1>WATCH MORE</h1><YoutubePlayer videoId='OclYPa6GOKg' /></Col>
		            <Col xs={12} md={4}><h1>&nbsp;</h1><YoutubePlayer videoId='IeovWjNYxOA' /></Col>
								<Col xs={12} md={4}><h1>&nbsp;</h1><YoutubePlayer videoId='hCfNy51RrHQ' /></Col>
		          </Row>
		        </Grid>
					</div>
				</div>
			</div>
		)
	}
}
