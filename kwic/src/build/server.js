"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Kwic_1 = require("./api/apiKwic/Kwic");
const app = express_1.default();
app.get("/", (req, res, next) => {
    res.send("Tour Booking API");
});
app.get("/tours", (req, res, next) => {
    res.send("Get a list of tours...");
});
app.post("/tours", (req, res, next) => {
    res.send("Adding a Tour...");
});
app.post("/KWIC", Kwic_1.Kwic);
// start server and listen to incoming request
app.listen(process.env.PORT || 8091, () => { console.log("Server started..."); });
