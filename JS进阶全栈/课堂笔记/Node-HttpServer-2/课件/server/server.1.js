const http = require('http');

const server = http.createServer(function(req , res) {

    res.write('A');
    res.end();

});

server.listen(80);