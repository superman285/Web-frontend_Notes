/**
 * 加载koa
 */
const Koa = require('koa');

/**
 * KoaRouter: 类
 */
const KoaRouter = require('koa-router');

/**
 * 静态资源
 */
const koaStaticCache = require('koa-static-cache');


/**
 * 加载模板引擎
 */
const Nunjucks = require('nunjucks');




const app = new Koa();

/**
 * 处理静态资源
 */
app.use(koaStaticCache({
    prefix: '/public',
    dir: 'static',
    gzip: true,
    dynamic: true
}));

const router = new KoaRouter();

const tpl = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader('views')
);

const users = [
    {id: 1, username: 'zhangsan'},
    {id: 2, username: 'lisi'},
    {id: 3, username: 'wangwu'},
    {id: 4, username: 'liuliu'}
];

router.get('/', ctx => {
    ctx.body = tpl.render('index.html', {data: users});
});

app.use( router.routes() );

app.listen(80 /*, '0.0.0.0'*/);