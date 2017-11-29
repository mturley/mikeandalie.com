
countdown.setLabels(null, null, '', '', null, null);
countdown(new Date('2018-08-25 20:00:00'), function (ts) {
    document.getElementById('countdown').innerHTML = ts.toHTML("h2");
},
countdown.DEFAULTS);