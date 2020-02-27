const http = require("http");
const requestHandler = require("./routes");

function rqListener(req, res){
    requestHandler(req, res);
};

const server = http.createServer(rqListener);

server.listen(3000);

console.log("gg");