let timeLeft = 25 * 60; // Will be updated on reset
let isRunning = false;
let currentSession = 'work'; // 'work', 'shortBreak', 'longBreak'
let workCount = 0;
let interval;
let workDuration = 25 * 60;
let shortBreakDuration = 5 * 60;
let longBreakDuration = 15 * 60;

const timerDisplay = document.getElementById('timer');
const sessionDisplay = document.getElementById('session');
const startButton = document.getElementById('startButton');
const pauseButton = document.getElementById('pauseButton');
const resetButton = document.getElementById('resetButton');

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    sessionDisplay.textContent = getSessionName();
}

function getSessionName() {
    switch (currentSession) {
        case 'work': return 'Work Session';
        case 'shortBreak': return 'Short Break';
        case 'longBreak': return 'Long Break';
        default: return '';
    }
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        interval = setInterval(() => {
            timeLeft--;
            updateDisplay();
            if (timeLeft <= 0) {
                clearInterval(interval);
                isRunning = false;
                nextSession();
            }
        }, 1000);
    }
}

function pauseTimer() {
    if (isRunning) {
        clearInterval(interval);
        isRunning = false;
    }
}

function resetTimer() {
    clearInterval(interval);
    isRunning = false;
    currentSession = 'work';
    workCount = 0;
    // Read and validate inputs
    let totalWork = parseInt(document.getElementById('workInput').value);
    if (isNaN(totalWork) || totalWork <= 0) totalWork = 100;
    let numPomodoros = 4;
    workDuration = Math.floor((totalWork * 60) / numPomodoros);
    let shortBreak = parseInt(document.getElementById('shortBreakInput').value);
    if (isNaN(shortBreak) || shortBreak <= 0) shortBreak = 5;
    shortBreakDuration = shortBreak * 60;
    let longBreak = parseInt(document.getElementById('longBreakInput').value);
    if (isNaN(longBreak) || longBreak <= 0) longBreak = 15;
    longBreakDuration = longBreak * 60;
    timeLeft = workDuration;
    updateDisplay();
}

function nextSession() {
    if (currentSession === 'work') {
        workCount++;
        if (workCount % 2 === 0) {
            currentSession = 'longBreak';
            timeLeft = longBreakDuration;
        } else {
            currentSession = 'shortBreak';
            timeLeft = shortBreakDuration;
        }
    } else {
        currentSession = 'work';
        timeLeft = workDuration;
    }
    updateDisplay();
   
    alert(`${getSessionName()} started!`);
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);

resetTimer();