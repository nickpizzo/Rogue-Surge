import React from 'react';
import { Component } from 'react';
import ImageGallery from 'react-image-gallery';

import 'react-image-gallery/styles/css/image-gallery'

export default class Slider extends Component {

  handleImageLoad(event) {
    console.log('Image loaded ', event.target)
  }

  render() {

    const images = [
      {
        original: 'http://placehold.it/1120x350',
        // originalClass: 'featured-slide',
        // thumbnailClass: 'featured-thumb',
        // originalAlt: 'original-alt',
        // thumbnailAlt: 'thumbnail-alt',
        // thumbnailLabel: 'Optional',
        // description: 'Optional description...',
        // srcSet: 'Optional srcset (responsive images src)',
        // sizes: 'Optional sizes (image sizes relative to the breakpoint)'
      },
      {
        original: 'http://placehold.it/1120x350',
        // thumbnail: 'http://lorempixel.com/250/150/nature/2/'
      },
      {
        original: 'http://placehold.it/1120x350',
        // thumbnail: 'http://lorempixel.com/250/150/nature/3/'
      }
    ]

    return (
      <div className="slider-wrapper">
        <ImageGallery
          ref={i => this._imageGallery = i}
          items={images}
          slideInterval={3000}
          onImageLoad={this.handleImageLoad}
          showFullscreenButton={false}
          showThumbnails={false}/>
      </div>
    );
  }

}
