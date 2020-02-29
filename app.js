const http = require("http");
const express = require("express");
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post('/UE4',function(req,res){
    console.log("Getting UE4 Message");
    var user_name=req.body.user;
    var password=req.body.password;

    console.log("UE4 Message: "+req.body);
    console.log("UE4 Message: "+req.body.key);
    console.log("UE4 Message: "+req.body.value);

});

app.use("/gg",(req, res, next)=>{
    console.log("this always runs");
    next();
});

app.use("/gg",(req, res, next)=>{
    console.log("mid");
    res.send("<h1>gg</h1>");

    //next();
});



app.use("/", (req, res, next)=>{
    console.log("Index");
    res.send("<h1>express</h1>");
});

app.listen(3000, () => {
    console.log('App listening on port 3000!');
});