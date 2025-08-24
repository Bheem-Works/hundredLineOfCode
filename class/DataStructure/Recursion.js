// Why use the recursion ?
// 1 -> It  breaks down the large problems into the small chunks;
// 2 -> It is a fundamental use in the more advanced algorithms;
//
// Anatomy of the recursions;
// Best case : the smallest instance of the problems that  is solved travilly;
// Recursive case : An instance of the problem that "shrinks" the size of the input towards to the best case;

const factorial = (n) => {
  if (n === 1) return 1;

  return n * factorial(n - 1);
};

console.log(factorial(4));
console.log(factorial(5));

// In the class;

class Factor {
  fact(n) {
    if (n === 1) return 1;

    return n * fact(n - 1);
  }
}

const showFactorial = new Factor(4);
console.log(showFactorial.fact(3));
