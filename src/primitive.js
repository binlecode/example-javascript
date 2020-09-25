
/**
 * A JavaScript primitive is an instance of a particular data type, and there are five such 
 * in the language: String, Number, Boolean, null, and undefined.
 */


 // Of the primitive data types, three have complementary constructor objects: String, Number, and Boolean. 
 // These objects provide access to the built-in properties and methods that allow us to do more than simple
 // assignment and subsequent access.

let n = 12.3;
let n2 = Number(12.3);   // Number() function returns a primitive
let N = new Number(12.3);   // new Number() is calling the constructor of Number class that returns a Number instance
let N2 = new Number(12.3);

// see the difference between a primitive and an object instance when compare an object instance to a 
// literal value using strict equality

console.log(n === 12.3);   // true, primitives compare by value, and values are literals
console.log(n === n2);     // true
console.log(n === N);      // false
console.log(N === N2);     // false


let s = 'hello';
let s2 = String('hello');
let S = new String('hello');
let S2 = new String('hello');

console.log(s.length);
console.log(s === s2);   // true
console.log(s === S);    // false
console.log(S === S2);   // false


let b = true;
let B = new Boolean(true);



