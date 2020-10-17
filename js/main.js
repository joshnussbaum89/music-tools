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
      setBPM.setAttribute('placeholder', 'enter tempo...');
      printTempo.innerHTML = `<p>Please enter a number</p>`;
    });
  }

});

// clear tempo
clearBPM.addEventListener("click", () => {
  clearInterval(clickTimer);
  setBPM.value = '';
  setBPM.setAttribute('placeholder', 'enter tempo...');
  printTempo.innerHTML = `<p>Please enter a number</p>`;
});

// function to produce click sound
function playClick() {
  const audio = new Audio("sounds/click.mp3");
  audio.play();
}

// function to turn user input (BPM) to seconds.  Use that "millisecond" data to set click sound interval
function BPMToMilliseconds(BPM) {
  const BPMToNumber = parseInt(BPM);
  clearInterval(clickTimer);
  // set tempo and call playClick function
  if (BPMToNumber !== 0) {
    const milliseconds = 60000 / BPM;
    clickTimer = setInterval(() => {
      playClick();
    }, milliseconds);
  }
};

// function to play string
function playString(url) {
  const string = new Audio(url);
  string.play();
}

// Guitar 
const guitarSoundhole = document.querySelector('.guitar-soundhole');

// plays correct string based on user clicks
guitarSoundhole.addEventListener('click', (event) => {
  const targetString = event.target;
  const lowEString = document.querySelector('.lowEString');
  const aString = document.querySelector('.aString');
  const dString = document.querySelector('.dString');
  const gString = document.querySelector('.gString');
  const bString = document.querySelector('.bString');
  const hiEString = document.querySelector('.hiEString');

  switch (targetString) {
    case lowEString:
      playString("sounds/lowE.mp3");
      break;
    case aString:
      playString("sounds/A.mp3");
      break;
    case dString:
      playString("sounds/D.mp3");
      break;
    case gString:
      playString("sounds/G.mp3");
      break;
    case bString:
      playString("sounds/B.mp3");
      break;
    case hiEString:
      playString("sounds/hiE.mp3");
      break;
  }
})