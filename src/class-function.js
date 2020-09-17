


'use strict';

// javascript class is function by nature

class Foo {}
console.log(Foo);  // [Function: Foo]

// A constructor is called when an instance is created using the new keyword.

class Bar {
    constructor({prop1, prop2='value2'}) {
        this.p1 = prop1;
        this.p2 = prop2;
    }
}

const b = new Bar({prop1: 'abc', prop3: 'xyz'});

console.log(b);
