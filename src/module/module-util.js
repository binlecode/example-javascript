


const foo = function() {
    return 'foo is calling bar(): ' + bar();
}

const bar = function() {
    return 'this is bar function';
}

module.exports = {
    foo
};
