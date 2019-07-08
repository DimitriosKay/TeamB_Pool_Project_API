var mongoose = require('mongoose');
var express = require("express");
var cors = require("cors");
var app = express();

var PlayersRouters = require("./routes/player-route");
var MatchesRouters = require("./routes/match-routes");
var QueuesRouters = require("./routes/queue-routes");


app.use(cors({origin: true}));

app.use(express.json());

app.use("/player", PlayersRouters);
app.use("/match", MatchesRouters);
app.use("/queue", QueuesRouters);

mongoose.connect(
    "mongodb://localhost:27017/TeamB",
    { useNewUrlParser: true },
    function (error) {
        if (error) {
            console.log("Could not connect to database.");
        } else {
            app.listen(8080, () => {
                console.log("Listening to port 8080.");
            });
        }
    }
);
