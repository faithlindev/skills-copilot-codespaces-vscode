//Create Web Server
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');
var comments = [];
var server = http.createServer(function(req,res){
    var parseUrl = url.parse(req.url,true);
    var pathName = parseUrl.pathname;
    if(pathName === '/'){
        fs.readFile('./index.html',function(err,data){
            if(err){
                res.end('404 Not Found');
            }else{
                res.end(data);
            }
        });
    }else if(pathName === '/post'){
        fs.readFile('./post.html',function(err,data){
            if(err){
                res.end('404 Not Found');
            }else{
                res.end(data);
            }
        });
    }
    else if(pathName === '/comment'){
        var comment = parseUrl.query;
        comments.push(comment);
        res.end(JSON.stringify(comments));
    }
    else{
        fs.readFile(path.join(__dirname,pathName),function(err,data){
            if(err){
                res.end('404 Not Found');
            }else{
                res.end(data);
            }
        });
    }
}
);
    