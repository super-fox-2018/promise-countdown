const clear = require('clear');
const figlet = require('figlet');
const chalk = require('chalk');

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync('Countdown App')));
  if (typeof seconds === 'string') {
    console.log(chalk.red(figlet.textSync(seconds, 'Train')));
  } else if (seconds < 10) {
    console.log(chalk.red(figlet.textSync(`00:0${seconds}`, 'Train')));
  } else {
    console.log(chalk.red(figlet.textSync(`00:${seconds}`, 'Train')));
  }
};

module.exports = {displayCountdown};
