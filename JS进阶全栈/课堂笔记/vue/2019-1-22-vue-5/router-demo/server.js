const Koa = require('koa');
const KoaRouter = require('koa-router');

const app = new Koa();

const router = new KoaRouter();

let defaultBody = `
    
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
</head>
<body>

    <a class="link" _href="/main">首页</a>
    <span> | </span>
    <a class="link" _href="/a">页面一</a>
    <span> | </span>
    <a class="link" _href="/b">页面二</a>

    <div class="container"></div>
    

    <script>
    
        let container = document.querySelector('.container');
        
        // history.pushState({}, "a", "/a");

        let links = document.querySelectorAll('.link');
        let url = '/main';
        if (window.location.pathname != '/') {
            url = window.location.pathname;
        }
        getPage();

        links.forEach( link => {
            link.onclick = function(){
                // console.log(this.getAttribute('_href'));
                url = this.getAttribute('_href');
                history.pushState({}, "", url);

                getPage();
            }
        } )
        
        window.onpopstate = function(event) {
            // go,back或者在浏览器中点击前进后退的时候
            url = window.location.pathname;
            // console.log(window.location);
            getPage();
        };

        function getPage() {
            let h = new Headers();
            h.set('m', 'ajax');
            // console.log(h.get('content-type'));

            fetch(url, {
                headers: h
            }).then( res => {
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

router.get('/', async ctx => {
    ctx.body = defaultBody;
});


router.get('/main', async ctx => {
    // console.log(ctx.headers);
    if (ctx.headers.m && ctx.headers.m === 'ajax') {
        ctx.body = `<h1>这是首页</h1>`;
    } else {
        ctx.body = defaultBody;
    }
});

router.get('/a', async ctx => {
    // ctx.body = `<h1>这是a页面</h1>`;

    if (ctx.headers.m && ctx.headers.m === 'ajax') {
        ctx.body = `<h1>这是a页面</h1>`;
    } else {
        ctx.body = defaultBody;
    }
});

router.get('/b', async ctx => {
    // ctx.body = `<h1>这是b页面</h1>`;

    if (ctx.headers.m && ctx.headers.m === 'ajax') {
        ctx.body = `<h1>这是b页面</h1>`;
    } else {
        ctx.body = defaultBody;
    }
});


app.use( router.routes() );

app.listen(80);