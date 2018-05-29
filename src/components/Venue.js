import React from 'react';
import A from './ExternalLink';

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
          <A href="https://goo.gl/maps/QoQ8VwxkiTJ2">
            199 Arnold Rd, Sturbridge, MA 01518
            <img src="img/google-maps.png" className="inline-right" />
          </A>
        </h3>
        <p>
          <strong>We are thrilled for you to join us at our ceremony on the sunny hilltop at Hyland Orchard!</strong>&nbsp;
          Wagon rides to the ceremony will begin at 2:30 PM.
        </p>
        <p>
          Our reception will be held in the barn and bonfire area at the bottom of the hill.
          Free lawn games will be available all day, and the on-site disc golf course and brewery bar will remain open for business.
        </p>
        <p>
          We have rooms blocked at the <A href="http://www.sturbridgehosthotel.com/">
            Sturbridge Host Hotel
          </A>, the <A href="https://www.lq.com/en/hotels/massachusetts/sturbridge/sturbridge">
            LaQuinta Inn
          </A>, and the <A href="https://www.sturbridgecomfortinn.com/">
            Comfort Inn
          </A>.
          <br />
          There are many <strong>
            <A href="https://www.google.com/destination/map/topsights?dest_mid=%2Fm%2F01m8q4">
              beautiful parks and recreation areas around Sturbridge
            </A>
          </strong>! Sunday hiking trips before you leave are encouraged.
        </p>
      </div>
    );
  }
}

export default Venue;
