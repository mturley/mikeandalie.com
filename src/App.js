import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import Back2Top from 'react-back2top';
import scrollToComponent from 'react-scroll-to-component';
import countdown from './vendor/countdown';
import logo from './logo.svg';
import photos from './photos.js';
import './App.css';
import '../node_modules/react-image-gallery/build/image-gallery.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      months: null,
      days: null,
      hours: null,
      minutes: null,
      seconds: null
    };
    this.scrollToDetails = this.scrollToDetails.bind(this);
    this.scrollToRegistry = this.scrollToRegistry.bind(this);
    this.scrollToRSVP = this.scrollToRSVP.bind(this);
    this.scrollToGallery = this.scrollToGallery.bind(this);
  }

  scrollToDetails(event) {
    event && event.preventDefault();
    scrollToComponent(this._detailsContainer);
  }

  scrollToRegistry(event) {
    event && event.preventDefault();
    scrollToComponent(this._registryContainer);
  }

  scrollToRSVP(event) {
    event && event.preventDefault();
    scrollToComponent(this._rsvpContainer);
  }

  scrollToGallery(event) {
    event && event.preventDefault();
    scrollToComponent(this._galleryContainer);
  }

  componentDidMount() {
    countdown.setLabels(null, null, '', '', null, null);
    countdown(
      new Date('2018-08-26T00:00:00.000Z'),
      ({ months, days, hours, minutes, seconds }) => {
        this.setState({ months, days, hours, minutes, seconds });
      },
      countdown.DEFAULTS
    );
  }

  render() {
    const { months, days, hours, minutes, seconds } = this.state;

    const pluralize = (number, word) => {
      if (number === 1) return `1 ${word}`;
      return `${number} ${word}s`;
    }

    return (
      <React.Fragment>
        <div className="fullscreen">
          <div className="header-container">
            <header className="wrapper clearfix">
              <h1 className="title">Mike &amp; Alie</h1>
            </header>
          </div>
          <div className="main-container">
            <div className="main wrapper clearfix">
              <article>
                <section>
                  <div id="countdown">
                    <h3 className="months">{pluralize(months, 'month')}</h3>
                    <h3 className="days">{pluralize(days, 'day')}</h3>
                    <h3 className="hours">{pluralize(hours, 'hour')}</h3>
                    <h3 className="minutes">{pluralize(minutes, 'minute')}</h3>
                    <h3 className="seconds">{pluralize(seconds, 'second')}</h3>
                  </div>
                </section>
                <section>
                  <p>
                    August 25th, 2018 &nbsp;|&nbsp; Sturbridge, MA
                  </p>
                </section>
                <section className="main-links">
                  <a
                    className="scroll-arrow"
                    onClick={this.scrollToDetails}
                    href="#"
                  >
                    <img src="img/down-arrow.png" />
                  </a>
                  <div className="anchors">
                    <a
                      className="details"
                      onClick={this.scrollToDetails}
                      href="#"
                    >
                      <h2 className="cursive">Venue</h2>
                    </a>
                    <a onClick={this.scrollToRegistry} href="#">
                      <h2 className="cursive">Registries</h2>
                    </a>
                    <a onClick={this.scrollToRSVP} href="#">
                      <h2 className="cursive">RSVP</h2>
                    </a>
                    <a onClick={this.scrollToGallery} href="#">
                      <h2 className="cursive">Memories</h2>
                    </a>
                  </div>
                </section>
              </article>
            </div>
          </div>
        </div>
        <Back2Top>
          <div className="back-to-top">
            <a href="#">Back to Top</a>
          </div>
        </Back2Top>
        <div
          className="fullscreen details-container"
          ref={r => this._detailsContainer = r}
        >
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
        <div
          className="fullscreen registry-container"
          ref={r => this._registryContainer = r}
        >
          <h1>Registries</h1>
          <p>We are registered at Amazon and at Bed Bath &amp; Beyond.</p>
          <p>
            Amazon Registry:&nbsp;
            <a href="https://www.amazon.com/wedding/share/mikeandalie" target="_blank">
              https://www.amazon.com/wedding/share/mikeandalie
            </a>
          </p>
          <p>
            Bed Bath &amp; Beyond Registry:&nbsp;
            <a href="https://www.bedbathandbeyond.com:443/store/giftregistry/view_registry_guest.jsp?registryId=545629397&eventType=Wedding" target="_blank">
              https://www.bedbathandbeyond.com:443/store/giftregistry/view_registry_guest.jsp?registryId=545629397&eventType=Wedding
            </a>
          </p>
        </div>
        <div
          className="fullscreen rsvp-container"
          ref={r => this._rsvpContainer = r}
        >
          <h1>RSVP</h1>
          <p>An RSVP form will appear here soon.</p>
          <p>For now, you may RSVP by contacting Mike or Alie.</p>
        </div>
        <div
          className="fullscreen gallery-container"
          ref={r => this._galleryContainer = r}
        >
          <ImageGallery
            items={photos}
            slideInterval={5000}
            onThumbnailClick={this.scrollToGallery}
            autoPlay
          />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
