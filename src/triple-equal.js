
/*
 * In javascript, double equal `==` has implicit type coercion if things being compared 
 * are not of the same type. 
 */

console.log(1 == '1');   // true
console.log(1 == '1.0'); // true
console.log(1 === '1');  // false


/*
 * Double equal is useful when check if a variale is either `undefined` or `null`.
 * With type coercion, undefined == null returns true.
 */

let n = null;
console.log(typeof n); // object
console.log(n == undefined);  // true
console.log(n === undefined); // false


/*
 * Double equal is also useful for value comparison between primitive and objects.
 */

 let msg = 'this is cool';   // msg is string primitive
 let oMsg = new String('this is cool');  // oMsg is String class instance
 console.log(msg === 'this is cool');   // true, === on primitive is literal value compare
 console.log(oMsg === msg);   // false, strict comparison by reference
 console.log(oMsg == msg);    // true, loose comparison by value


