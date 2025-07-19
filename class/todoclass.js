// startTime -> 5: 35;
// Making a to do list by using the class.


// function call(one){
// return {
//   one,
//   three:function(){
//     console.log("this is three");
//   }
// }
// }

// const circle = call(1);
// circle.three();

// function Circle(radius){
//   this.radius   = radius,
//   this.draw = function () {
//     console.log("draw");
//   }
// };

// Circle.call({},1);
// Circle.apply({},[1,2,3,4]);

function greet(){
  console.log(this.animal,"typically sleep between the",this.sleepDuration);
}

const obj = {
  animal : "cat",
  sleepDuration : "12 hr to 16 hr per day"
}

// So call methods is used for call the objects elements and the properties;
greet.call(obj);

globalThis.globProp = "vim";
function callGlobe(){
  console.log(`globProp value is the ${globProp}`);
}

callGlobe.call();

function one(){
  console.log("one one is the number");
}
one.call();