import { RequestHandler } from "express";
import { Combiner } from "./Combiner";
import { KwicRequestHandler } from "./KwicRequestHandler";

// middleware for the combiner
export const apiCombiner:KwicRequestHandler = (req, res, next) => {
    // get the shifted results
    let stringToCombine = req.ShiftedString; 
    let combinedString:string[][] = [];
    let combinedResults:string[][] = [];

    // if not undefined the combine the shift results back to lines
    if(typeof(stringToCombine) != "undefined") {
        combineResults(new Combiner(), combinedString,
                       combinedResults, stringToCombine);
        
    }
    
    if(combinedString != []) {
        req.CombinedString = combinedString;
        req.CombinedResults = combinedResults;
        next(); 
    }
    else {
        next(
            new Error("There was no String to combine. Please add input."
        ));
    }
    
}

const combineResults = 
    (stringCombiner:Combiner, combinedString:string[][], 
     combinedResults:string[][], stringToCombine:string[][][]) => { 
        combinedString = stringCombiner.combineResults(stringToCombine);
        combinedResults = stringCombiner.combineResults(stringToCombine);
    }