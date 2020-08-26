
/**
 * In javascript, double equal `==` has implicit type coercion if things being compared 
 * are not of the same type. 
 */

console.log(1 == '1');   // true
console.log(1 == '1.0'); // true

console.log(1 === '1');  // false

/**
 * Double equal is useful when check if a variale is either `undefined` or `null`.
 * With type coercion, undefined == null returns true.
 */

