import path from "path";
import express from "express";

const server = express();
const assets = path.join(__dirname, "..", "static");

server.use(express.static(assets));

server.get("/",(req,res) => {
	res.sendFile(getStaticFile("index.html"));
});
server.get("/events",(req,res) => {
	res.sendFile(getStaticFile("events.html"));
});
server.get("/mission",(req,res) => {
	res.sendFile(getStaticFile("privacy.html"));
});
server.get("/team",(req,res) => {
	res.sendFile(getStaticFile("legal.html"));
});
server.get("/join",(req,res) => {
	res.sendFile(getStaticFile("privacy.html"));
});


server.get("/legal",(req,res) => {
	res.sendFile(getStaticFile("legal.html"));
});
server.get("/privacy",(req,res) => {
	res.sendFile(getStaticFile("privacy.html"));
});


server.get("/digitalLearning",(req,res) => {
	res.sendFile(getStaticFile("Legacy/DigitalLearning.html"));
});
server.get("/lecturesathome",(req,res) => {
	res.sendFile(getStaticFile("Legacy/lecturesathome.html"));
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


function getStaticFile(fileName:string):string {
	return path.join(assets,fileName);
}

server.listen(process.env.PORT || 8080);
