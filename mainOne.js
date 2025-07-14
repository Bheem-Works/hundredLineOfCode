// here will be the 100 line of the code.

// le'ts get started with the motivatoin words generator;
function inspireWords(input) {
  const oneLine = [
    "if you believe it you will achieve it",
    "human being has ability to change",
    "consistent matter",
    "Do what you love",
    "You r have not learn anythin's right now",
  ];

  // this will be the extra whose motive line is this.
  let oneLinePerson = [];
  oneLinePerson[0] = "Vim magar";
  oneLinePerson[1] = "one punch man";
  oneLinePerson[2] = "vim magar";
  oneLinePerson[3] = "steve jobs";
  oneLinePerson[4] = "alber einstien";

  // random get;
  let random = Math.floor(Math.random() * oneLinePerson.length);
  let getRandomArr = oneLine[random];
  // console.log(getRandomArr);

  // i have to make the clear time out;
  clearTimeout(() => {
    Notification;
  }, 2000);

  let notice;
  notice = setTimeout(() => {
    console.log("There should be the index number from 0 to 5 okay!");
  }, 2000);

  // user get;
  setTimeout(() => {
    let userInput = oneLine[input];
    console.log(userInput);
  }, 3000);
}

inspireWords(3);
