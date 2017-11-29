
document.addEventListener("DOMContentLoaded", function (event) {
    countdown.setLabels(null, null, null, '', null, null);
    countdown(new Date('2018-08-25 20:00:00'), function (ts) {
        document.getElementById('countdown').innerHTML = ts.toHTML("div");
    },
    countdown.DEFAULTS);
});