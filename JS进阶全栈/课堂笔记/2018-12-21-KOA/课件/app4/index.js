/**
 * 加载koa
 */
const Koa = require('koa');

/**
 * KoaRouter: 类
 */
const KoaRouter = require('koa-router');

/**
 * 实例化Koa对象 => 包装过的http对象
 */
const app = new Koa();


const router = new KoaRouter();

const users = [
    {id: 1, username: '张三'},
    {id: 2, username: '李四'},
    {id: 3, username: '王五'},
    {id: 4, username: '六六'}
];

router.get('/user', ctx => {

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
    <ul>
        ${users.map(user => `<li>${user.username}</li>`).join('')}
    </ul>
</body>
</html>
    `;
});

router.get('/user/:id', ctx => {

    let user = users.find(user => user.id == ctx.params.id);

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
    <h1>[${user.id}] - ${user.username}</h1>
</body>
</html>
    `;

});

app.use( router.routes() );

/**
 * 监听指定端口和ip
 *  ip是默认的0.0.0.0
 */
app.listen(80 /*, '0.0.0.0'*/);