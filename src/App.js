import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
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
                    onClick={this.scrollToDetails}
                    href="#"
                  >
                    <h2>Details</h2>
                    <img src="img/down-arrow.png" />
                  </a>
                  <a
                    onClick={this.scrollToRegistry}
                    href="#"
                  >
                    <h2>Registry</h2>
                    <img src="img/down-arrow.png" />
                  </a>
                  <a
                    onClick={this.scrollToRSVP}
                    href="#"
                  >
                    <h2>RSVP</h2>
                    <img src="img/down-arrow.png" />
                  </a>
                  <a
                    onClick={this.scrollToGallery}
                    href="#"
                  >
                    <h2>Memories</h2>
                    <img src="img/down-arrow.png" />
                  </a>
                </section>
              </article>
            </div>
          </div>
        </div>
        <div
          className="fullscreen details-container"
          ref={r => this._detailsContainer = r}
        >
          <h1>DETAILS GO HERE</h1>
          <p>Stuff and things</p>
        </div>
        <div
          className="fullscreen registry-container"
          ref={r => this._registryContainer = r}
        >
          <h1>REGISTRY GOES HERE</h1>
          <p>Stuff and things</p>
        </div>
        <div
          className="fullscreen rsvp-container"
          ref={r => this._rsvpContainer = r}
        >
          <h1>RSVP STUFF GO HERE</h1>
          <p>Stuff and things</p>
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
