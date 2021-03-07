
exports.Color = class Color {
    constructor(name, code) {
        this.name = name;
        this.code = code;
    }
}

// can also use either of the following exports statements, same result
// module.exports = { Color: Color };
// exports.Color = Color;
