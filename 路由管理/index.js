const http = require('http');
const fs   = require('fs');
var app = http.createServer((req, res) => {
    console.log(req.url);
    if(req.url == '/') {
        res.writeHead (200,{'Content-type': 'text/html;charset=utf-8'})
        res.end(fs.readFileSync('./h5.html'));
    } else {
        res.writeHead (200,{'Content-type': 'text/html;charset=utf-8'})
        res.end(fs.readFileSync('./h5.html'));
        // res.writeHead (404,{'Content-type': 'text/html;charset=utf-8'})
        // res.end('404，你所访问的页面不存在！');
    }
   
}).listen('3000');