import {RequestHandler} from "express";

export const Kwic : RequestHandler = (req, res, next) => {
    res.send("shifting input...");
};