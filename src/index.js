"use strict";
exports.__esModule = true;
var path_1 = require("path");
var express_1 = require("express");
var express_ejs_layouts_1 = require("express-ejs-layouts");
var server = express_1["default"]();
var assets = path_1["default"].join(__dirname, "..", "static");
server.use(express_1["default"].static(assets));
server.use(express_ejs_layouts_1["default"]);
server.set("view engine", "ejs");
server.set("layout", "./layouts/layout.ejs");
// Website Routing
server.get("/", function (req, res) {
    // console.dir(getStaticFile("index.html"))
    //res.sendFile(getStaticFile("index.html"));
    res.render("index", { custom_css: '<link rel="stylesheet" href="Styles/index.css">' });
});
server.get("/calendar", function (req, res) {
    res.render("events", { custom_css: '<link type="text/css" rel="stylesheet" href="Styles/events.css"> <link type="text/css" rel="stylesheet" href="Styles/highlightbox.css">' });
    //res.sendFile(getStaticFile("events.html"));
});
server.get("/mission", function (req, res) {
    //res.sendFile(getStaticFile("mission.html"));
    res.render("mission", { custom_css: '<link rel="stylesheet" href="Styles/team.css"> <link rel="stylesheet" href="Styles/highlightbox.css">' });
});
server.get("/team", function (req, res) {
    //res.sendFile(getStaticFile("team.html"));
    res.render("team", { custom_css: '<link rel="stylesheet" href="Styles/team.css"> <link rel="stylesheet" href="Styles/highlightbox.css">' });
});
server.get("/join", function (req, res) {
    //res.sendFile(getStaticFile("join.html"));
    //res.writeHead(302, {'Location':'https://forms.office.com/Pages/ResponsePage.aspx?id=k5qmb5C-LE2k65XhzFWFOFChwzBAyUhCrBv0ETTbSalUOFE3WEpPR1IzODVYWEk0MFpaQzBESzlWSS4u'});
    //res.end();
    res.redirect("https://forms.office.com/Pages/ResponsePage.aspx?id=k5qmb5C-LE2k65XhzFWFOFChwzBAyUhCrBv0ETTbSalUOFE3WEpPR1IzODVYWEk0MFpaQzBESzlWSS4u");
});
server.get("/legal", function (req, res) {
    //res.sendFile(getStaticFile("legal.html"));
    res.render("legal", { custom_css: '' });
});
server.get("/privacy", function (req, res) {
    //res.sendFile(getStaticFile("privacy.html"));
    res.render("privacy", { custom_css: '' });
});
// Legacy Sites
server.get("/PowerPlatformWorkshop", function (req, res) {
    res.sendFile(getStaticFile("Events/PPWorkshop.html"));
});
server.get("/BotWorkshop", function (req, res) {
    res.sendFile(getStaticFile("Events/BotWorkshop.html"));
});
server.get("/digitalLearning", function (req, res) {
    res.sendFile(getStaticFile("Legacy/DigitalLearning.html"));
});
server.get("/lecturesathome", function (req, res) {
    res.sendFile(getStaticFile("Events/LatH.html"));
});
server.get("/insideMicrosoft", function (req, res) {
    res.sendFile(getStaticFile("Legacy/insideMicrosoft.html"));
});
server.get("/eventcal", function (req, res) {
    res.sendFile(getStaticFile("Legacy/eventcal.html"));
});
server.get("/feedback", function (req, res) {
    res.sendFile(getStaticFile("Legacy/feedback.html"));
});
server.get("/youtube", function (req, res) {
    res.sendFile(getStaticFile("Legacy/youtube.html"));
});
server.get("/test", function (req, res) {
    res.render("start", { custom_css: '<link rel="stylesheet" href="Styles/index.css">' });
});
// Error Handling
server.use(function (req, res, next) {
    res.status(404).sendFile(getStaticFile("Errors/404.html"));
});
/*server.use((err,req,res,next) => {
    res.status(500).sendFile(getStaticFile("Errors/500.html"));
});*/
// Functions
function getStaticFile(fileName) {
    return path_1["default"].join(assets, fileName);
}
// Server Setup
server.listen(process.env.PORT || 8080, function () {
    console.info("Server is running! Open http://localhost:" + (process.env.PORT || 8080) + "/");
});
