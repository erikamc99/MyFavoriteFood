let timer = null;
let remainingTime = 1200;
let isRunning = false;

const updateDisplay = () => {
    const minutes = String(Math.floor(remainingTime / 60)).padStart(2, '0');
    const seconds = String(remainingTime % 60).padStart(2, '0');
    document.querySelector('#countdown').textContent = `${minutes}:${seconds}`;
};

const toggleTimer = () => {
    isRunning ? stopTimer() : startTimer();
};

const startTimer = () => {
    isRunning = true;
    timer = setInterval(() => {
      if (remainingTime <= 0) {
        stopTimer();
        alert("¡El tiempo ha terminado!");
      } else {
        remainingTime--;
        updateDisplay();
      }
    }, 1000);
};

const stopTimer = () => {
   clearInterval(timer);
   timer = null;
   isRunning = false;
};
const resetTimer = () => {
    stopTimer();
    remainingTime = 1200;
    updateDisplay();
};
  
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('#start-stop-btn').addEventListener('click', toggleTimer);
    document.querySelector('#reset-btn').addEventListener('click', resetTimer);
    updateDisplay(); 
});
  