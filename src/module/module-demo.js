
// CommonJS format of module loading is via require statement
// argument to the require() can take many forms
// such as module name, file path of directory path
// the file or directory path can be absolute or relative
// note that relative path must have explicit prefix './'

const { foo } = require('./module-util');

console.log(foo());

const mf = require('./module-foo');

console.log('all colors: ' + mf.allColors.map(c => c.name));
console.log(mf.getRandomColor());
