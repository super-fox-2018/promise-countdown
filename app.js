const { timer } = require("./controllers");

const main = () => {
  const seconds = parseInt(process.argv[2]) || 10+1;
  // Your code here...
  timer(seconds)
};

main();
