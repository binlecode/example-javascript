
const { Color } = require('./color');
// can also import like this:
// const Color = require('./color').Color;

const additionalColors = [
    new Color('dark', '#222222'),
    new Color('grey', '#dddddd')
];

exports.additionalColors = additionalColors;