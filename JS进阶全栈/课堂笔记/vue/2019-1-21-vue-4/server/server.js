const Koa = require('koa');
const KoaRouter = require('koa-router');

const app = new Koa();
const router = new KoaRouter();

router.get('/tabs', async ctx => {
    ctx.set('Access-Control-Allow-Origin', 
    '*');
    ctx.body = {
        code: 0,
        data: {
            active: 0,
            titles: [
                '选项一',
                '选项二',
                '选项三'
            ],
            contents: [
                '内容一',
                '内容二',
                '内容三'
            ]
        }
    };
});

app.use( router.routes() );

app.listen(8080);