const { displayCountdown } = require("./views");

const timer = seconds =>
  new Promise((resolve, reject) => {
    const now = Date.now();
    const then = now + seconds * 1000;

    displayCountdown(seconds - 1);
    var Interval = setInterval(() => {
      const secondsLeft = Math.floor((then - Date.now()) / 1000);
      if (secondsLeft < 0) {
        clearInterval(Interval);
        resolve();
      } else {
        displayCountdown(secondsLeft);
      }
    }, 1000);
  });

module.exports = {
  timer
};
