
/*
 * Object literal enhancement is opposite to destructuring.
 * 
 */

// grab variables and **copy** them into an object by literal definition

let foo = 'bar';
let star = 'shining';

// 'foo' and 'start' become key names of the new object
// note rock => 'black' is still the standard literal kv definition
let fun = { foo, star, rock: 'black' };

for (key in fun) {
    console.log(`${key} => ${fun[key]}`);
}

// changing object state won't change the original variable's value
fun.star = 'dimming';
for (key in fun) {
    console.log(`${key} => ${fun[key]}`);
}

// still the original value
console.log('variable star = ' + star); // shining

