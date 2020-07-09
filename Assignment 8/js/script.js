var min = 0;
var sec = 0;
var millisec = 0;
var minHeading = document.getElementById('minHeading');
var secHeading = document.getElementById('secHeading');
var millisecHeading = document.getElementById('milliSecHeading');
var interval;
function timer() {
    millisec++;
    millisecHeading.innerHTML = millisec;
    if (millisec >= 100) {
        sec++;
        secHeading.innerHTML = sec;
        millisec = 0;
    }
    if (sec >= 60) {
        min++;
        minHeading.innerHTML = min;
        sec = 0;
    }
}
function start() {
    document.getElementById("startBtn").disabled = true;
    interval = setInterval(timer, 10);
}
function pause() {
    document.getElementById("startBtn").disabled = false;
    clearInterval(interval);
}
function reset() {
    millisec = 0;
    sec = 0;
    min = 0;
    millisecHeading.innerHTML = millisec;
    secHeading.innerHTML = sec;
    minHeading.innerHTML = min;
    pause();
}