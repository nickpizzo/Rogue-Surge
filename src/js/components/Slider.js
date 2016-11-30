import React, { Component } from 'react';
import Slider from 'react-slick';

import '../../css/partials/landing-slider.scss';

import bannerOne from '../../img/banner-image-1.jpg';

class NextArrow extends Component {
  render() {
    return <div {...this.props} style={{'marginLeft': '30px', 'marginRight': '30px'}}></div>;
  }
}

class PrevArrow extends Component {
  render() {
    return <div {...this.props} style={{'marginLeft': '30px', 'marginRight': '30px', 'zIndex': '1'}}></div>;
  }
}

export default class LandingSlider extends Component {
  render() {

    const settings = {
       dots: true,
       dotsClass: 'dots-styles',
       infinite: true,
       speed: 1000,
       autoplay: true,
       autoplaySpeed: 6000,
       nextArrow: <NextArrow />,
       prevArrow: <PrevArrow />
     };

    return (
      <div className="slider-wrapper">
        <Slider {...settings} >
          <a target="_blank" href="http://mashable.com/2016/08/22/overwatch-atlantic-showdown-champions/#o64cvkrn75qE">
            <img style={{width: '100%'}} src="http://i.imgur.com/bFP85w9.jpg"/>
          </a>
          <a target="_blank" href="http://www.espn.com/esports/story/_/id/17689712/music-producer-dj-steve-aoki-invests-team-rogue">
            <img style={{width: '100%'}} src="http://i.imgur.com/OeBp3dn.jpg"/>
          </a>
          <a target="_blank" href="http://www.espn.com/esports/story/_/id/17689712/music-producer-dj-steve-aoki-invests-team-rogue">
            <img style={{width: '100%'}} src="http://i.imgur.com/pV4r7OF.jpg"/>
          </a>

        </Slider>
      </div>
    );
  }
}
