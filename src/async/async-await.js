
/*

Basically async turns a normal function return into a promise.
A promised can be hooked with a `.then`, or expected by `await` in
an async funciton.

The await operator is used to wait for a Promise. It only executes within 
an async function.
The await expressions do not block the process (asynchronous execution), 
but they nevertheless halt further execution of a program (synchronous) 
until the values of the promises are resolved.

*/

async function hello() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            return resolve('hello');
        }, 1000);
    });
}

console.log('start waiting for message')
hello().then((data) => console.log('A received message: ' + data));

// promise.then can be rewritten with await keyword in an async function


async function hello2() {
    let msg = await hello();
    console.log('B received message: ' + msg);
    throw new Error('a new error');
}

// note that the line below is printed before `hello().then()` above is returned
console.log('another receiver start waiting for message');
// run async function with error handler
hello2()
    .catch((e) => {
        console.log('got error message: ' + e.message);
        console.log('got error stack: ' + e.stack);
        // the stack is also available from console.trace
        console.trace('Stack trace below:');
    });


