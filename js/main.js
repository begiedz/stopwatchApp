const hrSpan = document.querySelector(".hour");
const minSpan = document.querySelector(".minute");
const secSpan = document.querySelector(".second");
const msecSpan = document.querySelector(".millisecond");
const startStopwatch = document.querySelector(".startStopwatch");
const startPauseIcon = document.querySelector(".icon");
const lapStopwatch = document.querySelector(".lapStopwatch");
const output = document.querySelector(".output");

let time = 0;

let msec = 0;
let sec = 0;
let min = 0;
let hr = 0;

let msecDisplay = String(msec).padStart(2, 0);
let secDisplay = String(sec).padStart(2, 0);
let minDisplay = String(min).padStart(2, 0);
let hrDisplay = String(hr).padStart(2, 0);

msecSpan.textContent = msecDisplay;
secSpan.textContent = secDisplay;
minSpan.textContent = minDisplay;
hrSpan.textContent = hrDisplay;

let startPause = true;

let interval;

function intervalFunction() {
  if (startPause) {
    startPauseIcon.classList.remove("fa-play");
    startPauseIcon.classList.add("fa-pause");
    startPause = !startPause;

    console.log("Interval Running");
    interval = setInterval(startStopwatchTimer, 10);

    function startStopwatchTimer() {
      // time++;
      msec++;
      console.log(msec);

      msecDisplay = String(msec).padStart(2, 0);
      secDisplay = String(sec).padStart(2, 0);
      minDisplay = String(min).padStart(2, 0);
      hrDisplay = String(hr).padStart(2, 0);

      if (msec < 100) {
        msecSpan.textContent = msecDisplay;
      }
      secSpan.textContent = secDisplay;
      minSpan.textContent = minDisplay;
      hrSpan.textContent = hrDisplay;


      if (msec == 100) {
        msec = 0;
        sec++;
      }
      if (sec == 60) {
        sec = 0;
        min++;
      }
      if (min == 60) {
        min = 0;
        hr++;
      }

    }
  } else {
    startPauseIcon.classList.remove("fa-pause");
    startPauseIcon.classList.add("fa-play");
    clearInterval(interval);

    console.log("Interval Paused");
    startPause = !startPause;
  }
}

function outputLap() {
  const lapDiv = document.createElement('div');
  lapDiv.textContent = `${hrDisplay}:${minDisplay}:${secDisplay}:${msecDisplay}`;
  output.appendChild(lapDiv);
}




lapStopwatch.addEventListener("click", outputLap);
startStopwatch.addEventListener("click", intervalFunction);