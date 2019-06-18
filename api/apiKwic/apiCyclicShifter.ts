import { RequestHandler } from "express";
import { CyclicShifter } from "./CyclicShifter";
import { KwicRequestHandler } from "./KwicRequestHandler";

export const apiCyclicShifter:KwicRequestHandler = (req, res, next) => {
    let stringToShift = req.StoredString;
    const stringShifter:CyclicShifter = new CyclicShifter();
    let shiftedString:string[][][] = [];

    if(typeof(stringToShift) != "undefined")
        shiftedString = stringShifter.setupAndShift(stringToShift);

    if(shiftedString) {
        req.ShiftedString = shiftedString;
        next();
    }
    else
        next(
            new Error("There was no String to shift. Please add input."
        ));
}