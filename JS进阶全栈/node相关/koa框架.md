##### Koa框架 一个http框架



Koa其实就是对node原生http对象的二次包装，提供了更好的接口和结构，方便使用和维护。

具体API https://koa.bootcss.com/



Koa本身超级简单，也没自带路由，可以借助别人实现的第三方中间件，来配合使用。

例如路由 : koa-router

第三方中间件大全：https://github.com/koajs/koa/wiki



常用：

koa-static-cache 静态资源代理

koa-router 路由

nunjucks 模板引擎



```javascript
const Koa = require('koa2');
//相当于const http = require('http');

//创建一个经过Koa包装的http服务器
const app = new Koa();
//相当于 const app = new http.Server();| 或 http.createServer();

//监听指定端口
app.listen(80);
```





Koa帮我们重新包装了http对象(包成app对象)，并处理了很多通用数据和方法，并把这些数据和方法挂到了app的一个属性下面==app.context== context为了方便一般可简写为ctx



没有请求的时候打印(直接打印只能用dir)app.context 是空对象，还没有数据过来

==一般不会直接调用app.context，因为该对象没有经过处理，而是要通过中间件函数的第一个参数去掉用==

有请求的时候，中间件函数就会执行，同时Koa会解析数据并赋值给app.context，把它作为当前执行的中间件的第一个参数传入进来

这样使用：

app.use(ctx=>{console.log(ctx)})





context下包含的对象，请求响应两大对象 就同http一样

- request对象
- response对象  |响应(输出)|
- app对象



context对象下还有一些属性是request和response的映射

e.g 

context.response.body === context.body

context.request.header === context.header

为了写起来简便，很多request和response下的对象都直接挂在了context下。







context.request.url



context.response.body = “<h1>hello</h1>”|“{a:1,b:2}”|“hello world”

帮你自动辨别你提供的数据，智能地设置content-type为html/json/plain (相当于MIME)，不用麻烦你自己再判断



###### 中间件的内涵

一个http服务器主要做的事情流程是如何的？

- 解析请求 -> 处理数据 -> 返回数据



Koa框架帮助我们处理第一步的请求解析并封装到app对象里面以供后续使用且同时帮我们处理数据的返回，比如根据处理好的数据返回不一样的Content-Type



中间的步骤是数据处理，数据的处理就和业务是相关的(你有什么具体需求Koa肯定不知道的)，Koa就无能为力了



> 中间件
>
> ==中间件可以理解为对用户请求进行处理(或过滤等)的一个东西，不会直接对前端进行响应，而是将处理结果往下传递，就是中间处理数据的一个部件==
>
> 需要我们处理的步骤在中间(处理数据这个步骤)，那么我们只需要通过某种方式把我们需要的事情注册到Koa中间件的列表中，当Koa处理完成解析请求后，就会自动的执行我们注册的中间件，执行完中间件后就会自动调用返回数据的代码



中间件本质就是一个函数



注册中间件

app.use(function(){

}); 

//可以处理代理、跨域、负载等各种各样的问题 ssr服务器端渲染