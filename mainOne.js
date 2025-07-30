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

// let foo = ["ohh", "shit", "here", "we", "go", "again"];
// const readLine = require("node:readline"); // Bring the from the module.
// const { stdin: input, stdout: output } = require("node:process");
// const rl = readLine.createInterface({ input, output });
// rl.question("Whose book is this ?", (answer) => {
//   console.log(`This is ${answer} book right? `);
//   let callFoo = foo[answer];
//   console.log(callFoo);
// rl.close();
// });

// // Testing the fiter methods.
// const boo = ['miso love eggs'];
// function checkFilter(st,ts){
//   if(st == ts){
//     console.log("The string is same");
//   }
// }

// console.log(checkFilter(boo,'o'));
//

// find out the fabinacci sequence in the js.

// function fabi(n) {
// let fab = [0, 1];
//   for (let i = 2; i < n; i++) {
//     fab[i] = fab[i - 1] + fab[i - 2];
//   }
//   return fab;
// }
// console.log("first fabionacci sequence");
// console.log(fabi(5));
// console.log("");

function coolModule(id) {
  function showId() {
    console.log(id);
  }
  return {
    showId: showId,
  };
}

var foo = coolModule("foo1");
var foo2 = coolModule("foo2");

foo.showId(); // foo1;
foo2.showId(); // foo2;

// Revise words;
function revise(w) {
  return w.split("").reverse().join("");
}
console.log(revise("hello"));

// find out the acending and the descending oder;

let numbers = [8, 4, 5, 6];
let store = [];
console.log(numbers.sort((a, b) => a - b));
console.log(numbers.reduce((a, b) => a + b));

// let's find out the through the original code;
let arrNum = [4, 1, 2, 5];
let numStore = [];

for (let i = 0; i < arrNum.length; i++) {
  for (let j = i + 1; j < arrNum.length; j++) {
    if (arrNum[i] > arrNum[j]) {
      numStore = arrNum[i];
      arrNum[i] = arrNum[j];
      arrNum[j] = numStore;
    }
  }
}

// for the printing the value;
for (let i = 0; i < arrNum.length; i++) {
  console.log(arrNum[i]);
}
