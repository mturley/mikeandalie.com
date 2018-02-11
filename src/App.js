import React, { Component } from 'react';
import countdown from './vendor/countdown';
import logo from './logo.svg';
import './App.css';

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
      <div className="everything">
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
                  <h2 className="months">{pluralize(months, 'month')}</h2>
                  <h2 className="days">{pluralize(days, 'day')}</h2>
                  <h2 className="hours">{pluralize(hours, 'hour')}</h2>
                  <h2 className="minutes">{pluralize(minutes, 'minute')}</h2>
                  <h2 className="seconds">{pluralize(seconds, 'second')}</h2>
                </div>
              </section>
              <section>
                <p>
                  <strong>August 25th, 2018</strong>
                  <br />
                  <strong>Sturbridge, MA</strong>
                </p>
              </section>
              <section>
                <p>
                  <br />
                  Check back here in the coming months for more details.
                </p>
                <p>
                  Photo slideshow coming real soon... I promise!
                </p>
              </section>
            </article>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
