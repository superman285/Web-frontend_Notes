/**
 * 加载koa
 */
const Koa = require('koa');

/**
 * KoaRouter: 类
 */
const KoaRouter = require('koa-router');

/**
 * 实例化Koa对象 => 包装过的http对象
 */
const app = new Koa();


// app.use( ctx => {
    /**
     * 访问同一个url的时候
     * 
     * 静态资源：如果资源内容不改变，那么访问这个url的时候得到的内容是不会有任何变化的
     * 动态资源：同一个url可能会根据不同的一些处理得到不一样的内容
     */

    //  ctx.body = '' + Math.random();

    /**
     * 静态资源我们就可以利用直接读取文件并返回的方式去实现
     * 比如：koaStaticCache
     * 
     * 而动态的内容，我们就需要写具体的处理逻辑
     * 根据不同的url返回不一样的内容
     * 因为动态资源的url也可能会有很多，那么为了更好的去处理这些url
     * 我们使用 一个 路由的 中间件来处理
     */
// } );

/**
 * KoaRouter的使用
 */
const router = new KoaRouter();

/**
 * 与koa中use不一样，router可以设置url与中间件的绑定
 * 
 * 我们要做的事情就是为我们的url去绑定对应处理函数
 *  这个就叫：路由
 *      路由：映射，一个url与某个函数的绑定
 */

/**
 * use与get区别是：
 *  use不会处理请求方法，任何的请求方法都会走use，不区分get，post
 *  url部分也不是相等，而是包含关系，use判断的是当前请求是否是指定的前缀
 * 
 * 有点类似某种模式的统一入口
 * 
 * 假设下面/user开头的访问都需要验证用户是否登陆，通过了才能访问
 *  - 第一种方式：为每一个 /user 开始的路由都进行一个判断
 *  - 第二种方式：我们可以使用use来做统一验证
 * 
 * 注意：
 *  多个中间件函数只会默认执行第一个，后续的中间件函数的执行需要我们手动
 *  去调用
 *  中间件函数的第二个参数是一个next方法，调用该方法就可以执行下一个匹配的中间件
 */
// router.use('/', ctx => {
//     console.log('...');
// });
router.use('/user', (ctx, next) => {
    console.log('需要验证');
    if ( false /** 验证用户权限 */) {
        next();
    } else {
        // ctx.body = '需要登陆';
        ctx.redirect('/login');
    }
});

router.get('/', ctx => {
    ctx.body = '首页';
});

/**
 * 临时设置login重定向到login1
 */
router.redirect('/login', '/login1', 302);

router.get('/login1', ctx => {
    ctx.body = '登陆页面';
});

router.get('/user', ctx => {
    ctx.body = '用户首页';
});
router.get('/user/profile', ctx => {
    ctx.body = '用户信息';
});
router.get('/user/order', ctx => {
    ctx.body = '用户订单';
});

/**
 * 需要把设置好的路由对象挂载到指定的app中
 *  app接收到请求以后，会把请求转发给router.routes()中间件
 * 
 * app -> router -> 根据不同url执行不同的绑定函数
 */
app.use( router.routes() );

/**
 * 监听指定端口和ip
 *  ip是默认的0.0.0.0
 */
app.listen(80 /*, '0.0.0.0'*/);