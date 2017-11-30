
document.addEventListener("DOMContentLoaded", function (event) {
    countdown.setLabels(null, null, '', '', null, null);
    countdown(new Date('2018-08-26T00:00:00.000Z'), function (ts) {
        document.querySelector('#countdown .months').innerHTML = ts.months + ' months';
        document.querySelector('#countdown .days').innerHTML = ts.days + ' days';
        document.querySelector('#countdown .hours').innerHTML = ts.hours + ' hours';
        document.querySelector('#countdown .minutes').innerHTML = ts.minutes + ' minutes';
        document.querySelector('#countdown .seconds').innerHTML = ts.seconds + ' seconds';
    },
    countdown.DEFAULTS);
});