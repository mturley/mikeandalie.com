import React from 'react';

class Venue extends React.Component {
  render() {
    return (
      // TODO use <section> here instead of div? check CSS
      <div className="fullscreen details-container">
        <h1>Venue</h1>
        <h2>
          Hyland Orchard &amp; Brewery<br />
          199 Arnold Rd, Sturbridge, MA 01518
        </h2>
        <p>
          We are thrilled for you to join us for our ceremony on the sunny hilltop at Hyland Orchard.<br />
          Wagon rides to the ceremony will begin at 2:30 PM.
        </p>
        <p>
          A reception will follow, to be held in the barn and bonfire area on site.
        </p>
        <p>
          A brewery and disc golf course are on site, and lawn games will be available.
        </p>
      </div>
    );
  }
}

export default Venue;
