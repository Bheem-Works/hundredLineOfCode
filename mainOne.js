// here will be the 100 line of the code.

// 1. Motivation words;
// Start - - - - - - - -
// function inspireWords() {
//   const oneLine = [
//     "if you believe it you will achieve it",
//     "human being has ability to change",
//     "consistent matter",
//     "Do what you love",
//     "You r have not learn anythin's right now",
//   ];

//   // this will be the extra whose motive line is this.
//   {
//     var oneLinePerson = [];
//     oneLinePerson[0] = "Vim magar";
//     oneLinePerson[1] = "one punch man";
//     oneLinePerson[2] = "vim magar";
//     oneLinePerson[3] = "steve jobs";
//     oneLinePerson[4] = "alber einstien";
//   }

//   // Get the random quote;
//   function callRandom() {
//     let random = Math.floor(Math.random() * oneLinePerson.length);
//     let getPersonName = oneLinePerson[random];
//     console.log(getPersonName, "said 👇");
//     let getRandomArr = oneLine[random];
//     console.log(getRandomArr);
//   }

//   // consoling ---;
//   {
//     console.log("");
//     console.log("Wait, your random quote is coming.....");
//     console.log("");
//   }

//   setTimeout(() => {
//     callRandom();
//   }, 2000);
// }
// inspireWords(); // invoked!
// - - - - - - - - End;

//2. Get the input by using the terminal;
// Start - - - - - - - - - -

let foo = ["ohh", "shit", "here", "we", "go", "again"];

const readLine = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");
const rl = readLine.createInterface({ input, output });
rl.question("Is this is your book?", (answer) => {
  console.log(`Is this your name ? ${answer}`);
  rl.close();
});
