// find out the number into the asscending order;
class FindAscending {
  constructor(number) {
    this.num = number;
    console.log('number', number);
  }

  manageInOdr() {
    console.log(this.num); // let's check it is it working or not?
    for (let i = 0; i <= this.num.length; i++) {
      for (let j = i + 1; j <= this.num.length; j++) {
        let temp;
        if (this.num[i] > this.num[j]) {
          temp = this.num[i];
          this.num[i] = this.num[j];
          this.num[j] = temp;
        }
      }
    }
  }

  print() {
    for (let i = 0; i <= this.num.length; i++) {
      console.log(this.num[i]);
    }
  }
}

const test = new FindAscending([1, 34, 2, 76, 4]);
test.manageInOdr();
test.print(); // output : 1,2,3,4....;

// It work but i want this in the number form;

// jati j gare pani 7 number bhnda muni aunu paro.
function numberCount() {
  // The problem is = i want a value greater then the one;
  let randNum = Math.random(Math.floor());
  if (randNum < 1) {
    console.log('sorry miss');
  }
  console.log(randNum); // random ouptput;
  if (randNum < 7) {
    console.log('yes it is small then the 7');
    console.log(randNum); // kun number le kteko vanera tha pauna;
  }
}
numberCount(); // let's see the output;
