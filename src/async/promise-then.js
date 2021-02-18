/*

A promise executes once, reaching either an error state (unfuifilled) or 
fulfilled state where the value can be extracted by .then().

Most importantly, Promises, unlike callbacks, are able to manage errors  
across many asynchronous actions.

With promise, any catch statement will catch any errors thrown by any .then() 
prior to it in the chain.

*/

// the chain of `then` for a promise, promise.then returns a promise

new Promise(function(resolve, reject) { 
    setTimeout(() => resolve(1), 1000);  // delay 1s before resolve
}).then(function(result) {
    console.log(`received data ${result}`);
    return result + 10;
}).then(function(result) {
    console.log(`received data ${result}`);

    // explicitly return a new promise with another delayed resolver
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            console.log('delayed by 1s');
            resolve(result);
        },
        1000);
    });
}).then(function(result) {
    console.log(`received data ${result}`);
    throw new Error('Woops!');
    return result * 0;   // this line won't be reached due to error thrown above
}).catch(err => {
    console.log('caught error: ' + err);
    return 100;  // a new value is fulfilled
}).then(data => {
    console.log('a new value: ' + data);
});

// promise can be chained, and forked into miltiple .then callbacks
// though not common, a promise can be handled in multiple callbacks (as 
// fulfilled value consumers)

let p = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(100), 1500);
}).then(function(data) {
    console.log("callback A received data: " + data);
    return data * -1;
});

// introduce multiple consumers for the value fulfilled since this stage

p.then((data) => {
    console.log("callback B received data: " + data);  // -100
});

p.then((data) => {
    console.log("callback C received data: " + data);  // -100
});


