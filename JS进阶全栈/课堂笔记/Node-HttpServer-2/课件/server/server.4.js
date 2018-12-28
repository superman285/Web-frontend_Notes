const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {

    let urlStr = req.url;
    

    /**
     * 如果我们返回给前端的是一些html字符串，这就会很麻烦
     * 首先，这样的页面会特别多，不同的html会有不同的去匹配
     * 同时如果这种html字符串写在后端代码中，修改也会特别的麻烦
     * 
     * 1. 前后端代码分离
     * 
     * 这样还不够，因为我们需要为每一个url进行单独的处理，文件多了就得疯掉了
     */
    let content = '';
    switch(urlStr) {
        case '/':
            // 文件都是基于二进制流数据操作
            res.setHeader('content-type', 'text/html');
            content = fs.readFileSync('../myWeb/index.html');
            res.write(content.toString());
            break;
        case '/css/css.css':
            res.setHeader('content-type', 'text/css');
            content = fs.readFileSync('../myWeb/css/css.css');
            res.write(content.toString());
            break;
        default:
            res.setHeader('content-type', 'text/html');
            res.statusCode = 404;
            res.write('<h1>404</h1>');
            break;
    }
    
    res.end();

    console.log('用户请求了');
});

// server.on('request', function() {
//     console.log('用户请求了');
// });

server.listen(80);