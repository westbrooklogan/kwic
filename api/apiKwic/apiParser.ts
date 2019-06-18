import { RequestHandler } from "express";
import { Parser } from "./Parser";
import { KwicRequestHandler } from "./KwicRequestHandler";

export const apiParser:KwicRequestHandler = (req, res, next) => {
    const input:string = req.body.string_To_Shift;
    const inputParser:Parser = new Parser();
    const parsedString = inputParser.parse(input);

    if(parsedString) {
        req.ParsedString = parsedString;
        next();
    }
    else {
        next(
            new Error("There was no String to Parse. Please add input."
        ));
    }

}
