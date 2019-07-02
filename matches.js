var mongoose = require("mongoose");
var express = require("express");

var app = express();

app.listen(8080, () => {
    console.log("Listening to port 8080");
})

app.get("/", (req, res) => {
    res.status(200).send("Hello World.")
});

mongoose.connect(
    "mongodb://localhost:27017/",
    { useNewUrlParser: true },
    function (error) {
        if (error) {
            console.log("Not working.");
        } else {
            console.log("Working.");
        }
    }
);