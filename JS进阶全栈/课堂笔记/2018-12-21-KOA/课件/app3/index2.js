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

/**
 * path-to-regexp
 *  一个类似正则模式的url路径表示法
 *  https://github.com/alexmingoia/koa-router#module_koa-router--Router+use
 */

const users = [
    {id: 1, username: '张三'},
    {id: 2, username: '李四'},
    {id: 3, username: '王五'},
    {id: 4, username: '六六'}
]

/**
 * path-to-regexp
 *  /:id
 *       表示 / 后面的值是不定的，所有符合 /user/不定的内容  这样格式的url，那就
 *      可以匹配下面的中间件，id这个名称是自己设置的，同时还可以在ctx.params下
 *      通过这个设定的名称来获取对应的内容
 *      
 *      /user/1 => ctx.params.id = 1
 */
router.get('/:id', ctx => {
    let {username} = users.find( user => user.id == ctx.params.id );
    ctx.body = `你好，${username}`;
});

app.use( router.routes() );

/**
 * 监听指定端口和ip
 *  ip是默认的0.0.0.0
 */
app.listen(80 /*, '0.0.0.0'*/);