// // request - response => server
// // http
// var http = require("http"); // node modules => http , fs, os
// var fs = require("fs");
// var server = http.createServer((req, res) => {
   
//    // burada urlyi kontrol etmeden getiriyor
//     /* console.log(req.url);
//     res.write("<h1>anasayfa</h1>");
//      */

//     /*
//     //burada dosya çağırmadan yazdığımız şeyler gelir
//     if(req.url == "/"){

//         res.write("<h1>anasayfa</h1>");

//     }else if(req.url == "/urunler"){

//         res.write("<h1>urunler</h1>");

//     }else{

//         res.write("<h1>sayfa yok</h1>");
//     }   */


//     if(req.url == "/"){
        
//         fs.readFile("index.html", (err, html) => {
//             res.write(html);
//             res.end();
//          });
        

//     }else if(req.url == "/products"){

//         fs.readFile("urunler.html", (err, html) => {
//             res.write(html);
//             res.end();
//          });

//     }else{

//         fs.readFile("404.html", (err, html) => {
//             res.write(html);
//             res.end();
//          });
//     }
// });

// server.listen(3000, () => {
//     console.log("node.js server at port 3000");
// });     








// express server
// routes
const express = require("express");
const app = express();

app.use("/blog/:id", function(req, res){
    res.send("blog details " + req.params.id);
});

app.use("/blog", function(req, res){
    res.send("Kişisel Blog");
});

app.use("/", function(req, res){
    res.send("anasayfa");
});

app.listen(3000 , () =>{
    console.log("listening on port 3000");
});