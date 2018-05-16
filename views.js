const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  let call = secToMin(seconds)
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  console.log(chalk.cyan(figlet.textSync(call)));
};

function secToMin(seconds){
  let sec = seconds
  let minutes = 0
  let timeFormat = '00:00'
    while (sec >= 60) {
      minutes += 1
      sec -= 60
    }
    if(minutes < 10){
      minutes = `0${minutes}`
    }
    if(minutes < 60){
      minutes = `${minutes}`
    }
    if(sec < 10){
      sec = `0${sec}`
    }
    return `${minutes}:${sec}`
}

module.exports = { displayCountdown };
