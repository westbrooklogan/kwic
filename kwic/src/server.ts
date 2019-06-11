import express, { response } from "express";
import { resolve } from "url";
import { Kwic } from "./api/apiKwic/Kwic";

const app = express();

app.get("/", (req, res, next) => {
    res.send("Tour Booking API");
});

app.get("/tours", (req, res, next) => {
    res.send("Get a list of tours...");
});

app.post("/tours", (req, res, next) => {
    res.send("Adding a Tour...");
});

app.post("/KWIC", (req, res, next) => {
    res.send("Shifting string...");
})
// start server and listen to incoming request
app.listen(process.env.PORT || 8091, () => {console.log("Server started...")});