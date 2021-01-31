

/*
 * Before ES2015, there's no block scope variable.
 * ES2015 (aka ES6) introduced block scope keywords: let and const
 * 
 * The let and const block bindings introduce lexical scoping to JavaScript. 
 * These declarations are not hoisted and only exist within the block in 
 * which they are declared.
 * 
 * As more developers migrated to ECMAScript 6, an alternate approach gained 
 * popularity: use const by default and only use let when you know a variable’s 
 * value needs to change. 
 * The rationale is that most variables should not change their value after 
 * initialization because unexpected value changes are a source of bugs.
 */

var x = 0;
console.log("before loop, x = " + x);
for (var x = 0; x < 3; x++) {
    console.log("within loop, x = " + x);
}
console.log("after loop, x = " + x);

let y = 0;
console.log("before loop, y = " + y);
for (let y = 0; y < 3; y++) {
    console.log("within loop, y = " + y);
}
console.log("after loop, y = " + y);




