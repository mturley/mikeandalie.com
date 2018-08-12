import React from 'react';

const PhotosApp = () => (
  <div class="fullscreen background photos">
    <header className="back-home">
      <a href="/">
        <img src="/img/back-arrow.svg" />
        <span>Mike &amp; Alie</span>
      </a>
    </header>
    <h1>Wedding Guest Photos</h1>
    <h3 className="no-top-margin no-bottom-margin">
      If you've taken photos at our wedding, we want to see them and share them!
    </h3>
    <div style={{ margin: 20 }}>
      <div className="photos-box">
        <p>
          Please email your photos to <strong><a href="mailto:photos@mikeandalie.com">photos@mikeandalie.com</a></strong>.
        </p>
      </div>
    </div>
    <p className="narrow">
      We will be placing a gallery of both professional and guest photos here for everyone to enjoy after the wedding.
    </p>
    <p className="narrow">
      Reminder: <em>Please do not take photos with smartphones during the ceremony.</em> Hilltop photos before and after the ceremony are welcome, and reception photos are encouraged!
    </p>
  </div>
);

export default PhotosApp;