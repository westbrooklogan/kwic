"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CyclicShifter_1 = require("./CyclicShifter");
exports.apiCyclicShifter = (req, res, next) => {
    let stringToShift = req.StoredString;
    const stringShifter = new CyclicShifter_1.CyclicShifter();
    let shiftedString = [];
    if (typeof (stringToShift) != "undefined")
        shiftedString = stringShifter.setupAndShift(stringToShift);
    if (shiftedString) {
        req.ShiftedString = shiftedString;
        next();
    }
    else
        next(new Error("There was no String to shift. Please add input."));
};
