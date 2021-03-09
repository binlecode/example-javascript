
// javascript doesn't have native thread blocking mechanism

// option 1: jam the main event loop with busy sync loop that 'burn the thread'

function sleep(seconds) {
    const e = new Date().getTime() + seconds * 1000;
    while (new Date().getTime() <= e) {
        // simply burn the thread until time e
    }
}

console.log('start sleep at ' + new Date());
sleep(2);
console.log('end sleep at ' + new Date());

// the thread-burning is good for a blocking call simulation
// definitely not good for production programming

// a more realistic approach is to insert a timeout in a promise 
// and then use await in an async method to delay the callback
// note that the sleep is only for that async method call, not the 
// main event loop

const asleep = async () => {

    console.log('start sleep at ' + new Date());
    await getAsleep();
    console.log('main thread moves on without sleeping');
}


const getAsleep = async () => {
    console.log('start counting');
    return setTimeout(() => {
        console.log('countdown done');
        console.log('end sleep at ' + new Date());
    }, 3000)
}

asleep().then();

