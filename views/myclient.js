window.onload = function () {
    update();
    setInterval(() => {
        var states = document.getElementsByClassName('state');
        for (var c in states) states[c].innerHTML = (states[c].innerHTML == 'off') ? 'on' : 'off';
    }, 2000);
};

function update() {
    var baseURL, url, jqxhr,
        input = document.getElementById("input");

    baseURL = document.URL.split('/index')[0];
    url = baseURL + '/bots/';
    jqxhr = $.getJSON(url, (data) => {
        for (var d in data) for (var b in data[d]) {
            if (data[d][b]["pin"] !== 0) {
                var state = (data[d][b]["state"] == '0') ? 'off' : 'on';
                var ch = document.createElement('P');
                ch.innerHTML = 'Bot ' + b + ' (pin ' + data[d][b]["pin"] + ') is currently <span class="state">' + state + '</span>';
                input.appendChild(ch);
            }
        }
        url = baseURL + '/sequences/';
        jqxhr = $.getJSON(url, (seqs) => {
            for (var s in seqs) {
                ch = document.createElement('P');
                ch.innerHTML = 'Sequence: ' + s;
                input.appendChild(ch);
            }
        });
    });
}