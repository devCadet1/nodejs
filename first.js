// var http = require('http');

// http.createServer(function (req ,res) {
//     res.writeHead(200, {
//         'Content-Type' : 'text/html'
//     })
//     var bodyText = 'Hello DevCadet.'
//     res.end (bodyText);
// }).listen(8080)




var http = require('http');

var result = 'Learning NodeJS'

http.createServer(function(req, res) {
    res.writeHead(200 , {
        'Content-Type' : 'Text'
    })
    
    res.end(result)
}).listen(8080)