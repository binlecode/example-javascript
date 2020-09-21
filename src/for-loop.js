
let myLst = new Array(10);
console.log(myLst);

// show the difference between for-in and for-of iterators
let list = [4, 5, 6];

// for-in iterats keys of object, for list, it's the index value
// i is constant of each iteration, and has block scope
for (const i in list) {
   console.log(i); // "0", "1", "2",
}

// for-in iterates keys of a non-list object
let myObj = {k1: 'v1', k2: 123, k3: false};
for (const key in myObj) {
    console.log(`key: ${key} => value: ${myObj[key]}`);
}


// note that for-in will also list propertyies added to object class's prototype

class Foo {}
let foo = new Foo();
Foo.prototype.prop1 = 'value 1';

for (const p in foo) {
    console.log(`foo's ${p} => ${foo[p]}`);  // foo's prop1 => value 1
}


// for-of iterates elements of object, 
// and only work with iterable objects like array or string
for (const elm of list) {
   console.log(elm); // "4", "5", "6"
}

// for-of can support index and element at the same time
// the list's entries() method returns an iterator that holds both 
// index and value
for (const [idx, elm] of list.entries()) {
    console.log(`${idx} => ${elm}`);
}



