const {displayCountdown} = require('./views');

const timer = seconds =>
  new Promise((resolve, reject) => {
    const now = Date.now();
    let then = now + (seconds + 1) * 1000;
    reject = () => {
      displayCountdown('Arrived');
    };
    setInterval(function() {
      let secondsLeft = Math.floor((then - Date.now()) / 1000);
      if (secondsLeft >= 0) {
        displayCountdown(secondsLeft);
        resolve();
      } else {
        reject();
        clearInterval(this);
      }
    }, 1000);
  });

module.exports = {
  timer
};
