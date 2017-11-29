
document.addEventListener("DOMContentLoaded", function (event) {
    countdown(new Date('2018-08-25 20:00:00'), function (ts) {
        document.getElementById('countdown').innerHTML = ts.toHTML("strong");
    }, countdown.HOURS | countdown.MINUTES | countdown.SECONDS);
});