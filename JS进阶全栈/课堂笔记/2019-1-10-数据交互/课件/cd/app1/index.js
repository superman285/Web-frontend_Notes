const Koa = require('koa');
const koaStaticCache = require('koa-static-cache');
const KoaRouter = require('koa-router');
const http = require('http');

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
    ctx.body = '这是app1返回的数据';
});

/**
 * 很多的语言都能够处理网络方面的编程，都支持http
 * 所以我们可以在服务端发送http请求
 */
router.get('/getApp2', async ctx => {

    // 去请求另外一个源的内容
    // const req = http.request('http://localhost:8080/getData4', res => {
    //     let data = '';
    //     res.on('data', chunk => {
    //         // console.log(chunk);
    //         data += chunk.toString();
    //     });
    //     res.on('end', chunk => {
    //         console.log('数据接收完成', data);
    //     })
    // });

    // req.write('');
    // req.end();

    return new Promise( resolve => {
        const req = http.request('http://localhost:8080/getData4', res => {
            let data = '';
            res.on('data', chunk => {
                // console.log(chunk);
                data += chunk.toString();
            });
            res.on('end', chunk => {
                // console.log('数据接收完成', data);
                ctx.body = data;
                resolve();
            })
        });

        req.write('');
        req.end();
    } );

    // ctx.body = 'getApp2';
});


app.use( router.routes() );

app.listen(80);