import React, {Component} from 'react';

export default class YoutubePlayer extends Component {
	state = {
		playing: false
	}

  playVideo = () => {
    this.setState({playing: true})
  }

	render() {
		const {playing} = this.state;
		const {videoId} = this.props;

		if (playing) return (
			<div className="youtube-player">
			<iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
				frameBorder='0'
				allowFullScreen='1'
				style={{width: '100%', height: '100%'}}/>
			</div>
		)

    return (
			<div className="youtube-player" data-id={videoId} onClick={this.playVideo}>
				<div data-id={videoId}>
					<img src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`} />
					<div className="play" />
				</div>
			</div>
		)
	}
}
