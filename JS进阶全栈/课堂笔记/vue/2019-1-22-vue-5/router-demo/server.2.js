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

        <a href="/#/main">首页</a>
        <span> | </span>
        <a href="/#/a">页面一</a>
        <span> | </span>
        <a href="/#/b">页面二</a>

        <div class="container"></div>
        

        <script>
        
            // let url = '/a';
            // fetch(url).then( res => {
            //     return res.text();
            // } ).then( data => {
            //     // 更新数据
            //     console.log(data);
            // } );

            let container = document.querySelector('.container');

            let url = window.location.hash.substring(1);
            if (url === '') {
                url = '/main';
            }
            getPage();
            

            window.addEventListener('hashchange', e => {
                // console.log( e );
                // console.log( window.location.hash );
                url = window.location.hash.substring(1);

                getPage();
            });

            function getPage() {
                fetch(url).then( res => {
                    return res.text();
                } ).then( data => {
                    // 更新数据
                    console.log(data);
                    container.innerHTML = data;
                } );
            }

        </script>
    </body>
    </html>
    
    `;
});


router.get('/main', async ctx => {
    ctx.body = `<h1>这是首页</h1>`;
});

router.get('/a', async ctx => {
    ctx.body = `<h1>这是a页面</h1>`;
});

router.get('/b', async ctx => {
    ctx.body = `<h1>这是b页面</h1>`;
});


app.use( router.routes() );

app.listen(80);