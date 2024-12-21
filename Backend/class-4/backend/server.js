const express = require('express');
const http = require('http');
require('dotenv').config();



const app = express();
// const server= http.createServer((req,res)=>{
//     if (req.url = "/"){
//         res.writeHead(200);
//         res.end("Home page");

//     } else if(req.url === "/contact"){
//         res.writeHead(200);
//         res.end("contact page");

//     } else if (req.url === "/service"){
//         res.writeHead(200);
//         res.end("service page");
//     }
//     else if (req.url === "/sign up"){
//             res.writeHead(200);
//             res.end("signup page");
//     } else{
//         res.writeHead(404);
//         res.end("page not found");
//     }
// });


// app.get();
// app.post();
// app.put();
// app.delete();
const port = process.env.PORT || 8000;

app.use(express.json())

let data = "Hello Word!";
app.get("/", (req, res) => {
	res.send(data);
})

app.put("/", (req, res) => {
	res.send("Data Recieved Successfully!");
})

app.listen(port, () => { console.log("Server Connected at 4000!") });

