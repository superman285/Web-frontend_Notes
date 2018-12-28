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
    // ctx.body = tpl.renderString(str, {data: users});

    // 我们还可以通过render方法来要解析从外部设置目录中读取进来
    // 文件是根据初始化的时候设置的目录来读取的，比如上面的views
    ctx.body = tpl.render('user-index.html', {data: users});
});

router.get('/user/:id', ctx => {

    let user = users.find(user => user.id == ctx.params.id);

    ctx.body = tpl.render('user.html', {data: user});

});

app.use( router.routes() );

/**
 * 监听指定端口和ip
 *  ip是默认的0.0.0.0
 */
app.listen(80 /*, '0.0.0.0'*/);