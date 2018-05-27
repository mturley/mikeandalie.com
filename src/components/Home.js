import React from 'react';
import PropTypes from 'prop-types';

const Home = props => (
  <div className="fullscreen">
    <div className="header-container">
      <header className="wrapper clearfix">
        <h1 className="title">Mike &amp; Alie</h1>
      </header>
    </div>
    <div className="main-container">
      <div className="main wrapper clearfix">
        <article>
          {props.children}
          <section>
            <p>
              August 25th, 2018 &nbsp;|&nbsp; Sturbridge, MA
            </p>
          </section>
          <section className="main-links">
            <a
              className="scroll-arrow"
              onClick={props.scrollToRef('venueSection')}
              href="#"
            >
              <img src="img/down-arrow.png" />
            </a>
            <div className="anchors">
              <a
                className="details"
                onClick={props.scrollToRef('venueSection')}
                href="#"
              >
                <h2 className="cursive">Venue</h2>
              </a>
              <a onClick={props.scrollToRef('registrySection')} href="#">
                <h2 className="cursive">Registries</h2>
              </a>
              <a onClick={props.scrollToRef('rsvpSection')} href="#">
                <h2 className="cursive">RSVP</h2>
              </a>
              <a onClick={props.scrollToRef('memoriesSection')} href="#">
                <h2 className="cursive">Memories</h2>
              </a>
            </div>
          </section>
        </article>
      </div>
    </div>
  </div>
);

Home.propTypes = {
  children: PropTypes.node,
  scrollToRef: PropTypes.func
};

export default Home;
