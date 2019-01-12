const Koa = require('koa');
const koaStaticCache = require('koa-static-cache');
const KoaRouter = require('koa-router');

const app = new Koa();

app.use( koaStaticCache({
    prefix: '/public',
    dir: './static',
    gzip: true,
    dynamic: true
}) );
app.use( koaStaticCache({
    prefix: '/uploads',
    dir: './uploads',
    gzip: true,
    dynamic: true
}) );

const router = new KoaRouter();

router.get('/getData', async ctx => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.body = '这是app2返回的数据';
});

router.get('/getData2', async ctx => {
    // ctx.body = '这是app2返回的另外一个数据';
    ctx.body = 'let a = "这是app2返回的另外一个数据";';
});

router.get('/getData3', async ctx => {
    let cb = ctx.query.cb || 'fn';
    ctx.body = cb + '("这是app2返回的另外一个数据");';
});

router.get('/getData4', async ctx => {
    ctx.body = 'miaov';
});

app.use( router.routes() );

app.listen(8080);