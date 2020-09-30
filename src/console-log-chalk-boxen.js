
/*
logging with color thanks to chalk lib: https://github.com/chalk/chalk#readme

npm install chalk
*/

'use strict';

const chalk = require('chalk');
const log = console.log;

// Combine styled and normal strings
log(chalk.blue('Hello') + ' World' + chalk.red('!'));

// Compose multiple styles using the chainable API
log(chalk.blue.bgRed.bold('Hello world!'));

// Pass in multiple arguments
log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));

// Nest styles
log(chalk.red('Hello', chalk.underline.bgBlue('world') + '!'));

// ES2015 template literal with style chaining
log(`
CPU: ${chalk.red.bold('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow.underline('70%')}
`);

// Use RGB colors in terminal emulators that support it.
log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
log(chalk.hex('#DEADED').bold('Bold gray!'));

/*

chalk can also define string themes

*/

const err = chalk.red.bold;
const wrn = chalk.yellow.bold;
const lerr = (msg) => console.log(err(msg));
const lwrn = (msg) => console.log(wrn(msg));

lerr('this is an error message');
lwrn(`warning at ${new Date()}`);


/*
To make it more fun, decorate with boxen lib.

npm install boxen
*/

const boxen = require("boxen");

const boxenOptions = {
    padding: 3,
    margin: 1,
    borderStyle: "round",
    borderColor: "green",
    // backgroundColor: "#555555"
};

const msgBox = boxen(chalk.yellow.bold("Hello!"), boxenOptions);

console.log(msgBox);


