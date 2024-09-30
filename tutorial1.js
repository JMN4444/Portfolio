var http = require('http');
    http.createServer(function(reg, res){
        res.write("This is a tutorial, this may change");
        res.end();
    }).listen(8080);