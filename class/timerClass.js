// this is the  timer class   of the  js;

// allright wecan do  it. i think so.

function onTimer() {
  return {
    start: function () {
      return "this  is the function";
    },
  };
}

console.log(onTimer().start());

// The apply thing's;
function applyMax(inputNumber) {
  return Math.max.apply(null, inputNumber);
}
console.log(applyMax([1, 2, 3]));
