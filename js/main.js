/* ============================================= */
/*              JavaScript                       */
/* ============================================= */

const setBPM = document.querySelector("#set-BPM");
const clearBPM = document.querySelector(".clear-tempo-btn");
const printTempo = document.querySelector(".print-tempo");
let clickTimer;

// listens for user input
// prints the tempo to the page when user clicks 'set tempo' button
setBPM.addEventListener("keyup", (event) => {
  const setTempoBtn = document.querySelector(".set-tempo-btn");
  const eventTargetVal = event.target.value;

  if (!isNaN(eventTargetVal) && Number.isInteger(+eventTargetVal)) {
    setTempoBtn.addEventListener("click", () => {
      if (eventTargetVal) {
        BPMToMilliseconds(eventTargetVal);
        printTempo.innerHTML = `<h1>${eventTargetVal} BPM</h1>`;
      } else {
        printTempo.innerHTML = `<p>Please enter a number</p>`;
      }
    });
  } else {
    setTempoBtn.addEventListener("click", () => {
      printTempo.innerHTML = `<p>Please enter a number</p>`;
    });
  }

});

// clear tempo
clearBPM.addEventListener("click", () => {
  clearInterval(clickTimer);
  setBPM.value = 'enter tempo...';
  printTempo.innerHTML = `<p>Please enter a number</p>`;
});

// function to produce click sound
function myPlay() {
  const audio = new Audio("sounds/click.mp3");
  audio.play();
}

// function to turn user input (BPM) to seconds.  Use that "millisecond" data to set click sound interval
function BPMToMilliseconds(BPM) {
  const BPMToNumber = parseInt(BPM);
  clearInterval(clickTimer);
  // set tempo and call myPlay function
  if (BPMToNumber !== 0) {
    const milliseconds = 60000 / BPM;
    clickTimer = setInterval(() => {
      myPlay();
    }, milliseconds);
  }
};