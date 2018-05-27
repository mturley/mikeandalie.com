import React from 'react';
import ImageGallery from 'react-image-gallery';
import photos from '../photos';

class Memories extends React.Component {
  render() {
    return (
      <div
        className="fullscreen minus-thumbnails gallery-container"
        ref={r => this._galleryContainer = r}
      >
        <ImageGallery
          items={photos}
          slideInterval={5000}
          onThumbnailClick={this.scrollToGallery}
          autoPlay
        />
      </div>
    );
  }
}

export default Memories;
