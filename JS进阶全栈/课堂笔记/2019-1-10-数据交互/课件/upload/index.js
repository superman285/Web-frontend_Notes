const Koa = require('koa');
const koaStaticCache = require('koa-static-cache');
const KoaRouter = require('koa-router');
const multer = require('koa-multer');

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

/**
 * 调用multer得到一个专门用来处理上传文件的中间件对象
 */
// const upload = multer({
//     dest: 'uploads/'
// });


// 普通上传
const storage1 = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        // console.log(file);
        let lastPointPos = file.originalname.lastIndexOf('.');
        let ext = file.originalname.substring(lastPointPos);
        cb(null, file.fieldname + '-' + Date.now() + ext);
    }
});
const upload1 = multer( {
    storage: storage1
} );

router.post('/upload1', upload1.single('file1'), async ctx => {
    ctx.body = '上传成功';
});

// ajax上传
const storage2 = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads2/');
    },
    filename: function (req, file, cb) {
        // console.log(file);
        let lastPointPos = file.originalname.lastIndexOf('.');
        let ext = file.originalname.substring(lastPointPos);
        cb(null, file.fieldname + '-' + Date.now() + ext);
    }
});
const upload2 = multer( {
    storage: storage2
} );
router.post('/upload2', upload2.single('file1'), async ctx => {
    ctx.body = '上传成功';
});


// ajax上传 - 进度
const storage3 = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads3/');
    },
    filename: function (req, file, cb) {
        // console.log(file);
        let lastPointPos = file.originalname.lastIndexOf('.');
        let ext = file.originalname.substring(lastPointPos);
        cb(null, file.fieldname + '-' + Date.now() + ext);
    }
});
const upload3 = multer( {
    storage: storage3
} );
router.post('/upload3', upload3.single('file1'), async ctx => {
    ctx.body = '上传成功';
});


app.use( router.routes() );

app.listen(80);