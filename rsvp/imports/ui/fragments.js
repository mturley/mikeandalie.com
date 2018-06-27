import React from 'react';

const fragments = {
  AllSet: props => (
    <React.Fragment>
      <h3 className={`no-top-margin small-padding ${props.className || ''}`}>
        <span className="emoji">
          📨
          <span className="envelope-hand">
            👌
          </span>
        </span>
        You're all set.
      </h3>
    </React.Fragment>
  ),
  EnjoyTheGallery: () => (
    <React.Fragment>
      <p className="end-of-rsvp no-bottom-margin">
        Please enjoy our photo gallery at <a href="/">mikeandalie.com</a>.
      </p>
      <p className="small no-top-margin extra-bottom-margin extra-side-margins">
        Just click on Memories! 📸
        There will also be a collection of photos at mikeandalie.com/photos after the wedding.
      </p>
    </React.Fragment>
  ),
  MikeHeartAlie: props => (
    <p className={`cursive ${props.className || ''}`}>
      Mike 💘 Alie
    </p>
  )
};

export default fragments;