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
	console.dir(getStaticFile("index.html"))
	res.sendFile(getStaticFile("index.html"));
});
server.get("/calendar",(req,res) => {
	res.sendFile(getStaticFile("events.html"));
});
server.get("/mission",(req,res) => {
	res.sendFile(getStaticFile("mission.html"));
});
server.get("/team",(req,res) => {
	res.sendFile(getStaticFile("team.html"));
});
server.get("/join",(req,res) => {
	res.sendFile(getStaticFile("join.html"));
});


server.get("/legal",(req,res) => {
	res.sendFile(getStaticFile("legal.html"));
});
server.get("/privacy",(req,res) => {
	res.sendFile(getStaticFile("privacy.html"));
});

server.get("/PowerPlatformWorkshop",(req,res) => {
	res.sendFile(getStaticFile("Events/PPWorkshop.html"));
});

// Legacy Sites

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
	res.render("start");
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
