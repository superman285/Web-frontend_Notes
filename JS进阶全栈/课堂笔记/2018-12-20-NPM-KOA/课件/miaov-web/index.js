const Koa = require('koa');
// 类似：const http = require('http');

// 创建了一个经过Koa包装过的http服务器
const app = new Koa();  // Koa其实就是对node原生的http对象的二次包装，提供了更好的接口和结构
// 类似：const app = new http.Server();   // http.createServer()

/**
 * app.use()
 *  注册中间件 - MiddleWare
 *  什么是中间件
 *      一个http的服务器主要做的事情流程是什么？
 *          解析请求 -> 处理数据 -> 返回数据
 *      Koa 框架帮助我们处理第一步的请求解析并封装到app对象里面以供后续使用，同时又帮助我们处理数据的返回，比如根据处理好的数据返回不一样的Content-type
 *      因为中间的步骤是数据处理，数据的处理就和具体业务有关了，Koa就无能为力了
 *      需要我们处理的步骤在 中间 ，那么我们只需要通过某种方式把我们需要做的事情注册到Koa的一个中间件的列表中，如何当Koa处理完成解析请求以后，就会自动的执行我们注册的中间件，执行完我们的中间件以后就会自动调用返回数据的代码
 *      中间件本质就是一个函数
 * 
 * Koa帮助我们重新包装了http（也就是下面的app对象），并处理了很多一些通用数据和方法
 * 并把这些数据和方法挂在到了app的一个属性下面
 *      context属性
 * 
 *      context下又包含了两大对象
 *          request对象
 *          response对象
 * 
 *      在context对象下还有一些属性其实是request对象和response对象一个映射
 * 
 *      比如：
 *          context.response.body 属性
 *          为了使用更加简洁，这个body又同时被挂载到了context.body下面
 *      也就是说
 *          context.body === context.response.body 
 */

// console.dir(app.context);    // 这里打印的时候是空{}，因为这行代码执行的时候还没有任何的请求过来

app.use( function(ctx) {
    // 不要直接调用app.context，因为这个没有处理，而是需要通过中间件函数的第一个参数去调用
    // 当有请求的时候，中间件函数就会执行，同时Koa会解析数据并赋值给app.context
    // 然后把它作为当前执行的中间件的第一个参数传入进来
    // console.dir(app.context);

    // console.log(ctx);

    // console.log(ctx.request.url);

    // ctx.response.body = '<h1>Hello</h1>';
    // ctx.response.body = {a: 1, b: 2};

    // console.log( ctx.request.headers );

    console.log( ctx.headers );

    ctx.body = '<h1>Hello</h1>';

    console.log('有人请求了');
} );

// 监听指定端口
app.listen(80);