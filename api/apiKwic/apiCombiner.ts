import { RequestHandler } from "express";
import { Combiner } from "./Combiner";
import { KwicRequestHandler } from "./KwicRequestHandler";

export const apiCombiner:KwicRequestHandler = (req, res, next) => {

    let stringToCombine = req.ShiftedString;
    const stringCombiner:Combiner = new Combiner();  
    let combinedString:string[][] = [];

    if(typeof(stringToCombine) != "undefined")
        combinedString = stringCombiner.combineResults(stringToCombine);
    
    if(combinedString != []) {
        req.CombinedString = combinedString;
        next(); 
    }
    else {
        next(
            new Error("There was no String to combine. Please add input."
        ));
    }
    
}