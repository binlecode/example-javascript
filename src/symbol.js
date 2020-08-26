/**
 * Symbol is a new primitive type since ES6.
 * 
 * Symbols can be used for three distinct purposes:
 * - To define properties for objects in such a way they don’t appear during
 *   normal iteration — these properties are not private, they’re just not
 *   easily discovered like other properties.
 * - To easily define a global registry or dictionary of objects.
 * - To define some special well-known methods in objects. This feature, which
 *   fills the void of interfaces, is arguably one of the most important purposes
 *   of Symbol.
 */

const symGender = Symbol('gender');
const height = 'heightInFoot';

const jack = {
    name: 'jacky',
    [symGender]: 'male',
    [height]: 5.5,    // actually prop name will be 'heightInFoot'
    email: 'jack@cool.com'
}

// gender info won't show
for (const k in jack) {
    console.log(k + ': ' + jack[k])
}
// verify that gender is not in property list
console.log('list of property names:'); 
console.log(Object.getOwnPropertyNames(jack)); // [ 'name', 'heightInFoot', 'email' ]

// A Symbol property is hidden from normal iteration. But it is not private or encapsulated.

console.log('list of symbol properties'); 
console.log(Object.getOwnPropertySymbols(jack));

console.log("jack's gender: " + jack[symGender]);

// symbol also has uniqueness nature
const s1 = Symbol.for('a nice day');
const aniceday = 'a nice day';
const s2 = Symbol.for(aniceday);
console.log(s1 === s2);  // true

// This feature of uniqueness of Symbol is used in JavaScript to define special 
// well-known functions, such as Symbol.iterator










