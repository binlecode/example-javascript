
// modern javascript has for-in and for-of for easy loopings

// there are old school for loop, similar to c/c++ and java

let a = ["dog", "cat", "hen"];

for (let i = 0; i < a.length; i++) {
    console.log(`${i} : ${a[i]}`);
}

// but the above is not efficlient as .lenth is evaluated for each iteration
// here is a slightly better version where a.length is only evaluated once

for (let i = 0, len = a.length; i < len; i++) {
    console.log(`${i} : ${a[i]}`);
}

// and there is the efficient, and simplified version
// note that the loop ends on item becomes undefined when i goes outof index boundary

for (let i = 0, item; item = a[i++];) {
    console.log(`${i} : ${item}`);
}

console.log('the out-of-bound item from an array is: ' + a[a.length])
