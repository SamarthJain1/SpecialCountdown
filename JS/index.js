const countdownInputs = document.querySelectorAll(".table .cell input");
let end;
let countdownInterval;

function setMinDate() {
    const today = new Date();
    document.getElementById("start").min = today.toISOString().substring(0, 10);
}

document.getElementById("start").addEventListener('change', function () {
    end = new Date(this.value);
    end.setMinutes(end.getMinutes() + end.getTimezoneOffset());  // Add the timezone offset
    clearInterval(countdownInterval); // Clear the previous interval
    countdownInterval = setInterval(clock, 1000); // Start a new interval
});

function clock() {
    const start = new Date();
    var diff = (end - start) / 1000;

    if (diff < 0) {
        document.querySelector(".head h1").innerHTML = "Your Special Day has Arrived!";
        countdownInputs.forEach(input => input.value = 0);
        clearInterval(countdownInterval); // Stop the countdown
        return;
    }
    else {
        document.querySelector(".head h1").innerHTML = "Your Special Day Countdown";
    }

    countdownInputs[0].value = Math.floor((diff / 3600 / 24));
    countdownInputs[1].value = Math.floor((diff / 3600) % 24);
    countdownInputs[2].value = Math.floor((diff / 60) % 60);
    countdownInputs[3].value = Math.floor((diff) % 60);
}

document.addEventListener('DOMContentLoaded', setMinDate);
