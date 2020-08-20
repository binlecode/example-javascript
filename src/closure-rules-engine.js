
let val1 = 50,
    val2 = 2,
    thld1 = 10,
    thld2 = 100;

const cdtn1 = () => val1 > thld1;
const cdtn2 = () => val2 > thld2;

const act1 = () => console.log("situation is great");
const act2 = () => console.log("this is ok");
const act3 = () => console.log("need improvement...");

function runRules() {
    if (cdtn1() && cdtn2()) {
        act1();
    } else if (cdtn1() || cdtn2()) {
        act2();
    } else {
        act3();
    }
}

runRules();

// the above rule runner is still imperative
// let's break that into logic arrow functions

const rAnd = (c1, c2) => {
    return c1() && c2();
}

const rOr = (c1, c2) => {
    return c1() || c2();
}

// now construct rules, change an input var and run again

val2 = 200;

function runRules2() {
    if (rAnd(cdtn1, cdtn2)) {
        act1();
    } else if (rOr(cdtn1, cdtn2)) {
        act2();
    } else {
        act3();
    }
}

runRules2();

// todo: from here, the dsl modeling design starts


