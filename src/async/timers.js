
/*

Timers are used to schedule events in the future.

Note that when using timers, one should make no assumptions about the amount 
of actual time that will expire before the callback registered for this timer
fires, or about the ordering of callbacks. Node timers are not interrupts.
Timers simply promise to execute as close as possible to the specified time
(though never before), beholden, as with every other event source, to event 
loop scheduling.

*/


// timers can be canceled:

let timer1 = setTimeout(function() {console.log('hello!');}, 500);
// this will cancel the timer before it is triggered, so the 'hello' message
// won't get displayed
clearTimeout(timer1);

let timer2 = setInterval(function() {console.log('hello too !');}, 1000); 
// this will stop the interval timer in 5s
setTimeout(() => {
    clearInterval(timer2);
}, 5000);


/*

Both setTimeout() and setInterval() fire after the given delay, but what happens
is a message to this effect is added to the event loop, to be processed in turn. 

When the event loop is particularly cluttered, there is a delay before the the
timer functions’ callbacks are called: the callback will probably not be called
in exactly (delay) milliseconds. 

Node.js makes no guarantees about the exact timing of when the callback will fire,
nor of the ordering things will fire in. 
The callback will be called as close as possible to the time specified.

*/

let textTokens = `
Both setTimeout() and setInterval() fire after the given delay, but what happens
is a message to this effect is added to the event loop, to be processed in turn. 
When the event loop is particularly cluttered, there is a delay before the the
timer functions’ callbacks are called: the callback will probably not be called
in exactly (delay) milliseconds. 
Node.js makes no guarantees about the exact timing of when the callback will fire,
nor of the ordering things will fire in. 
The callback will be called as close as possible to the time specified.
`.split(' ');

const tokenSize = textTokens.length;

// this type writer types one word every 100ms, until reaching the end of text

let idx = 0;
let animatedTypeWriter = setInterval(() => {
    // console.info(textTokens[idx++]);
    process.stdout.write(textTokens[idx++] + ' ');  // print to screen without new line
    if (idx >= tokenSize) {
        clearInterval(animatedTypeWriter);
    }
}, 100);






