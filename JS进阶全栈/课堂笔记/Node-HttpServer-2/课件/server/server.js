/**
 * 通过node提供的一些基础（模块）来搭建一个httpServer
 * 提供用户网页浏览服务
 * 
 * http模块是node的核心模块
 * 该模块需要手动引入
 */
const http = require('http');

/**
 * http.createServer()
 *  创建一个http服务器
 *  开启服务以后，就可以接受用户的连接（请求）了
 * 
 * createServer传入的函数自动会添加到request事件中，等同于
 * server.on('request', fn);
 * 
 * 当接收到用户请求的时候
 *  http模块内部会自动创建两个对象
 *      http.IncomingMessage: 保存了当前这次请求的客户端发送过来的信息
 *      http.ServerResponse: 封装了一些向客户端输出的信息和方法
 *  request事件绑定函数会自动接收这两个对象
 */
const server = http.createServer(function(req /*http.IncomingMessage*/, res/*http.ServerResponse*/) {

    console.log(req.url);
    console.log(req.headers);

    // 发送指定的头信息
    res.setHeader('content-type', 'text/html');
    // 设置向客户端输入的数据
    res.write('<h1>Hello</h1>');
    // http协议：每次请求需要通过end来结束输出
    res.end();

    console.log('用户请求了');
});

// server.on('request', function() {
//     console.log('用户请求了');
// });

server.listen(80);