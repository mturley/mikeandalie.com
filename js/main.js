function pluralize(number, word) {
    if (number === 1) return '1 ' + word;
    return number + ' ' + word + 's';
}


document.addEventListener("DOMContentLoaded", function (event) {
    countdown.setLabels(null, null, '', '', null, null);
    countdown(new Date('2018-08-26T00:00:00.000Z'), function (ts) {
        document.querySelector('#countdown .months').innerHTML = pluralize(ts.months, 'month');
        document.querySelector('#countdown .days').innerHTML = pluralize(ts.days, 'day');
        document.querySelector('#countdown .hours').innerHTML = pluralize(ts.hours, 'hour');
        document.querySelector('#countdown .minutes').innerHTML = pluralize(ts.minutes, 'minute');
        document.querySelector('#countdown .seconds').innerHTML = pluralize(ts.seconds, 'second');
    },
    countdown.DEFAULTS);
});