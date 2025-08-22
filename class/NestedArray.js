// [1,2,[3,4],5]; => [1,2,3,4,5]; ?
// You can also use the flat methods; like this let num = [1,2,[3,4]]; console.log(num.flat());
// And you get the correct output as you expected;
// okay lets begin with the real or the venilla methods;

let arrNum = [1, 2, [3, 4], 5];
for (let i = 0; i < arrNum.length; i++) {
  // use this to check if the nested array is the array or not;
  if (Array.isArray(arrNum[i])) {
    for (let j = 0; j < arrNum[i].length; j++) {
      console.log(arrNum[i][j]); // Ouput should be like this => [1,2,3,4,5];
    }
  } else {
    console.log(arrNum[i]);
  }
}
