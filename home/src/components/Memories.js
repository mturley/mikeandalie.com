import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import photos from '../photos';

class Memories extends React.Component {
  render() {
    const { scrollToGallery } = this.props;
    return (
      <div
        className="fullscreen minus-thumbnails gallery-container"
        ref={r => this._galleryContainer = r}
      >
        <ImageGallery
          items={photos}
          slideInterval={5000}
          onThumbnailClick={scrollToGallery}
          autoPlay
        />
      </div>
    );
  }
}

Memories.propTypes = {
  scrollToGallery: PropTypes.func
};

Memories.defaultProps = {
  scrollToGallery: () => {}
};

export default Memories;
