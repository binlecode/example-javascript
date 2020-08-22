
/**
 * The async keyword put in front of a function declaration turns it into
 * an async function, which returns a promise. 
 */

 async function hello() {
     return new Promise(function(resolve, reject) {
        setTimeout(() => {
            return resolve('hello');
        }, 1000);
     });
 }

console.log('start waiting for message')
hello().then((data) => console.log('waited message: ' + data));

// promise.then can be rewritten with await keyword in an async function

// note that the line below is printed before `hello().then()` above is returned
console.log('another receiver start waiting for message');

async function hello2() {
    let msg = await hello();
    console.log('received message: ' + msg);
}

// run async function with error handler
hello2()
    .catch((e) => {
        console.log('got exception: ' + e.message);
    });

// Basically async turns a normal function return into a promise.
// A promised can be hooked with a `.then`, or expected by `await` in
// an async funciton.
 