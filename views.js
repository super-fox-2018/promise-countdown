const clear = require("clear");
const figlet = require("figlet");
const chalk = require("chalk");

const displayCountdown = seconds => {
  clear();
  console.log(chalk.cyan(figlet.textSync("Countdown App")));
  // Your code here...
  var num =seconds
  if(num>60 && num%60<10) {
			if(num<600) {
				seconds = `0${Math.floor(num/60)} : 0${num%60}`	
			}else{
				seconds = `${Math.floor(num/60)} : 0${num%60}`
			}
		}else if(num>60 && num%60>=10){
			if(num<600) {
				seconds = `0${Math.floor(num/60)} : ${num%60}`	
			}else{
				seconds = `${Math.floor(num/60)} : ${num%60}`
			}

		}else{
			seconds = `00:${num} `
		}

  console.log(chalk.cyan(figlet.textSync(seconds)))
};

module.exports = { displayCountdown };
