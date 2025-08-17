// this will be the assecdning and the diseednikng order;

// first let's find out the assecdning and the descending oder;
function findAss() {
  let numberArr = [1, 3, 42, 3, 54];
  for (let i = 0; i < numberArr.length; i++) {
    for (let j = i + 1; j < numberArr.length; j++) {
      let temp;
      if (numberArr[i] > numberArr[j]) {
        temp = numberArr[i];
        numberArr[i] = numberArr[j];
        numberArr[j] = temp;
      }
    }
  }

  // for the print;
  for (let i = 0; i < numberArr.length; i++) {
    console.log(numberArr[i]);
  }
}

findAss(); // we just print out the output
// now remaining is the print;
