

/*
 * Arrow functions give access to their defining environments making them
 * ideal for cases when you need the function to be executed in a different
 * environment than the one where it was defined (think timers or click
 * events handlers).
 *
 */

"use strict";

// when using bracket even for one liner, do put `return` in the statement
const pwr = (x) => { return x * x; };
console.log(pwr(3));
// or without brackets for one liner, no `return` needed
const pwr2 = (x) => x * x;
console.log(pwr2(3));

/**
 * The handling of `this` is different in arrow functions compared to regular 
 * functions. In short, with arrow functions there are no binding of this.
 * In regular functions `this` represented the object that called the function.
 * With arrow functions `this` keyword always represents the object that defined 
 * the arrow function.
 */

function showFunThis() {
    console.log("function's this is: " + this);
}

const showArrThis = () => { console.log("arrow funciton's this is: " + this) };

showFunThis(); // undefined, since it is called in global
showArrThis(); // [object Object], the reference of the script object

// The example below has an arrow function defined by a scope including
// a variable `ctx`, which is changed by the arrow funciton during its call.
// Note that this arrow function is called within the scope of a regular
// funciton, manageCtx, which is not aware of the ctx variable.

let ctx = 'this is global ctx';
const workWithCtx = (msg) => { 
    console.log("arrow function gets context value: " + ctx);
    ctx += ' - appended with: ' + msg;
};

function manageCtx(appendMsg) {
    workWithCtx(appendMsg);
}

manageCtx("hello arrow function!");
console.log("now the global ctx is: " + ctx);  // ctx is changed with appended msg

