/**
 * 加载koa
 */
const Koa = require('koa');

/**
 * 实例化Koa对象 => 包装过的http对象
 */
const app = new Koa();

/**
 * 静态资源处理中间件
 *  导入的是一个函数：KoaStaticCache
 */
const KoaStaticCache = require('koa-static-cache');


// function KoaStaticCache(options) {
//     return function(ctx) {
            // 具体静态文件代理的逻辑
//     }
// }

/**
 * KoaStaticCache(dir [, options] [, files])返回一个函数，这个函数就是赋值给use的中间件函数了
 *  dir：指定要处理的静态文件存放的目录，当用于访问了某个url的时候，我们从哪里去读取这个url对应的文件
 * 
 * /index.html => 从 './static' 目中去读取 index.html
 * 
 * options
 *  
 */
// app.use( KoaStaticCache('./static', {
//     // dir: './static', //和KoaStaticCache第一个参数的作用是一样的
// }) );

app.use( KoaStaticCache({
    dir: './static',
    // maxAge: 36000000,
    // gzip: true,
    prefix: '/public', //用来设置请求的url前缀
    /**
     * 比如，请求的url /index.html => dir设置的目录中/index.html
     * 但是，我们想用户请求的url是以 /public 开头的，才作为静态文件去处理
     * 因为我们在后期还会有很多非静态的处理，比如 /user/register，我希望它是走后端处理逻辑，所以我们不希望他作为静态url去处理
     * 为了区分静态资源请求和非静态资源请求，那么我们可以设置prefix的值
     * 比如 prefix: '/public'，那么这个时候，只有请求的url是以 /public
     * 开头的才走KoaStaticCache
     */

    //  if (url == '/user/register') {
    //      // 读取数据库，验证，返回对应内容
    //  }



    // dynamic: false
}));


/**
 * 监听指定端口和ip
 *  ip是默认的0.0.0.0
 */
app.listen(80 /*, '0.0.0.0'*/);