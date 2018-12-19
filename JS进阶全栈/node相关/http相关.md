##### http

回调函数的参数req,res | 请求,响应

http.IncomingMessage | http.Response



IP: 计算机到计算机的连接

端口Port: 程序到程序的连接;同一个ip上不同的应用程序





server.listen(80,‘192.168.1.11’) 监听这个端口



请求的格式：

- 请求行 「请求方法 路径 http协议版本」

- 请求头

- 请求主体



响应的格式









response.write(xxx) 告诉客户端显示

res.end()

response.setHeader(name,value)

content-type “text/html” | “text/plain”



```
<h1>hello</h1>
content-type为text/html时 显示hello
content-type为text/plain时 显示<h1>hello</h1>
```





req.url

127.0.0.1 后面的路径