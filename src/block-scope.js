

/*
 * Before ES2015, there's no block scope variable.
 * ES2015 (aka ES6) introduced block scope keywords: let and const
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

