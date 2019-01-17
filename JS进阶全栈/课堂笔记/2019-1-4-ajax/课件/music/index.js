const Koa = require('koa');
const KoaRouter = require('koa-router');
const koaStaticCache = require('koa-static-cache');
const Nunjucks = require('nunjucks');
const mysql2 = require('mysql2/promise');
const koaBodyParser = require('koa-body-parser');

const app = new Koa();

/**
 * 静态文件
 */
app.use( koaStaticCache({
    prefix: '/public',
    dir: './static',
    preload: true,
    dynamic: true
}) );

/**
 * 路由
 */
const router = new KoaRouter();

const tpl = new Nunjucks.Environment(
    new Nunjucks.FileSystemLoader('./views', {
        watch: true
    })
);

/**
 * 数据库
 */
let db;
( async () => {
    db = await mysql2.createConnection({
        user: 'root',
        password: '',
        database: 'miaov_music_development'
    });
} )();

/**
 * 解析通过http正文提交的内容
 *  如果正文中有内容，则把内容按照请求头中的content-type设置的格式进行对应的解析
 *  解析成对象，保存在ctx.resquest.body属性下面
 */
app.use( koaBodyParser() );

/**
 * 自己写一个简单的中间件函数，用来处理获取cookie，并赋值给一个指定的变量
 * 同时这个变量还要在后面的路由函数中能被访问
 */
app.use( async (ctx, next) => {
    ctx.loginUser = {
        uid: 0,
        username: ''
    };

    if ( ctx.cookies.get('username') ) {
        ctx.loginUser.uid = ctx.cookies.get('uid');
        ctx.loginUser.username = ctx.cookies.get('username');
    }

    // 中间件的next方法是异步的，需要使用 await
    await next();
} );

/**
 * 首页
 */
router.get('/:page(\\d+)?', async ctx => {

    // console.log(ctx.cookies.get('isLogin'));
    // let username = ctx.cookies.get('username');

    let page = ctx.params.page || 1;
    let pages = 0;
    let limit = 10;
    let offset = Math.ceil((page - 1) * limit);

    // 总长度
    let sql1 = "select count(*) as len from singers";
    let [[{len: count}]] = await db.query(sql1);
    pages = Math.ceil(count / limit);

    let sql2 = "select * from singers limit ? offset ?";
    let [singers] = await db.query(sql2, [limit, offset]);

    // console.log(singers);
    ctx.body = tpl.render('index.html', {
        singers,
        page,
        pages,
        username: ctx.loginUser.username
    });
});

/**
 * 歌手详情
 */
router.get('/detail/:singerId(\\d+)', async ctx => {

    let singerId = ctx.params.singerId;

    // 根据传入的singerId从singers表中查询指定的用户基本信息
    let sql1 = "select * from singers where id=?";
    let [[singer]] = await db.query(sql1, [singerId]);

    // 根据传入的singerId从singerdetails表中查询指定的用户详细信息
    let sql2 = "select * from singerdetails where singerId=?";
    let [[detail]] = await db.query(sql2, [singerId]);

    let basic = {};
    // 因为数据库中的basic存的是json格式的字符串
    detail.basic = JSON.parse(detail.basic);
    detail.basic.forEach( b => {
        basic[b.key] = b.value;
    } );

    // 获取当前歌手的专辑总数和单曲总数
    // 单曲的总条数
    let sql3 = "select count(*) as len from songs where singerId=?";
    let [[{len: songsCount}]] = await db.query(sql3, [singerId]);

    // 专辑的总条数
    let sql4 = "select count(*) as len from albums where singerId=?";
    let [[{len: albumsCount}]] = await db.query(sql4, [singerId]);

    // 热门歌曲
    let sql5 = "select * from songs where singerId=? limit 10";
    let [songs] = await db.query(sql5, [singerId]);

    // 热门专辑
    let sql6 = "select * from albums where singerId=? limit 5";
    let [albums] = await db.query(sql6, [singerId]);

    ctx.body = tpl.render('singer.html', {
        singer,
        detail,
        basic,
        songsCount,
        albumsCount,
        songs,
        albums,
        username: ctx.loginUser.username
    });
});


/**
 * 播放器页面
 */
router.get('/player', async ctx => {

    ctx.body = tpl.render('player.html', {
        username: ctx.loginUser.username
    });
});

/**
 * 注册页面
 */
router.get('/register', async ctx => {

    ctx.body = tpl.render('register.html', {
        username: ctx.loginUser.username
    });
});

/**
 * 注册用户名的验证
 */
router.get('/checkUserName', async ctx => {
    let {username} = ctx.request.query;

    // 为了能够在浏览器中更加直观看到同步的效果，下面这个代码特意通过定时器控制返回的时间
    // return new Promise( resolve => {
    //     setTimeout(() => {
    //         ctx.body = {
    //             code: 1,
    //             message: '用户名不能为空'
    //         };
    //         resolve();
    //     }, 5000);
    // } );

    if (username == '') {
        ctx.body = {
            code: 1,
            message: '用户名不能为空'
        };
        return;
    }

    let sql1 = "select * from users where username=?";
    let [[user]] = await db.query(sql1, [username]);

    if (user) {
        ctx.body = {
            code: 2,
            message: '该用户名已经被注册了'
        };
        return;
    }

    ctx.body = {
        code: 0,
        message: '可以注册'
    };;
});

/**
 * 注册提交
 */
router.post('/register', async ctx => {
    let {username, password, repassword} = ctx.request.body;

    if (!username || !password) {
        ctx.body = tpl.render('message.html', {
            type: 'error',
            message: '请输入用户名和密码'
        });
        return;
    }

    if (password != repassword) {
        ctx.body = tpl.render('message.html', {
            type: 'error',
            message: '两次输入的密码不一致'
        });
        return;
    }

    // 如果要注册的用户名已经存在了，则表示当前用户不能注册
    let sql1 = "select * from users where username=?";
    let [[user]] = await db.query(sql1, [username]);

    if (user) {
        ctx.body = tpl.render('message.html', {
            type: 'error',
            message: '该用户名已经被注册了'
        });
        return;
    }

    let sql2 = "insert into users (username, password) values (?,?)";
    let [ results ] = await db.query(sql2, [username, password]);

    // console.log(results);
    if (!results.insertId) {
        ctx.body = tpl.render('message.html', {
            type: 'error',
            message: '注册失败'
        });
    }

    ctx.cookies.set('username', username);
    ctx.cookies.set('uid', user.id);
    ctx.body = tpl.render('message.html', {
        type: 'success',
        message: '注册成功',
        url: '/'
    });
});

/**
 * 登录页面
 */
router.get('/login', async ctx => {
    ctx.body = tpl.render('login.html', {
        username: ctx.loginUser.username
    });
});

/**
 * get方式
 */
// router.get('/checklogin', async ctx => {
//     console.log(ctx.request.query);
//     ctx.body = '登陆成功';
// });

/**
 * post方式
 */
router.post('/login', async ctx => {
    // console.log(ctx.request.query);

    /**
     * 如果数据是通过正文提交过来的，那么就不能使用query去获取了
     */
    // console.log(ctx.request.body);

    /**
     * 把用户提交过来的数据拿到数据库中进行验证，如果有该用户，且密码是正确的，那么
     * 表示该用户登陆成功，否则就失败了
     */
    let {username, password} = ctx.request.body;

    if (!username || !password) {
        // ctx.body = '请输入用户名和密码';
        ctx.body = tpl.render('message.html', {
            type: 'error',
            message: '请输入用户名和密码'
        });
        return;
    }

    let sql = "select * from users where username=?";
    let [[user]] = await db.query(sql, [username]);

    if (!user) {
        // ctx.body = '不存在该用户';
        ctx.body = tpl.render('message.html', {
            type: 'error',
            message: '不存在该用户'
        });
        return;
    }

    // console.log(user);
    if (user.password != password) {
        // ctx.body = '密码错误';
        ctx.body = tpl.render('message.html', {
            type: 'error',
            message: '密码错误'
        });
        return;
    }

    ctx.cookies.set('username', user.username);
    ctx.cookies.set('uid', user.id);
    ctx.body = tpl.render('message.html', {
        type: 'success',
        message: '登录成功',
        url: '/'
    });
    
});

/**
 * 退出
 */
router.get('/logout', async ctx => {
    // ctx.cookies.set('username', '', {
    //     maxAge: -1
    // });
    ctx.cookies.set('username', null);
    ctx.body = tpl.render('message.html', {
        type: 'success',
        message: '退出成功',
        url: '/'
    });
});

/**
 * 评论的提交
 */
router.post('/comment', async ctx => {
    let {content} = ctx.request.body;

    if (!ctx.loginUser.uid) {
        ctx.body = {
            code: 100,
            message: '你没有权限进行此操作'
        };
        return;
    }

    if (content == '') {
        ctx.body = {
            code: 1,
            message: '评论内容不能为空'
        };
        return;
    }

    let datetime = Date.now();
    let sql = "insert into comments (uid, username, content, datetime) values (?,?,?,?)";
    let [ results ] = await db.query(sql, [
        ctx.loginUser.uid,
        ctx.loginUser.username,
        content,
        datetime
    ]);

    if (results.insertId) {
        ctx.body = {
            code: 0,
            message: '评论成功',
            data: {
                id: results.insertId,
                uid: ctx.loginUser.uid,
                username: ctx.loginUser.username,
                content,
                datetime
            }
        };
        return;
    } else {
        ctx.body = {
            code: 2,
            message: '评论失败'
        };
        return;
    }


});

app.use( router.routes() );

app.listen(80);