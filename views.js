const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  let menit = Math.floor(seconds / 60)
  let second = seconds - (menit * 60)
  if (String(second).length === 1) {
    second = '0' + second
  }
  if (String(menit).length === 1) {
    menit = '0' + menit
  }

  console.log(chalk.white.bold(figlet.textSync(menit + " : " + second)))
};

module.exports = { displayCountdown };
