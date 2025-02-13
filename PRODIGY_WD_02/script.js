let startTime, updatedTime, difference, tInterval, running = false;
let lapCounter = 1;

const startStopBtn = document.getElementById('startStopBtn');
const resetBtn = document.getElementById('resetBtn');
const lapBtn = document.getElementById('lapBtn');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const millisecondsElement = document.getElementById('milliseconds');
const lapsList = document.getElementById('lapsList');

startStopBtn.addEventListener('click', startStop);
resetBtn.addEventListener('click', reset);
lapBtn.addEventListener('click', recordLap);

function startStop() {
    if (!running) {
        startTime = new Date().getTime() - (difference || 0);
        tInterval = setInterval(updateTime, 10);
        running = true;
        startStopBtn.textContent = 'Pause';
        startStopBtn.style.backgroundColor = '#27ae60';
    } else {
        clearInterval(tInterval);
        running = false;
        startStopBtn.textContent = 'Start';
        startStopBtn.style.backgroundColor = '#e74c3c';
    }
}

function reset() {
    clearInterval(tInterval);
    running = false;
    difference = 0;
    lapCounter = 1;
    startStopBtn.textContent = 'Start';
    startStopBtn.style.backgroundColor = '#e74c3c';
    minutesElement.textContent = '00';
    secondsElement.textContent = '00';
    millisecondsElement.textContent = '00';
    lapsList.innerHTML = '';
}

function recordLap() {
    if (running) {
        const li = document.createElement('li');
        li.textContent = `Lap ${lapCounter++}: ${minutesElement.textContent}:${secondsElement.textContent}:${millisecondsElement.textContent}`;
        lapsList.appendChild(li);
    }
}

function updateTime() {
    updatedTime = new Date().getTime();
    difference = updatedTime - startTime;

    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((difference % 1000) / 10);

    minutesElement.textContent = (minutes < 10) ? '0' + minutes : minutes;
    secondsElement.textContent = (seconds < 10) ? '0' + seconds : seconds;
    millisecondsElement.textContent = (milliseconds < 10) ? '0' + milliseconds : milliseconds;
}
