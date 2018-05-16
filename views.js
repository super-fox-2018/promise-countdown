const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  let secText = secondsToMinutes(seconds)
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  console.log(chalk.red(figlet.textSync(secText)));
};

function secondsToMinutes(sec) {
  let minutes = Math.floor(sec / 60);
  let seconds = Math.floor(sec % 60);
  let result = '';
  result += (minutes < 10 ? "0" : '') + minutes + ':' + (seconds < 10 ? "0" : '')
  result += '' + seconds;
  return result;
}

module.exports = { displayCountdown };
