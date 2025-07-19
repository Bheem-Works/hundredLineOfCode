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

// syntax;
// apply(thisArgs,argsArray);

const number = [1,2,3,4,5];
const max = Math.max.apply({},number);
console.log(max);

const firstNum = ["a","b"];
const secondNum = [1,2,3];
const joinNumber = firstNum.push.apply(firstNum,secondNum);
console.info(firstNum);
console.log("First nume",firstNum);
// another pusshing way;
const a = [1,2,34];
const b = [1,2,4];
console.log("thi");
a.push(...b);
console.info(a);

let x = 10;
console.log("X",x)
let y = x; // 10;
x = 20;

let c = { value : 10};
let d = c;
d.value = 30;

var ten = 10;
function increaseTen(n){
  n++;
  return n;
}
let increasedNumber = increaseTen(ten);
console.log(increasedNumber,"increasedNumber"); // 11;
increaseTen(ten);
console.log(ten); // 10;

function Round(radius){
  this.radius = radius;
  let defaultLocation = {x:0,y:0}
  this.getDefaultLocation = function () {
    return defaultLocation;
  };
  
  // defining the object properties; 
  Object.defineProperty(this,'defaultLocation',{
    get: function () {
      return defaultLocation;
    },
    set:function (value){
      if(!value.x || !value.y)
        throw new Error('invalid error');
      defaultLocation = value;
    }
  })
  this.draw = function(){
    console.log('draw');
  }
}

const oval = new Round(10);
oval.defaultLocation = 1; 
oval.location = {x:0};
delete oval.location;

// Taking out the value and the .keys
for(let key in oval){
  console.log(key,oval[key])
};
const findKey = Object.keys(oval);
console.log(findKey);

if ('radius' in oval)
  console.log("it has the radius");

let defaultLocation = {x:0,y:0};

this.getDefaultLocation = function () {
  return defaultLocation;
}

