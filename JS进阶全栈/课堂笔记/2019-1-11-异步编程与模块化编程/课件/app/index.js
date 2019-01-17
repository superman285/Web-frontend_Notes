const Koa = require('koa');
const koaStaticCache = require('koa-static-cache');
const KoaRouter = require('koa-router');

const app = new Koa();
const router = new KoaRouter();

app.use( koaStaticCache({
    prefix: '/public',
    dir: './static',
    gzip: true,
    dynamic: true
}) );

router.get('/getData', async ctx => {
    ctx.body = 'miaov';
})

app.use( router.routes() );

app.listen(80);