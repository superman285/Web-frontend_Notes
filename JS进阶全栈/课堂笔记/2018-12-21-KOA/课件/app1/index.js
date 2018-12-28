/**
 * 加载koa
 */
const Koa = require('koa');

/**
 * 实例化Koa对象 => 包装过的http对象
 */
const app = new Koa();

// app.use( function(ctx) {
//     ctx.body = 'Hello';
// } );

app.use( ctx => {
    ctx.body = 'Hello';
} );

/**
 * 监听指定端口和ip
 *  ip是默认的0.0.0.0
 */
app.listen(80 /*, '0.0.0.0'*/);