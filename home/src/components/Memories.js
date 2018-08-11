import React from 'react';
import PropTypes from 'prop-types';
import ImageGallery from 'react-image-gallery';
import photos from '../photos';

class Memories extends React.Component {
  render() {
    const { scrollToRef } = this.props;
    return (
      <div
        className="fullscreen minus-thumbnails gallery-container"
      >
        <ImageGallery
          items={photos}
          slideInterval={5000}
          onThumbnailClick={this.props.scrollToRef('memoriesSection')}
          autoPlay
        />
      </div>
    );
  }
}

Memories.propTypes = {
  scrollToRef: PropTypes.func,
};

export default Memories;
