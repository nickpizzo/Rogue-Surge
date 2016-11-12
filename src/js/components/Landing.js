import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import FontAwesome from 'react-fontawesome';

import '../../css/partials/landing.scss';
import '../../css/partials/youtube-player.scss';

import Slider from './Slider'

export default class Landing extends Component {
	componentWillMount () {
		document.addEventListener("DOMContentLoaded",
      function() {
        var div, n, v = document.getElementsByClassName("youtube-player");
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

		window.twttr = (function(d, s, id) {
		  var js, fjs = d.getElementsByTagName(s)[0],
		    t = window.twttr || {};
		  if (d.getElementById(id)) return t;
		  js = d.createElement(s);
		  js.id = id;
		  js.src = "https://platform.twitter.com/widgets.js";
		  fjs.parentNode.insertBefore(js, fjs);

		  t._e = [];
		  t.ready = function(f) {
		    t._e.push(f);
		  };

		  return t;
		}(document, "script", "twitter-wjs"));
	}

	render() {
		return (
			<div>
				<Slider/>
				<div className="container-2">
					<div className="row-2">
						<div className="youtube-2">
							<h1>WATCH</h1>
							<div className="video-container">
								<div className="youtube-player" data-id="hCfNy51RrHQ"></div>
							</div>
						</div>
						<div className="spacer"></div>
						<div className="twitter-2">
							<h1>FOLLOW ON <FontAwesome name='twitter'/></h1>
							<a className="twitter-timeline" data-width="380" data-height="363" data-theme="dark" data-link-color="#FAB81E" href="https://twitter.com/GoingRogueGG">Tweets by GoingRogueGG</a>
						</div>
					</div>
					<h1>WATCH MORE</h1>
					<div className="row-3">
						<div className="video-container2">
							<div className="youtube-player" data-id="hCfNy51RrHQ"></div>
						</div>
						<div className="spacer"></div>
						<div className="video-container2">
							<div className="youtube-player" data-id="hCfNy51RrHQ"></div>
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
