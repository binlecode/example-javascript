
/*

Node, being JavaScript based, runs on a single thread. It is synchronous. 
However, long running operations such as IO and other native API access 
either runs asynchronously or on a separate thread.
Node’s approach to managing this timing disconnect is the event loop.

For example, when an I/O operation is needed, such as writing a chunk of
text to a file, a callback function is specified to do any post-IO activity. 
The rest of your application code is processed without waiting for the IO
to finish.
When the IO has finished, an event signaling the fact is returned to Node,
and pushed on to a queue, waiting for process. 
Node processes this event queue, and when it gets to the event signaled by 
the completed IO operation, it matches the event to the callback, and the
callback is processed.

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






