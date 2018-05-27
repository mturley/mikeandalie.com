import React from 'react';
import PropTypes from 'prop-types';
import countdown from '../vendor/countdown';

const pluralize = (number, word) => {
  if (number === 1) return `1 ${word}`;
  return `${number} ${word}s`;
};

class Countdown extends React.Component {
  constructor() {
    super();
    this.state = {
      months: null, // TODO collapse months into days
      days: null,
      hours: null,
      minutes: null,
      seconds: null,
    };
  }

  componentDidMount() {
    countdown.setLabels(null, null, '', '', null, null);
    countdown(
      new Date('2018-08-26T00:00:00.000Z'),
      ({
        months, days, hours, minutes, seconds,
      }) => {
        this.setState({
          months, days, hours, minutes, seconds,
        });
      },
      countdown.DEFAULTS,
    );
  }

  render() {
    const {
      months, days, hours, minutes, seconds,
    } = this.state;

    return (
      <section>
        <div id="countdown">
          <h3 className="months">{pluralize(months, 'month')}</h3>
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
