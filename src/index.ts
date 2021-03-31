import path from "path";
import express from "express";
import expressLayouts from "express-ejs-layouts";

const server = express();
const assets = path.join(__dirname, "..", "static");


server.use(express.static(assets));
server.use(expressLayouts);
server.set("view engine", "ejs");
server.set("layout", "./layouts/layout.ejs");


// Website Routing

server.get("/",(req,res) => {
	// console.dir(getStaticFile("index.html"))
	//res.sendFile(getStaticFile("index.html"));
	res.render("index", {custom_css:'<link rel="stylesheet" href="Styles/index.css">'});
});
server.get("/calendar",(req,res) => {
	res.render("events", {custom_css:'<link type="text/css" rel="stylesheet" href="Styles/events.css"> <link type="text/css" rel="stylesheet" href="Styles/highlightbox.css">'});
	//res.sendFile(getStaticFile("events.html"));
});
server.get("/mission",(req,res) => {
	//res.sendFile(getStaticFile("mission.html"));
	res.render("mission", {custom_css:'<link rel="stylesheet" href="Styles/team.css"> <link rel="stylesheet" href="Styles/highlightbox.css">'});
});
server.get("/team",(req,res) => {
	//res.sendFile(getStaticFile("team.html"));
	res.render("team", {custom_css:'<link rel="stylesheet" href="Styles/team.css"> <link rel="stylesheet" href="Styles/highlightbox.css">'});
});
server.get("/join",(req,res) => {
	//res.sendFile(getStaticFile("join.html"));
	//res.writeHead(302, {'Location':'https://forms.office.com/Pages/ResponsePage.aspx?id=k5qmb5C-LE2k65XhzFWFOFChwzBAyUhCrBv0ETTbSalUOFE3WEpPR1IzODVYWEk0MFpaQzBESzlWSS4u'});
	//res.end();
	res.redirect("https://forms.office.com/Pages/ResponsePage.aspx?id=k5qmb5C-LE2k65XhzFWFOFChwzBAyUhCrBv0ETTbSalUOFE3WEpPR1IzODVYWEk0MFpaQzBESzlWSS4u");
});


server.get("/legal",(req,res) => {
	//res.sendFile(getStaticFile("legal.html"));
	res.render("legal", {custom_css:''});
});
server.get("/privacy",(req,res) => {
	//res.sendFile(getStaticFile("privacy.html"));
	res.render("privacy", {custom_css:''});
});

// Legacy Sites

server.get("/PowerPlatformWorkshop",(req,res) => {
	res.sendFile(getStaticFile("Events/PPWorkshop.html"));
});

server.get("/BotWorkshop",(req,res) => {
	res.sendFile(getStaticFile("Events/BotWorkshop.html"));
});

server.get("/digitalLearning",(req,res) => {
	res.sendFile(getStaticFile("Legacy/DigitalLearning.html"));
});
server.get("/lecturesathome",(req,res) => {
	res.sendFile(getStaticFile("Events/LatH.html"));
});
server.get("/insideMicrosoft",(req,res) => {
	res.sendFile(getStaticFile("Legacy/insideMicrosoft.html"));
});
server.get("/eventcal",(req,res) => {
	res.sendFile(getStaticFile("Legacy/eventcal.html"));
});
server.get("/feedback",(req,res) => {
	res.sendFile(getStaticFile("Legacy/feedback.html"));
});
server.get("/youtube",(req,res) => {
	res.sendFile(getStaticFile("Legacy/youtube.html"));
});

server.get("/test",(req,res) => {
	res.render("start", {custom_css:'<link rel="stylesheet" href="Styles/index.css">'});
});


// Error Handling

server.use((req,res,next) => {
	res.status(404).sendFile(getStaticFile("Errors/404.html"));
});

/*server.use((err,req,res,next) => {
	res.status(500).sendFile(getStaticFile("Errors/500.html"));
});*/


// Functions

function getStaticFile(fileName:string):string {
	return path.join(assets,fileName);
}


// Server Setup

server.listen(process.env.PORT || 8080, ()=> {
	console.info(`Server is running! Open http://localhost:${process.env.PORT || 8080}/`);
});
