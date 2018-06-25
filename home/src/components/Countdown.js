import React from 'react';
import PropTypes from 'prop-types';
import countdown from '../vendor/countdown';

const CEREMONY_START_TIME = new Date('Sat Aug 25 2018 14:30:00 GMT-0400');
// TODO Please do not use smart phones during the ceremony message, but only within some time of the ceremony?
const RECEPTION_START_TIME = '???'; // TODO

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

    return (
      <section>
        <div id="countdown">
          <h3 className="days">{pluralize(days, 'day')}</h3>
          <h3 className="hours">{pluralize(hours, 'hour')}</h3>
          <h3 className="minutes">{pluralize(minutes, 'minute')}</h3>
          <h3 className="seconds">{pluralize(seconds, 'second')}</h3>
        </div>
      </section>
    );
  }
}

Countdown.propTypes = {
  countdown: PropTypes.func,
};

export default Countdown;
