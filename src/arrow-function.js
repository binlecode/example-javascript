

/*
 * Arrow functions give access to their defining environments making them
 * ideal for cases when you need the function to be executed in a different
 * environment than the one where it was defined (think timers or click
 * events handlers).
 *
 */

// when using bracket even for one liner, do put `return` in the statement
const pwr = (x) => { return x * x; };
console.log(pwr(3));
// or without brackets for one liner, no `return` needed
const pwr2 = (x) => x * x;
console.log(pwr2(3));



