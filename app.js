const { timer } = require("./controllers");

const main = () => {
  const seconds = parseInt(process.argv[2]) || 10;
  // Your code here...
  timer(5)
  .then(function(){
    return clearInterval(timer)
  })
  .catch(function(){
  })
};

main();
