const Koa = require('koa');
const koaStaticCache = require('koa-static-cache');
const KoaRouter = require('koa-router');
const koaBodyParser = require('koa-bodyparser');

const app = new Koa();

app.use( koaStaticCache({
    prefix: '/public',
    dir: './static',
    dynamic: true,
    gzip: true
}) );

const Router = new KoaRouter();

app.use(koaBodyParser());

Router.get('/getBaseData', async ctx => {
    ctx.body = 'BaseData';
});

Router.get('/getUser', async ctx => {
    ctx.body = {
        username: 'zmouse',
        height: 170,
        weight: 178
    };
});

Router.get('/getXML', async ctx => {
    ctx.set('content-type', 'text/xml');
    ctx.body = `<?xml version="1.0" encoding="ISO-8859-1"?>
    <user username="zmouse" height="170" weight="178"></user>`;
});

Router.get('/putUserId/:id', async ctx => {
    
    console.log( ctx.params.id );

    ctx.body = 'Ok';
});

Router.get('/putUser', async ctx => {
    
    console.log( ctx.query );

    ctx.body = 'Ok';
});

Router.post('/putUser', async ctx => {
    
    console.log( ctx.request.body );

    ctx.body = 'Ok';
});


app.use( Router.routes() );


app.listen(80);