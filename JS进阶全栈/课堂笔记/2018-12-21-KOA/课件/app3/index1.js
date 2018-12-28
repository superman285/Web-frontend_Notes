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

/**
 * 我们可以通过prefix来设置当前路由的分组
 * 当前路由下就可以省略到prefix前缀的设置了
 */
const router = new KoaRouter({
    prefix: '/user'
});

router.get('/', ctx => {
    ctx.body = '用户首页';
});
router.get('/profile', ctx => {
    ctx.body = '用户信息';
});
router.get('/order', ctx => {
    ctx.body = '用户订单';
});

app.use( router.routes() );

/**
 * 监听指定端口和ip
 *  ip是默认的0.0.0.0
 */
app.listen(80 /*, '0.0.0.0'*/);