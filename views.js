const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  let secondStr = secondFormatter(seconds)

  if (seconds <= 5) {
    console.log(chalk.red(figlet.textSync(secondStr)));
  } else if (seconds < 10 && seconds > 5) {
    console.log(chalk.yellow(figlet.textSync(secondStr)));
  } else {
    console.log(chalk.green(figlet.textSync(secondStr)));
  }
};

function secondFormatter(seconds) {
  let minute = Math.floor(seconds / 60);
  if (seconds >= 60) { seconds = seconds - (minute * 60) }
  if (seconds < 10) { seconds = `0${seconds}` }
  if (minute < 10) { minute = `0${minute}` }

  return `${minute}:${seconds}`
}

module.exports = { displayCountdown };
