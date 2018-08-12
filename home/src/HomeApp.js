import React, { Component } from 'react';
import Back2Top from 'react-back2top';
import scrollToComponent from 'react-scroll-to-component';

import './HomeApp.css';
import '../node_modules/react-image-gallery/build/image-gallery.css';

import { Home, Countdown, Venue, Registries, RSVP, Memories } from './components';

class HomeApp extends Component {
  constructor() {
    super();
    this.scrollToRef = this.scrollToRef.bind(this);
    this._refs = {
      venueSection: null,
      registrySection: null,
      rsvpSection: null,
      memoriesSection: null
    };
  }

  scrollToRef(refName) {
    return event => {
      event && event.preventDefault();
      scrollToComponent(this._refs[refName], {
        duration: 2000,
        offset: 50,
        ease: 'in-out-cube'
      });
    };
  }

  render() {
    return (
      <div class="background home">

        <Home scrollToRef={this.scrollToRef}>
          <Countdown />
        </Home>

        <div className="halfscreen photostrip">
          <img src="img/photostrip.jpg" />
        </div>

        <Back2Top>
          <div className="back-to-top">
            <span>
              Back to Top
              <img src="img/up-arrow.png" />
            </span>
          </div>
        </Back2Top>

        <Venue ref={r => this._refs.venueSection = r} />
        <Registries ref={r => this._refs.registrySection = r} />
        <RSVP ref={r => this._refs.rsvpSection = r} />
        <Memories
          ref={r => this._refs.memoriesSection = r}
          scrollToRef={this.scrollToRef}
        />

      </div>
    );
  }
}

export default HomeApp;
