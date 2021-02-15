
// spread operator `...` for:

// - combine contents from arrays


const l1 = [1, 2, 3];
const l2 = ['a', 'b'];

console.log([l1, l2]);       // [ [ 1, 2, 3 ], [ 'a', 'b' ] ]
console.log([...l1, ...l2]); // [ 1, 2, 3, 'a', 'b' ]

// spread string to an array of chars
console.log([...'hello']); // [ 'h', 'e', 'l', 'l', 'o' ]

// - selective indexing and slicing

const [first, ...rest] = ['aa', 123, 'cake'];
console.log(first); // aa
console.log(rest);
// this is the same, the ...rest is not needed so not defined
const [fst] = ['aa', 123, 'cake'];
console.log(fst);  // aa

const [, second, third, ...rest2] = ['aa', 'bb', 'cc', 123, 'cake'];
console.log(second);  // bb
console.log(third);   // cc
console.log(rest2);


// - combine contents from key value entries in literal enhancement

const obj1 = {
    k1: 'v1',
    k2: 'v2'
}

const obj2 = {
    foo: 'bar'
}

// note the interesting value overwriting in literal definition
const cobj = {
    ...obj1,
    k2: 'changed',  // this overwrites the obj1.k2 value defined one-line above
    foo: 'blue',
    ...obj2  // this overwrites the foo value 'blue' defined one-line above
}

for (let k in cobj) {
    console.log(`${k} => ${cobj[k]}`);
}
