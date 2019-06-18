"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Combiner_1 = require("./Combiner");
exports.apiCombiner = (req, res, next) => {
    let stringToCombine = req.ShiftedString;
    const stringCombiner = new Combiner_1.Combiner();
    let combinedString = [];
    if (typeof (stringToCombine) != "undefined")
        combinedString = stringCombiner.combineResults(stringToCombine);
    if (combinedString != []) {
        req.CombinedString = combinedString;
        next();
    }
    else {
        next(new Error("There was no String to combine. Please add input."));
    }
};
