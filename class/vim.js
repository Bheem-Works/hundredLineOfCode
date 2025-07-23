function identify() {
  return this.name.toUpperCase();
}

function speak() {
  var gretting = "hello i am " + identify.call(this);
  console.log(gretting);
}

var me = { name: "vim" };
var you = { name: "miso" };

console.log(identify.call(me)); // vim;
identify.call(you); // you;

speak.call(me);

// alternative approach without using the this
function letIdentify(context) {
  console.log(context.name.toUpperCase());
}

function letCall(context) {
  var gretting = "hello i am " + identify(context);
  console.log(gretting);
}

letIdentify(me);

function pen() {
  console.log("i am having a pen right now");
}

pen.call();

let person = {
  name: "vim",
  greet: function () {
    console.log(this.name); // 'vim';
  },
};

let greeFunc = person.greet.bind(person);
greeFunc();
person.greet();

let obj = {
  a: "a",
};
let objChange = (obj.a = "b");
console.log(objChange);

// Change in the 'this' methods
function foo() {
  console.log((foo.a = "miso"));
  let change = this.a;
  change = "miama";
  console.log(change);
}

let boo = {
  a: "noBike",
};
boo.a = "vimBike";
console.log(boo);
foo(); // 'miso';
