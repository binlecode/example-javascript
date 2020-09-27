

/*

Type coercion is the process of converting value from one type to another (such as 
string to number, object to boolean, and so on). 


There are only three type of conversions in javascript:
- to string
- to number
- to boolean

Any type, be it primitive or an object, is a valid subject for type coercion.
But, all of them can only convert to above three types.

Since ES6, Objects are converted to primitives via the internal [Symbol.toPrimtive] 
method on an object, which is responsible for both numeric and string conversion.
And it can be overridden for custom coersion logic.

Since the logic in toPrimitive method is calling valueOf() and toString(), it is
more common to override toString().

*/

'use strict';

// here are some examples of explicit type coercion (aka type casting)

// if number conversion fails, return NaN
const n = Number('abc');
console.log(n);         // NaN
console.log(typeof n);  // number


// in the contrast, if use Number class constructor, an object is returned instead of primitive
const N = new Number('abc');
console.log(N);         // [Number: NaN]
console.log(typeof N);  // object

const s = String(123);
console.log(typeof s);  // string

const S = new String(123);
console.log(typeof S);  // object

// 
console.log(Boolean(1));  // true
console.log(Boolean(0));  // false
console.log(Boolean(-1)); // true, any non-0 number gets true

console.log(Boolean(' '));      // true
console.log(Boolean(''));       // false
console.log(Boolean('false'));  // true, any non-empty string gets true


/*
Implicit type coercion. It usually happens when you apply operators to values of different types
*/

// coersion in play between primitives

let r = 'abc';
r += 123;   // same as r + '123', 123 changed to string '123'
console.log(r);


// a useful .string(N) method to convert a number to Base-N string
// note the double-dot ..toString()
console.log(1024..toString(2));  // '10000000000'
console.log(1024..toString(8));  // '2000'

// to parse string to number, use parseInt(str, N), for Base-N number
console.log(parseInt('2000', 8));       // 1024
console.log(parseInt('123abc', 16));    // 1194684

// type coercion with objects

console.log(typeof ({} + 1));  // string, both converted to string

console.log(typeof (new Date() + 0));  // string, both converted to string

console.log(true + false);   // 1, binary '+' operator triggers numberic conversion

console.log(12 / '6');  // 2, division operator / triggers numeric conversion for string
console.log(12 * '6');  // 72, again, arithmetic operator triggers numeric conversion
console.log(12 - '6');  // 6, same rule as above
console.log(12 + '6');  // '126', since at least one operand of '+' operator is string, string conversion is triggered
console.log(12 + 3 + '6'); // '156', 12 + 3 => 15 has no type conversion, 15 + '6' triggers string conversion

