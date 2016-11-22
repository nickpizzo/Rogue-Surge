import React from 'react';
import { Component } from 'react';
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
       autoplaySpeed: 5000,
       nextArrow: <NextArrow />,
       prevArrow: <PrevArrow />
     };

    return (
      <div className="slider-wrapper">
        <Slider {...settings} >
          <a href="http://mashable.com/2016/08/22/overwatch-atlantic-showdown-champions/#o64cvkrn75qE">
            <img style={{width: '100%'}} src={bannerOne}/>
          </a>
          <img src="http://placehold.it/1120x350"/>
          <img src="http://placehold.it/1120x350"/>

        </Slider>
      </div>
    );
  }
}
