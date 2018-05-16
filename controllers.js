const { displayCountdown } = require("./views");

const timer = seconds =>
  new Promise((resolve, reject) => {
    const now = Date.now();
    const then = now + seconds * 1000;
    console.log(now)
    console.log(then)
    displayCountdown(seconds - 1);
    let id = setInterval(() => {
      const secondsLeft = Math.floor((then - Date.now()) / 1000);
      if (secondsLeft < 0) {
        clearInterval(id);
        resolve();
      } else {
        displayCountdown(secondsLeft);
      }
    }, 1000);
  });

module.exports = {
  timer
};
