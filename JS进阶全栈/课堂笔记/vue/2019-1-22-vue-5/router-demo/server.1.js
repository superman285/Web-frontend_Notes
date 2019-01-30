const Koa = require('koa');
const KoaRouter = require('koa-router');

const app = new Koa();

const router = new KoaRouter();


router.get('/', async ctx => {
    ctx.body = `
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>

        <a href="/">首页</a>
        <span> | </span>
        <a href="/a">页面一</a>
        <span> | </span>
        <a href="/b">页面二</a>
        

        <script>
        
            

        </script>
    </body>
    </html>
    
    `;
});


router.get('/a', async ctx => {
    ctx.body = `
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>

        <a href="/">首页</a>
        <span> | </span>
        <a href="/a">页面一</a>
        <span> | </span>
        <a href="/b">页面二</a>

        <h1>这是a页面</h1>

    </body>
    </html>
    
    `;
});

router.get('/b', async ctx => {
    ctx.body = `
    
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    </head>
    <body>

        <a href="/">首页</a>
        <span> | </span>
        <a href="/a">页面一</a>
        <span> | </span>
        <a href="/b">页面二</a>

        <h1>这是b页面</h1>    

    </body>
    </html>
    
    `;
});


app.use( router.routes() );

app.listen(80);