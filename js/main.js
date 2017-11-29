
document.addEventListener("DOMContentLoaded", function (event) {
    countdown.setLabels(null, null, '', '', null, null);
    countdown(new Date('2018-08-25 04:00 PM'), function (ts) {
        document.getElementById('countdown').innerHTML = ts.toHTML('h2');
    },
    countdown.DEFAULTS);
});