
document.addEventListener("DOMContentLoaded", function (event) {
    countdown.setLabels(null, null, '', '', null, null);
    countdown(new Date('2018-08-26T00:00:00.000Z'), function (ts) {
        document.getElementById('countdown').innerHTML = ts.toHTML('h2');
    },
    countdown.DEFAULTS);
});