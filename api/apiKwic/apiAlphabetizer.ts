import { RequestHandler } from "express";
import { Alphabetizer } from "./Alphabetizer";
import { KwicRequestHandler } from "./KwicRequestHandler";

export const apiAlphabetizer:KwicRequestHandler = (req, res, next) => {
    let stringsToSort = req.CombinedString;

    if(stringsToSort) {
        const stringSorter:Alphabetizer = new Alphabetizer(); 
        let sortedStrings:string[][] = 
            stringSorter.sortResults(stringsToSort, ">");
            
        res.json(sortedStrings);
    }
}