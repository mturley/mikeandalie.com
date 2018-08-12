import React from 'react';
import PhotoUploadWidget from './components/PhotoUploadWidget';

const PhotosApp = () => (
  <div class="fullscreen background photos">
    <header className="back-home">
      <a href="/">
        <img src="/img/back-arrow.svg" />
        <span>Mike &amp; Alie</span>
      </a>
    </header>
    <h1>Wedding Guest Photos</h1>
    <p className="no-top-margin">
      If you've taken photos at our wedding, we want to see them and share them!
    </p>
    <p>
      You may either email your photos to <a href="mailto:photos@mikeandalie.com">photos@mikeandalie.com</a> or use the upload tool below.
    </p>
    <p>
      We will be placing a gallery of both professional and guest photos here for everyone to enjoy after the wedding.
    </p>
    <PhotoUploadWidget />
    <p>
      Reminder: Please do not take photos with smartphones during the ceremony. Hilltop photos before and after the ceremony are welcome.
    </p>
  </div>
);

export default PhotosApp;