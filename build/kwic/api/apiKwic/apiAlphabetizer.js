"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Alphabetizer_1 = require("./Alphabetizer");
exports.apiAlphabetizer = (req, res, next) => {
    let stringsToSort = req.CombinedString;
    if (stringsToSort) {
        const stringSorter = new Alphabetizer_1.Alphabetizer();
        let sortedStrings = stringSorter.sortResults(stringsToSort, ">");
        res.json(sortedStrings);
    }
};
