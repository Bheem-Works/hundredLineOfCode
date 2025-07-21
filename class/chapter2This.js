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
};

var obj = {
  a:3,
  b:"this is implicit binding",
  foo: foo, // this is explicit binding
  maan:maan // this is implicit binding
}

obj.foo(); // 3
obj.maan(); // "this is implicit binding"

// Implicitly Lost
// implicit lost binding occurs when a function is called without an object context, causing `this` to refer to the global object (or undefined in strict mode).
function foo() {
  console.log(this.a);
}
var object = {
  a: 2,
  foo: foo
}

var foo = object.foo; // function is now detached from the object
// foo(); // TypeError: this.a is undefined in strict mode, or logs undefined in
var a = "oops i am the global a";
foo(); // "oops i am the global a"

function foo() {
  console.log(this.b);
}
function dofoo(fn){
  fn();
}

var callObj = {
  a: 2,
  foo: foo
}
var b =  "oops i am the global b";
dofoo(callObj.foo); // "oops i am the global a" - implicit lost binding

// explicit binding; 
// explicit binding is when you use `.call()`, `.apply()`, or `.bind()` to set the context of `this` explicitly.
// context is set to the first argument of `.call()`, `.apply()`, or `.bind()`.