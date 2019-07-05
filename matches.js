var mongoose = require("mongoose");
var express = require("express");
var MatchesRouters = require("./routes/match-routes");
var app = express();

app.use(express.json());

app.use("/match", MatchesRouters);

app.get("/", (req, res) => {
    res.status(200).send("Hello World.")
});

mongoose.connect(
    "mongodb://localhost:27017/TeamB",
    { useNewUrlParser: true },
    function (error) {
        if (error) {
            console.log("Not working.");
        } else {
            app.listen(9090, () => {
                console.log("Listening to port 9090");
            });
        }
    }
);