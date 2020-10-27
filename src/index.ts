import path from "path";
import express from "express";

const server = express();
const assets = path.join(__dirname, "..", "static");


server.use(express.static(assets));
server.set("view engine", "ejs");

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
server.get("/testejs",(req,res) => {
	res.render("test");
});


function getStaticFile(fileName:string):string {
	return path.join(assets,fileName);
}

server.listen(process.env.PORT || 8080, ()=> {
	console.info(`Server is running! Open http://localhost:${process.env.PORT || 8080}/`);
});
