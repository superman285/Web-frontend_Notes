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

koa2-cors 解决跨域问题



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



==注意==

ctx.body是ctx.response.body 是响应的正文，是服务器发给客户端的！



ctx.request.body 并不一样 这是请求的正文，是客户端发给服务器的！



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



中间件的next方法是异步的，需要加上await



Koa解决跨域简单写法

app.use( async (ctx,next) => {

ctx.set(‘Access-Control-Allow-Origin’,‘*’); await next();

})



##### Koa框架应用



==路径开头的斜线非常非常重要==



###### 静态资源代理 koa-static-cache



> 需要访问静态资源时(例如html啊 图片啊之类)使用静态资源代理 否则打开服务器它不知道读哪个目录 想把目录当成一个服务器 访问里头的静态资源 就需要做这一步
>
> 否则读不到静态资源
>
> 切记: 访问时要正确路径/xxx.html 千万别漏了(动态路由不需要，这儿静态的千万别弄错)
>
>
>
> dir设置静态资源所在目录 要加.
>
> prefix设置你想要加的前缀 不设置也行的 不加.
>
> 访问动态资源可使用路由koa-router 配合前端的get请求的url
>
>









KoaStaticCache(dir\[,options]\[,files]) 包装函数写法 返回一个函数

dir:指定要处理的静态文件(html)存放目录，当用户访问某个url时



options为对象，可以修改

max-age 最长缓存时间| 是否压缩(gzip) | 前缀(prefix,设置url前缀) | dynamic(是否动态读取)

例如prefix:/public 则需要请求/public/index.html才可以访问

prefix的作用是 可以区分开静态资源和需要动态处理的资源 加上前缀才可以正常访问

dynamic 是否动态读取，默认为false

accept-encoding为支持的编码(gzip更常用)



访问同一个url时

- 静态资源: 如果资源内容不改变，那么访问这个url得到的内容不会有任何变化

  例如css啊 图片啊 部分js代码(特效之类)等

- 动态资源: 同一个url可能会根据不同的处理得到==不一样==的内容 

  举个栗子🌰 ctx.body = “”+Math.random() 每次访问同一个url得到的内容可能都不一样



静态资源可以利用直接读取文件并返回的方式处理，例如利用koa-static-cache

动态资源需要具体的处理逻辑，根据不同的url返回不一样的内容

动态资源的url可能量也很大，为了更好地处理这些动态资源url，我们需要使用==路由==，例如koa-router



==Koa框架帮我们处理了请求，处理了输出==



向客户端返回数据是通过 http=> end()方法来实现的

把ctx.body作为返回值， 相当于.end(ctx.body)

所以不需要在中间件中手动调用end方法，只需要给ctx.body赋值



然而中间件很多都是异步操作，如果不做特殊操作 .end方法不会等异步操作完成才调用，所以那时调用会是 not found (那时ctx.body是undefined)



如果 await fn(); .end(ctx.body);  这样就会等fn执行有结果后 才会调end



###### 路由 koa-router

路由：即映射，内容分发，一个url与某个函数的绑定 形成一种关系

为我们的url 绑定对应的 处理函数



```javascript
router.use('/',ctx=>{})
/*
*use不会处理请求方法,任何的请求method都会走use,不区分get|post,类似统一入口
*url部分也不是相等，而是包含，use判断的是是否包含'/',只要前缀为'/'都会走use
*get与use的区别是get时路径必须为相等关系，而use时路径包含即可
*/

//use的作用,例如可以做一个用户统一验证,要么给每个get的/user做个验证,要么在use给/user做验证即可。

router.get('/',ctx=>{
    ctx.body="首页";
})
router.get('/user',ctx=>{
    ctx.body="用户";
})
/*把设置好的路由对象挂到指定的app对象上,app接收到请求后会把请求转发给router.routes()中间件
* app -> router -> 根据不同url执行不同的绑定函数
*/
app.use(router.routes())
```



> 💡注意
>
> 多个中间件函数只会默认执行第一个，后续的中间件函数需要我们手动调用
>
> 中间件函数的第二个参数是一个next方法，调用该方法就可以执行下一个匹配的中间件
>
> d
>
> router.use(‘/user’,(ctx,next)=>{
>
> ​    //判断
>
> ​    next();
>
> })



redirect方法 重定向(不设置默认为302) | 重定向分为 301永久重定向 , 302临时重定向

router.redirect(‘/login’,‘/login1’,302); //临时设置login重定向到login1，参数也可以设置为301



prefix设置前缀，省去后面重复写的时候麻烦

const router = new KoaRouter({

​    prefix: “/user”

});



==path-to-regexp==

/:id 表示/后面面的值是不固定的，所有符合



温习下2小时处视频内容，模板字符串，对象解构，find用法等知识点，



模板字符串支持表达式，不支持语句

可以这么写${users.map(user=>\<li>\</li>).join(‘’)}



###### nunjucks 模板引擎



渲染工作是在后端进行的



let str = tpl.renderString(‘<h1>Hello {{username}}</h1>’,{username:xxxx})







{{var}}代表变量 类似es6中的${var}



管道符|  管道符前的内容作为参数传给管道符后的函数 例如{{var|upper}}





##### 文件上传模块 koa-multer

storage配置



封装的file属性 fieldname | originalname | encoding | mimetype