

/*

Functions that operate on other functions, either by taking them as arguments
or by returning them, are called higher-order functions.

*/

function applyEach(list, fn) {
    let rList = [];
    for (const elm of list) {
        rList.push(fn(elm))
    }
    return rList;
}

let srcList = [1, 2, 3];

console.log(applyEach(srcList, (x) => x ** x));  // in-line arrow function

function times10(x) {
    return x * 10;
}

console.log(applyEach(srcList, times10));  // function reference

