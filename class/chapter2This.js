function baz() {
  console.log("baz");
  bar();
}
function bar() {
  console.log("bar");
  foor();
  debugger;
}
function foor() {
  console.log("foo");
}

baz();

function foo() {
  console.log(this.a);
}

var a = 2;
// but this was running in the terminal;

foo(); // 2

// implicit binding;
// -> implicit binding is when the function is called with an object as its context, and that object is used as `this` inside the function.
function foo() {
  console.log(this.a);
}
function maan() {
  console.log(this.b);
}

var obj = {
  a: 3,
  b: "this is implicit binding",
  foo: foo, // this is explicit binding
  maan: maan, // this is implicit binding
};

obj.foo(); // 3
obj.maan(); // "this is implicit binding"

// Implicitly Lost
// implicit lost binding occurs when a function is called without an object context, causing `this` to refer to the global object (or undefined in strict mode).
function foo() {
  console.log(this.a);
}
var object = {
  a: 2,
  foo: foo,
};

var foo = object.foo; // function is now detached from the object
// foo(); // TypeError: this.a is undefined in strict mode, or logs undefined in
var a = "oops i am the global a";
foo(); // "oops i am the global a"

function foo() {
  console.log(this.b);
}
function dofoo(fn) {
  fn();
}

var callObj = {
  a: 2,
  foo: foo,
};
var b = "oops i am the global b";
dofoo(callObj.foo); // "oops i am the global a" - implicit lost binding

// explicit binding;
// explicit binding is when you use `.call()`, `.apply()`, or `.bind()` to set the context of `this` explicitly.
// context is set to the first argument of `.call()`, `.apply()`, or `.bind()`.

function triva() {
  console.log(this.a);
}

var call_triva = {
  a: 2,
};

triva.call(call_triva); // 2

// Hard binding;
function foo() {
  console.log(this.a);
}

var obj = { a: 2 };

var bar = function () {
  foo.call(obj);
};

bar(); // 2
setTimeout(bar, 100); // 2

bar.call(window); // 2

// Arguments Pass Garne ra Return Value Receive Garne
function foo(something) {
  console.log(this.a, something);
  return this.a + something;
}

var obj = { a: 2 };

var bar = function () {
  return foo.apply(obj, arguments);
};

var b = bar(3); // 2 3
console.log(b); // 5

// apply
function sum(a, b) {
  return a + b;
}
var numbers = [1, 2];
var result = sum.apply(null, numbers); // 3
console.log(result);

function bar(something) {
  console.log(this.a, something);
  return this.a + something;
}
var c = { a: 2 };
var callBar = bar.bind(c);
var applyBar = callBar(3);
console.log("the output will be the 5");
console.log(applyBar);
