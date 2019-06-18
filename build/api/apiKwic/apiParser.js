"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Parser_1 = require("./Parser");
exports.apiParser = (req, res, next) => {
    const input = req.body.string_To_Shift;
    const inputParser = new Parser_1.Parser();
    const parsedString = inputParser.parse(input);
    if (parsedString) {
        req.ParsedString = parsedString;
        next();
    }
    else {
        next(new Error("There was no String to Parse. Please add input."));
    }
};
