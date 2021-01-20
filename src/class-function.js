


'use strict';

// javascript class is function by nature
// funcitons are objects, and inheritance is handled through the prototype

class Foo {}
console.log(Foo);  // [Function: Foo]

// A constructor is called when an instance is created using the new keyword.

class Bar {
    constructor({width, length=100}) {
        this.width = width;
        this.lenth = length;
    }
}

const b = new Bar({width: 20});
console.log(b);


class ChocolateBar extends Bar {
    constructor({width, length=100, type}) {
        super({width, length});  // call superclass constructor
        this.type = type;
    }
}

const cb = new ChocolateBar({width: 2, type: 'milk'});
console.log(cb);

