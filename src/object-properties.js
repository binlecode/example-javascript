
// since es5 (2009), javascript supports class getter and setter


'use strict';

// define in object literal
let foo = {
    name: 'foo',
    _age: -100,
    get age() {
        return this._age * -1;
    },
    // age can not be changed, thus no setter
}
console.log("foo's age: " + foo.age);

// add getter setter to an existing object
Object.defineProperty(foo, 'label', {
    get() {
        return `our greatest ${this.name}`;
    },
    set(lbl) {
        if (lbl) {
            this.name = lbl.toUpperCase();
        }
    }
})
// setter supports '=' assignment operator
foo.label = 'bar';
console.log("foo's label: " + foo.label); // => our greatest BAR

// BUT, you can still access _age property defined in literal, because javascript
// does not support private or protected class members
console.log("foo's secrete age: " + foo._age);


// truly private property is not supported, until ES 2019, by '#' prefix
