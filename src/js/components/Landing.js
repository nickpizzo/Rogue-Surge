import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';

import '../../css/partials/landing.scss';
import '../../css/partials/youtube-player.scss';

import Slider from './Slider'

export default class Landing extends Component {
	componentDidMount () {
		document.addEventListener("DOMContentLoaded",
      function() {
        var div, n,
            v = document.getElementsByClassName("youtube-player");
        for (n = 0; n < v.length; n++) {
            div = document.createElement("div");
            div.setAttribute("data-id", v[n].dataset.id);
            div.innerHTML = labnolThumb(v[n].dataset.id);
            div.onclick = labnolIframe;
            v[n].appendChild(div);
          }
      });

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
	}

	render() {
		return (
			<div>
				<Slider/>
				<div className="row-2">
					<div className="container-2">
						<div className="youtube-2">
							<h1>WATCH</h1>
							<div className="video-container">
								<div className="youtube-player" data-id="2gD6bxcW7X0"></div>
							</div>
						</div>
						<div className="twitter-2">
							<h1>FOLLOW ON</h1>
							
						</div>
					</div>
				</div>
			</div>
		)
	}
}
