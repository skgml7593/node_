// const http = require('http');
// const app = http.createServer((req, res) => {
//     res.writeHead(200, {"Content-Type": "text/html; charset=utf-8"})
//     if(req.url === '/'){
//         res.end("여기는 루트입니다.");
//     } else if(req.url === '/login'){
//         res.end("여기는 로그인 화면입니다.");
//     }
// });

// app.listen(3004, ()=>{
//     console.log("http로 가동된 서버입니다.");
// });

// 모듈
const express = require('express');
const app = express();


// 라우팅
const home = require("./src/routes/home");

// 앱 세팅
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home);  

module.exports =app;

