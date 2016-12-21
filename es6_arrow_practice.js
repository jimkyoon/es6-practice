"use strict";
// use strict mode so throw errors when you get undefined and tell browser to use the latest functionality

// normal js
var getA = function(a){
  return a
};

// es6
let getA = a => a;

// squaring a number
let square = a => a*a;
// redoing square (use this, more used)
let square = (a) => {return a*a};
// arrow functions can take variables from outside
var a = 4;
let square = () => {return a*a};
// returns 16
// arguments can also be written with underscore (not really used)
let square = _ => {return a*a};

// multiple arguments
let multi = (a,b) => {return a*b};
console.log(multi(2,4));

// normal js (this one breaks because it cant read the "val" from above)
var x = function(){
  this.val = 1;
  setTimeout(function(){
    this.val++;
    // this only reads inside the setTimeout function
    console.log(this.val)
  }, 1)
};
var xx = new x();
// output is NaN

// normal js (this one works because we set a new variable (that) to this)
var x = function(){
  var that = this;
  this.val = 1;
  setTimeout(function(){
    that.val++;
    console.log(that.val)
  }, 1)
};
var xx = new x();

// es6
var x = function(){
  this.val = 1;
  setTimeout(() => {
    this.val++;
    console.log(this.val)
  }, 1)
};
var xx = new x();
// dont use arrow functions if you only want to use its own functions this

// normal js
var x = function(){
  console.log(arguments[0])
};
x(1,2,3);
// returns 1

var x = () => {
  console.log(arguments[0])
};
x(1,2,3);
// returns "Event {isTrusted: true}"
// to fix this
// ...n is a spread operator, which takes in any number of arguments
var x = (...n) => {
  console.log(n[0])
};
x(1,2,3);
