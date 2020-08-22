
// the chain of `then` for a promise
// promise.then returns a promise

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
    return result * 0;
});

// promise can be chained, and forked into miltiple .then callbacks
// though not common, a promise can be handled in multiple callbacks

let p = new Promise(function(resolve, reject) {
    setTimeout(() => resolve(100), 1500);
}).then(function(data) {
    console.log("callback A received data: " + data);
    return data * -1;
});

p.then((data) => {
    console.log("callback B received data: " + data);  // -100
});

p.then((data) => {
    console.log("callback C received data: " + data);  // -100
});


