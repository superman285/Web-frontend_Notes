const http = require('http');
const fs = require('fs');

const server = http.createServer(function(req, res) {

    

    /**
     * 如果我们返回给前端的是一些html字符串，这就会很麻烦
     * 首先，这样的页面会特别多，不同的html会有不同的去匹配
     * 同时如果这种html字符串写在后端代码中，修改也会特别的麻烦
     * 
     * 1. 前后端代码分离
     * 
     * 这样还不够，因为我们需要为每一个url进行单独的处理，文件多了就得疯掉了
     * 
     * 这个server程序是我们写的，那么我们就可以去定义一些访问规则
     * 根据用户访问的url，来匹配文件
     */
    let content = '';

    // 获取到当前用户访问的url
    let urlStr = req.url;

    if (urlStr == '/') {
        urlStr = '/index.html';
    }

    // 根据不同的url去读取指定目录下的对应文件
    let file = '../myWeb' + urlStr;
    // console.log(file);

    context = fs.readFileSync(file);

    // 根据file内容获取当前对应文件后缀
    let pointIndex = file.lastIndexOf('.');
    let ext = file.substring(pointIndex+1);
    // console.log(ext);

    // 虽然这样我们可以根据自己定义的规则去读取指定目录下的文件了
    // 但是不同的文件需要输出不同的content-type
    let mime = '';
    switch(ext) {
        case 'css':
            mime = 'text/css';
            break;
        case 'html':
        default:
            mime = 'text/html';
            break;
    }
    res.setHeader('content-type', mime);
    res.write(context);
    res.end();

    // console.log('用户请求了');
});

// server.on('request', function() {
//     console.log('用户请求了');
// });

server.listen(80);