
/*

console.log() is commonly used, but its rich features are less known...

*/

// support string templating
console.log("%s is %d years old.", "John", 29);

// log arbitrary number of message sections
console.log("this is", 'Bob', 'Kate', 123, new Date(), 'and', 'others');

// These variations add styling to our logs in the console.
'log info debug warn error'.split(' ').forEach((lg) => {
    console[lg](`${lg}\t: this is the logging message`);
});

// print messages to the console conditionally with console.assert()
// when assertion fails, the message will be logged to console

[1, 2, 3, 4].forEach((n) => {
    console.assert(n % 2 == 0, `not an even number: ${n}`);
});


// console has a built-in counter

console.count();   // default: 1

for (let i = 0; i < 3; i++) {
    console.count();   // default: 2, 3, 4
}

console.count();  // default: 5

console.countReset();
console.count();  // default: 1


// more useful than count is timer

console.info('console timer start');
console.time();

setTimeout(() => {
    console.timeEnd();  // prints time lapsed
    console.info('console timer end');
}, 500);



// console provides a tracer to show the call stack trace

// function one() {
//     two();
// }
// function two() {
//     three();
// }
// function three() {
//     console.trace();
// }
// one();






