import React from 'react';
import { Component } from 'react';
import Slider from 'react-slick';
import FontAwesome from 'react-fontawesome';

import bannerOne from '../../img/banner-image-1.jpg';

class NextArrow extends Component {
  render() {
    return(
      <FontAwesome name='chevron-right' />
    )
  }
}

class PrevArrow extends Component {
  render() {
    return(
      <FontAwesome name='chevron-left' />
    )
  }
}

export default class LandingSlider extends Component {
  render() {

    const settings = {
       dots: true,
       infinite: true,
       speed: 1000,
       autoplay: true,
       autoplaySpeed: 5000
     };

    return (
      <div className="slider-wrapper">
        <Slider {...settings} >
          <a href="http://mashable.com/2016/08/22/overwatch-atlantic-showdown-champions/#o64cvkrn75qE"><img src={bannerOne}/></a>
          <img src="http://placehold.it/1120x350"/>
          <img src="http://placehold.it/1120x350"/>

        </Slider>
      </div>
    );
  }
}
