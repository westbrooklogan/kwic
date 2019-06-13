import {RequestHandler} from "express";
import "Kwic";


export const Kwic : RequestHandler = (req, res, next) => {
    res.send("shifting input...");
};