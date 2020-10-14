/* ============================================= */
/*              JavaScript                       */
/* ============================================= */

const setBPM = document.querySelector('#set-BPM');

// listens for user input 
// prints the tempo to the page when user clicks 'set tempo' button
setBPM.addEventListener('keyup', (event) => {

    const setTempoBtn = document.querySelector('.set-tempo-btn');
    const printTempo = document.querySelector('.print-tempo');
    const eventTargetVal = event.target.value;

    if (!isNaN(eventTargetVal) && Number.isInteger(+eventTargetVal)) {
        setTempoBtn.addEventListener('click', () => {

            if (eventTargetVal) {
                printTempo.innerHTML = `<h1>${eventTargetVal} BPM</h1>`;
            } else {
                printTempo.innerHTML = `<p>Please enter a number</p>`;
            }

        });
    }

});