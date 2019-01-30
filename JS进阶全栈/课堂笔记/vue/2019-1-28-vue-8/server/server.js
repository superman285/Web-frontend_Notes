const Koa = require('koa');
const KoaRouter = require('koa-router');
const KoaParser = require('koa-bodyparser');

const app = new Koa();
const router = new KoaRouter();

let data = {
    _id: 2,
    tasks: [
        {id: 1, name: 'aaa', done: false},
        {id: 2, name: 'bbbb', done: true}
    ]
}

app.use( KoaParser() );

app.use( async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    await next();
} );

router.get('/getTasks', ctx => {
    ctx.body = {
        code: 0,
        data: data.tasks
    };
});

router.post('/addTask', ctx => {
    // console.log(ctx.request.body);
    let name = ctx.request.body.name;

    if (name === '') {
        return ctx.body = {
            code: 1,
            message: '任务标题不能为空'
        };
    }

    let newData = {
        id: ++data._id,
        name,
        done: false
    };
    data.tasks.push(newData);
    // console.log(data);
    ctx.body = {
        code: 0,
        data: newData
    }
});

app.use(router.routes());

app.listen(8080);