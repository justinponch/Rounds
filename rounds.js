const readline = require("readline");
const { data } = require("./roundsData");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Begin?", (res) => {
  console.log("response", res);
});
