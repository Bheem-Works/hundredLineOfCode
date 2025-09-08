function identify() {
  return this.name.toUpperCase();
}

function speak() {
  var gretting = 'hello i am ' + identify.call(this);
  console.log(gretting);
}

var me = { name: 'vim' };
var you = { name: 'miso' };

console.log(identify.call(me)); // vim;
identify.call(you); // you;

speak.call(me);

// alternative approach without using the this
function letIdentify(context) {
  console.log(context.name.toUpperCase());
}

function letCall(context) {
  var gretting = 'hello i am ' + identify(context);
  console.log(gretting);
}

letIdentify(me);

function pen() {
  console.log('i am having a pen right now');
}

pen.call();

let person = {
  name: 'vim',
  greet: function () {
    console.log(this.name); // 'vim';
  },
};

let greeFunc = person.greet.bind(person);
greeFunc();
person.greet();

let obj = {
  a: 'a',
};
let objChange = (obj.a = 'b');
console.log(objChange);

// Change in the 'this' methods
function foo() {
  console.log((foo.a = 'miso'));
  let change = this.a;
  change = 'miama';
  console.log(change);
}

let boo = {
  a: 'noBike',
};
boo.a = 'vimBike';
console.log(boo);

// Github code.
// new binding;
function iva(a) {
  this.a = a;
}

var baz = {};
var jok = iva.bind(baz);
jok(2);
console.log(baz.a);
var iba = new iva(3);
console.log(iba.a);

// hard binding;
function hardBind(a, b) {
  this.z = a + b;
}

var bar = hardBind.bind(null, 'a');
var baz = new bar('b');
console.log(baz.z); // ab;

// Object.create() -> it's a javascript methods which used to create a object, allowing for precise control over
// over it's prototype chain and the properties.
// Syntax -> Object.create(proto[,properties]);
// Examples:
const animal = {
  speak() {
    console.log(`${this.name} meoowww`);
  },
};

const cat = Object.create(animal);
cat.name = 'miso';
cat.speak(); // output : miso makes sound;

const caaat = Object.create(animal, {
  name: {
    value: 'mika',
    writable: true,
    enumerable: true,
    configurable: true,
  },
});
caaat.speak(); // output : mika makes a sound.

// soft bingin ->
function remot() {
  console.log('name', this.name);
}
var ooobj = { name: 'objc' },
  oobj2 = { name: 'objojj' };

function selfCall() {
  var self = this;
  setTimeout(() => {
    console.log(self.y);
  }, 100);
}

var selfObj = {
  y: 3,
};

selfCall.call(selfObj); // 3;

function car(name, brand) {
  this.name = name;
  this.brand = brand;
}

const showCarName = new car('toyota', 'bhandina');
console.log(showCarName);

function introduce(oneLanguage, twoLanguage) {
  console.log('hi', +this.name + 'loves' + this.language1 + this.language2);
}
var vimCat = { name: 'miso' };
introduce.apply(person, ['js', 'c++']);

// Syntax;
// ✅ new
// new Constructor(arguments...)

// ✅ bind
// function.bind(thisArg, arguments...)

// ✅ call
// function.call(thisArg, arguments...)

// ✅ apply
// function.apply(thisArg, [arguments...])

// ✅ map
// array.map((value, index) => { ... })

// ✅ forEach
// array.forEach((value, index) => { ... })

// ✅ filter
// array.filter((value, index) => { ... })

// ✅ reduce
// array.reduce((accumulator, value, index) => { ... }, initialValue)

// ✅ setTimeout
// setTimeout(function, delayInMs)

// ✅ setInterval
// setInterval(function, delayInMs);
