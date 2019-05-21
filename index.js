const express = require("express");
const app = express();

app.use("/js",express.static("js"));
app.use("/css",express.static("css"));
app.use("/src",express.static("src"));

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/index.html");
})

app.listen(process.env.PORT || 8000);