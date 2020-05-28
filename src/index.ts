import path from "path";
import express from "express";

const server = express();
const assets = path.join(__dirname, "..", "static");

server.use(express.static(assets));

server.get("/",(req,res) => {
	res.sendFile(getStaticFile("index.html"));
});
server.get("/digitalLearning",(req,res) => {
	res.sendFile(getStaticFile("DigitalLearning.html"));
});
server.get("/lecturesathome",(req,res) => {
	res.sendFile(getStaticFile("lecturesathome.html"));
});
server.get("/insideMicrosoft",(req,res) => {
	res.sendFile(getStaticFile("insideMicrosoft.html"));
});
server.get("/eventcal",(req,res) => {
	res.sendFile(getStaticFile("eventcal.html"));
});
server.get("/feedback",(req,res) => {
	res.sendFile(getStaticFile("feedback.html"));
});
server.get("/youtube",(req,res) => {
	res.sendFile(getStaticFile("youtube.html"));
});


server.get("/legal",(req,res) => {
	res.sendFile(getStaticFile("legal.html"));
});
server.get("/privacy",(req,res) => {
	res.sendFile(getStaticFile("privacy.html"));
});


function getStaticFile(fileName:string):string {
	return path.join(assets,fileName);
}

server.listen(process.env.PORT || 8080);
