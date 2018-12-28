/**
 * 加载koa
 */
const Koa = require('koa');

/**
 * KoaRouter: 类
 */
const KoaRouter = require('koa-router');

/**
 * 加载模板引擎
 */
const Nunjucks = require('nunjucks');

/**
 * 实例化Koa对象 => 包装过的http对象
 */
const app = new Koa();


const router = new KoaRouter();

const tpl = new Nunjucks.Environment(
    // 传入的 FileSystemLoader 对象
    // 参数表示模板文件存放的目录
    new Nunjucks.FileSystemLoader('views')
);

// renderString：把数据带入到前面的字符串中，根据模板引擎定义的一些语法规则，进行输出
// 返回编译后的内容
// let str = tpl.renderString('<h1>Hello {{username}}<h1>', {username: 'zMouse'});
// console.log(str);

const users = [
    {id: 1, username: 'zhangsan'},
    {id: 2, username: 'lisi'},
    {id: 3, username: 'wangwu'},
    {id: 4, username: 'liuliu'}
];

router.get('/user', ctx => {

    let str = `
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
        {%for item in data%}
        <li>[#{{item.id}}] {{item.username|upper}}</li>
        {%endfor%}
    </ul>
</body>
</html>
    `;

    ctx.body = tpl.renderString(str, {data: users});
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