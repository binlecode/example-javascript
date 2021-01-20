
/**
 * Destructuring provides an easy way to extract data from arrays and objects. 
 * It removes excessive and repetitive use of indexing operators or dots to get
 * to the data within arrays and objects.
 * 
 * It is widely used in function and method call argument specification.
 */



// destructure object via subset of its keys (property names)

const options = {k1: 'v1', k2: 'v2', k3: 'v3', more: 'more options'};

// selective assignment
const {k1: value1, more: valueMore} = options;

console.log('value1: ' + value1);
console.log(`valueMore: ${valueMore}`);

// if the value variable has the same as key, then use shorthand assignment
// which is further simplified from typing both key and value, since they are 
// the same
const {k2, more} = options;
console.log(`k2: ${k2}`);
console.log(`more: ${more}`);


// only take k2 and k3 keys from the input object in function argument specification
// note the additional argument with default value defined along with destructuring
const doWithParams = ({k2, k3, anotherVar='another input'}) => {
    console.log(`${k2}, ${k3}, ${anotherVar}`);
};

doWithParams(options);


// destructuring can be nested

const cmdObj = {type: 'car', brand: 'bmw', engine: {vol: '3L', horsePower: 215, cyl: 6}, drive: 'RWD', year: 2006};

// only `brand` and `vol` are defined variables, not `engine`
const checkEngine = ({brand, engine: {vol}}) => {
    console.log(`brand: ${brand}, engine size: ${vol}`);
}
checkEngine(cmdObj);

// to change to a different variable name, aka, without shorthand assignment
const checkEngine2 = ({brand: brandName, engine: {vol: volume}}) => {
    console.log(`brand: ${brandName}, engine size: ${volume}`);
}
checkEngine2(cmdObj);

