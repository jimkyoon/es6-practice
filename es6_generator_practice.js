"use strict"

// asterisk infront of function name for generators
function *g1(){
  console.log('Hello');
  yield 'Yield 1 Ran..';
  console.log('World');
  yield 'Yield 2 Ran..';
  return 'Returned..';
}

// must be assigned to variable
var g = g1();

// console.log(g.next());
// // outputs "Hello, Object{value: "Yield 1 Ran..", done: false}"
// console.log(g.next().value);
// // outputs "Hello, Yield 1 Ran.."

// use iterator
for(let val of g){
  console.log(val);
}
// outputs "Hello, Yield 1 Ran.., World, Yield 2 Ran.."
