const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  let minutes = parseInt(seconds/60)
  let secs = seconds - minutes*60 >= 10 && seconds%60 !== 0? ` : ${seconds - minutes*60}` : ` : 0${seconds - minutes*60}`
  minutes = minutes >= 10? `${minutes}` : `0${minutes}`
  console.log(chalk.cyan(figlet.textSync(`${minutes}${secs}`)));
};

module.exports = { displayCountdown };
