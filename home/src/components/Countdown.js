import React from 'react';
import PropTypes from 'prop-types';
import countdown from '../vendor/countdown';

import {
  WAGON_START_TIME,
  CEREMONY_START_TIME,
  COCKTAIL_HOUR_START_TIME,
  RECEPTION_START_TIME,
  MORNING_AFTER_TIME
} from './times';

const countdownUnits =
  countdown.DAYS |
  countdown.HOURS |
  countdown.MINUTES |
  countdown.SECONDS;

const pluralize = (number, word) => {
  if (number === 1) return `1 ${word}`;
  return `${number} ${word}s`;
};

class Countdown extends React.Component {
  constructor() {
    super();
    this.state = {
      days: null,
      hours: null,
      minutes: null,
      seconds: null
    };
  }

  componentDidMount() {
    countdown.setLabels(null, null, '', '', null, null);
    countdown(
      CEREMONY_START_TIME,
      ({
        days, hours, minutes, seconds,
      }) => {
        this.setState({
          days, hours, minutes, seconds,
        });
      },
      countdownUnits
    );
  }

  render() {
    const {
      days, hours, minutes, seconds
    } = this.state;

    const now = new Date().getTime();
    const beforeWagonStart = now < WAGON_START_TIME.getTime();
    const beforeCeremonyStart = now < CEREMONY_START_TIME.getTime();
    const beforeCocktailHourStart = now < COCKTAIL_HOUR_START_TIME.getTime();
    const beforeReceptionStart = now < RECEPTION_START_TIME.getTime();
    const beforeMorningAfter = now < MORNING_AFTER_TIME.getTime();

    const updatesSection = beforeMorningAfter ? (
      <section className="updates">
        <h3>Please Note:</h3>
        <ul>
          {beforeCocktailHourStart && (
            <li>
              Please do not take photos with smartphones during the ceremony.
            </li>
          )}
          <li>
            <strong>Uber and Lyft are available</strong> in the area for rides back to your hotel. Please drink responsibly!
          </li>
        </ul>
      </section>
    ) : null;

    const countdownClock = (
      <div id="countdown">
        {days ? <h3 className="days">{pluralize(days, 'day')}</h3> : null}
        {hours ? <h3 className="hours">{pluralize(hours, 'hour')}</h3> : null}
        {minutes ? <h3 className="minutes">{pluralize(minutes, 'minute')}</h3> : null}
        <h3 className="seconds">{pluralize(seconds, 'second')}</h3>
      </div>
    );

    const dateFooter = (
      <section>
        <p>
          August 25th, 2018 &nbsp;|&nbsp; Sturbridge, MA
        </p>
      </section>
    );

    const mainSection = (() => {
      if (beforeReceptionStart) return (
        <section>
          {beforeWagonStart && (
            <p>Wagon rides begin at 2:30 PM.</p>
          )}
          {beforeCeremonyStart && (
            <React.Fragment>
              <p>The ceremony begins at 3:00 PM:</p>
              {countdownClock}
            </React.Fragment>
          )}
          {beforeCocktailHourStart && (
            <p>Cocktail hour begins at 3:30 PM.</p>
          )}
          <p>The reception begins at 4:30 PM.</p>
          {dateFooter}
        </section>
      );

      return (
        <section>
          <h2 className="cursive">
            💐 Just Married 🎉
          </h2>
          {dateFooter}
          <br /><br />
          <p>
            <strong>
              If you have photos from the event to share,
              please email them to <a href="mailto:photos@mikeandalie.com">photos@mikeandalie.com</a>!
            </strong>
          </p>
          <p>
            A collection of professional and guest-submitted photos will be made available at <a href="#" onClick={() => alert('Check back soon! We\'re busy enjoying being married.')}>mikeandalie.com/photos</a> as soon as we get around to it. Check back soon!
          </p>
        </section>
      );
    })();

    return (
      <React.Fragment>
        {updatesSection}
        {mainSection}
      </React.Fragment>
    )
  }
}

Countdown.propTypes = {
  countdown: PropTypes.func,
};

export default Countdown;
