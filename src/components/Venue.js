import React from 'react';

class Venue extends React.Component {
  render() {
    return (
      // TODO use <section> here instead of div? check CSS
      <div className="fullscreen details-container">
        <h1>Venue</h1>
        <h2>
          <strong>Hyland Orchard &amp; Brewery</strong>
        </h2>
        <h3 className="subheading">
          <a href="https://goo.gl/maps/QoQ8VwxkiTJ2" target="_blank">
            199 Arnold Rd, Sturbridge, MA 01518
            <img src="img/google-maps.png" className="inline-right" />
          </a>
        </h3>
        <p>
          We are thrilled for you to join us for our ceremony on the sunny hilltop at Hyland Orchard!
        </p>
        <p>
          <strong>Wagon rides to the ceremony will begin at 2:30 PM.</strong><br />
          A reception will follow, to be held in the barn and bonfire area at the bottom of the hill.
        </p>
        <p>
          Free lawn games will be available, and the on-site disc golf course and brewery bar will remain open for business.
        </p>
        <p>
          There are many <a href="https://www.google.com/destination/map/topsights?dest_mid=%2Fm%2F01m8q4">
            beautiful parks and recreation areas around Sturbridge
          </a>.
          <br />Sunday hiking trips before you leave are encouraged!
        </p>
      </div>
    );
  }
}

export default Venue;
