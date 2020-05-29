// My Second Commit
'use strict';

var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });
    res.end('hello World!!');
}).listen(3000);


console.log('Hello world port 3000');
