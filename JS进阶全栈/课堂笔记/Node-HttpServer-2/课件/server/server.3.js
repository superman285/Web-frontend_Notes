const http = require('http');
const server = http.createServer(function(req, res) {

    /**
     * 我们想根据用户请求的路径来返回不同的内容
     * 
     * 首先我们要通过请求中的url获取到当前用户请求的路径: req.url
     */
    let urlStr = req.url;
    // console.log(urlStr);
    

    res.setHeader('content-type', 'text/html');

    /**
     * 如果我们返回给前端的是一些html字符串，这就会很麻烦
     * 首先，这样的页面会特别多，不同的html会有不同的去匹配
     * 同时如果这种html字符串写在后端代码中，修改也会特别的麻烦
     * 
     * 1. 前后端代码分离
     */
    switch(urlStr) {
        case '/':
            res.write(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="css/css.css" />
</head>
<body>
    <h1>我的博客</h1>
    <p>从今天开始学习Node</p>
</body>
</html>
            `);
            return;
        case '/list':
            res.write('<h1>List</h1>');
            return;
        case '/view':
            res.write('<h1>View</h1>');
            return;
        default:
            res.statusCode = 404;
            res.write('<h1>404</h1>');
    }
    
    res.end();

    console.log('用户请求了');
});

// server.on('request', function() {
//     console.log('用户请求了');
// });

server.listen(80);