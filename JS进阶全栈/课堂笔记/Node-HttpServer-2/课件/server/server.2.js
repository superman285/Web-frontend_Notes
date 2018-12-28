const http = require('http');

const server = http.createServer(function(req , res) {

    res.write('B');
    res.end();

});

server.listen(80);