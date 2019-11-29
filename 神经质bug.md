

git clone https无效 找不到remote

方法 : 换ssh方式clone可能就好了



- invalid “from” address

  连接了错误的web3导致 去掉取当前浏览器的metamask web3的判断



- sender account not recognized 

  ganache连接时报的错，是解锁问题？

  重启下电脑 或者 重新部署合约 重新启动ganache 重连接后立马调用试试



- geth死活连不上remix，重新新建一个目录，里头空空如也，然后打这个指令

  geth --datadir ./data --networkid 15 --port 30303 --rpc --rpcaddr 0.0.0.0 --rpcport 8545 --rpcvhosts "*" --rpcapi 'db,net,eth,web3,personal' --rpccorsdomain '*' --nat "any" --nodiscover --dev --dev.period 1 console 2> 1.log

  就行了，



- 智能合约报错Gas estimation errored 

  可能只是因为你的构造函数没有赋初始值，导致后续无法计算，不要觉得是合约写的有问题





##### solidity和remix

remix的输入框不支持单引号！！ 是json格式，只能用双引号！！



如果用call方法 报错了，如果是500错误即服务器错误，可能是写的格式错误

写为call({},(err,result)=>xxx) 别漏了第一个{}里头可以写来源from



服务器node端 require web3报错的话，试试把node_modules全干掉，重新npm i一下，可能就好了



##### npm这个大坑巨坑



- npm安装报permission denied,mkdirxxxx node-gyp rebuild之类的恶心错误

  带上--unsafe-perm就好了！！

- 加了sudo还各种报权限问题的解决大法：

  https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally

--unsafe-perm



碰到各种 gyp ERR | node-gyp ERR | node-gyp-pre ERR

换用sudo cnpm 有时可以解决



也有可能是系统更新了，xcode和xcode command line tools没更新的缘故？

很烦。。





---



3个方法 哪个能用用哪个。。时灵时不灵



2018的连接方法

remixd --remix-ide http://127.0.0.1

新的连接方法

remixd -s /Users/superman285/Programmer/Solidity/RemixShares --remix-ide https://remix.ethereum.org

2019最新连接方法

直接目录下remix-ide



最麻烦的remixd

remixd连接终极命令

remixd -s /Users/superman285/Programmer/Solidity/RemixShares --remix-ide https://remix.ethereum.org

-s 后为要共享的目录

现在又很舒服了。。2019版本

直接在想共享的目录下，打开控制台，remix-ide，然后可以正常使用remix-ide和remixd了，神奇。。



更换了node版本重装后 又用回最麻烦的方式了。。



Error: listen EADDRINUSE 127.0.0.1:65520 代表有被占用，先关闭占用他的进程



然后再开启访问网站https://remix.ethereum.org 搞定



一旦更新了node.js版本 秒跪。。。



---



这个一定要写一篇博客记录:



https://skr.dog/PrivateOwnWebProject/AdvancedJS/VueFamily/VueResumer/dist/#/



vue项目想预览是无法直接来的，没有index.html

而是通过webpack打包到dist目录生成index.html 包括node_module也打包到了一起



然后访问后发现很多js和css死活404 因为请求路径不对 默认的是‘/’ 所以请求的是skr.dog/js/xxxx和skr.dog/css/xxxxx 要改成请求和dist同级的



然后这时候配置vue.config.js即可 配置完后切记切记 重新打包！！ 

运行npm run build 重新打包 



publicPath: './',





##### hexo相关

文章切记切记切记 不要出现 {{}} 不然一定跪 如果真的有 就丢进代码块里即可



##### webpack相关

如果引入了服务端代码 例如mysql2之类的 然后又要用webpack打包

nodejs内置核心模块不该打包 例如fs net等 配置跳过他

会涉及把node核心模块又打包 会报这个错误

Module not found: Error: Can't resolve 'fs' in

这时候需要这个配置！！

webpack.config.js

externals: {

​    fs: ‘empty’

}

这样就不打包了



但是好像有问题。。

设置构建目标 target node



https://webpack.docschina.org/concepts/targets/#src/components/Sidebar/Sidebar.jsx



还有一招 你不要在入口文件index那儿引入 这些后端js不就完事了呗！



###### web3安装各种失败，没办法 只能package.json强写

```json
"dependencies": {
	"web3":"^1.0.0-beta.46"
}
```



然后全局配置插件再使用

```javascript
new webpack.ProvidePlugin({
    Web3: "web3",
}),
```



##### babel用于webpack

babel-loader和babel/core和babel版本必须配套

安装最新的babel命令有变

https://babel.docschina.org/setup#installation

看这里，不能看老版文档了



##### koa路由&中间件使用

```javascript
const router = require('koa-router')({
    prefix: '/auth'
});
```



切记 前缀prefix 别漏了第一个斜杠/ !!!!!

别漏了第一个斜杠/ !!!!!



koa各种中间件 很多都是koa打头的 和express不能通用 切记切记!!



###### koa-session！！ ❎

如果用的是koa2,要使用koa-session2!!!!! 不能用koa-session 巨坑

没有ctx.session.destroy()方法 

ctx.session = null;或ctx.session = {}即可



###### koa-passport

不能用passport 要用koa-passport!!!!



##### 异步和promise

研究KoaETH-Notes api.js

有时候回调(err,result)解决不了 客户端调api后获取不到服务器给的结果

试试async和await 可能有效哦~



如果koa服务器计算的结果是异步的 

最好在 ctx 前加async ，然后在 计算方法前加await 就会等到 计算完成才将响应体传给前端

学习例子 KoaETH-Notes 的api.js



服务器响应 ctx.body 放在某个promise的then中是无效的 注意api.js 388行处 ctx放在err,result=>后是可以的，

最好放在ctx=>{放这一层里头} 所以就要用到async和await了



##### web3版本

突然更新一个版本就废了 服务器起不来了 服了。。 还有各种0x错误。。。

千万不要用1.0.0-beta.47 

46还是正常的



各种invalid bytes string given:0x 服了。。





==Browserify+babel很好用==

但是browserify 用cnpm安装有超级大坑!!!

害的没法引用web3

碰到can not find module 实在找不到问题 估计就是cnpm的问题!!! 万万没想到

<https://www.linzhihao.cn/archives/3828/>



然后npm安装 碰到各种access问题 找不到文件夹问题 



再来个大招！！

https://www.jsdelivr.com/package/npm/browserify

到这儿直接下载整个完整的目录

然后定位到目录下 npm install (暂时先不用cnpm install了)



然后用cnpm安装好本地或者全局的browserify 然后把下载好并且运行完npm install的整个目录里头的所有内容全部复制覆盖到 cnpm装的那个目录去!!!!!



然后就可以在浏览器的js里头 用import 或者 require了!!!!!



服了!!

