import React from 'react';
import ReactDOM from 'react-dom';
import { Component } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

import Slider from './Slider';
// import inits from './initLanding';

import '../../css/partials/landing.scss';
import '../../css/partials/youtube-player.scss';

export default class Landing extends Component {
	componentDidMount () {


	  var div, n, v = document.getElementsByClassName("youtube-player");
	  for (n = 0; n < v.length; n++) {
	      div = document.createElement("div");
	      div.setAttribute("data-id", v[n].dataset.id);
	      div.innerHTML = labnolThumb(v[n].dataset.id);
	      div.onclick = labnolIframe;
	      v[n].appendChild(div);
	    }


    function labnolThumb(id) {
      var thumb = '<img src="https://i.ytimg.com/vi/ID/hqdefault.jpg">',
        play = '<div class="play"></div>';
      return thumb.replace("ID", id) + play;
    }

    function labnolIframe() {
      var iframe = document.createElement("iframe");
      var embed = "https://www.youtube.com/embed/ID?autoplay=1";
      iframe.setAttribute("src", embed.replace("ID", this.dataset.id));
      iframe.setAttribute("frameborder", "0");
      iframe.setAttribute("allowfullscreen", "1");
      this.parentNode.replaceChild(iframe, this);
    }

		window.twttr.widgets.load(this.twitter)
	}

	// componentWillUnmount () {
	// 	document.removeChild(document.getElementById(twttr.))
	// }

	render() {
		return (
			<div>
				<Slider/>
				<div className="container-2">
					<div className="row-2">
						<div className="youtube-2">
							<h1>WATCH ON <FontAwesome name='youtube'/></h1>
							<div className="video-container">
								<div className="youtube-player" data-id="jsVQV69hF3A"></div>
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
							<div className="youtube-player" data-id="OclYPa6GOKg"></div>
						</div>
						<div className="spacer"></div>
						<div className="video-container2">
							<div className="youtube-player" data-id="IeovWjNYxOA"></div>
						</div>
						<div className="spacer"></div>
						<div className="video-container2">
							<div className="youtube-player" data-id="hCfNy51RrHQ"></div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
