import express from "express";
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

app.post("/KWIC", Kwic);

// start server and listen to incoming request
app.listen(process.env.PORT || 8091, () => {console.log("Server started...")});