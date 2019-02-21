其实算一个后端项目



如果真正项目，可以前后端分离



前端用vue搭建一个项目目录 所有前端功能

后端用koa搭建一个项目目录 后端api处理等功能



全栈项目的目录结构可以这样，先用vue create创建好vue项目

然后用koa-generator创建好koa项目

然后在vue项目中新建server目录，把koa项目下的内容塞进来



##### 搭建项目框架

使用koa-generator；命令koa2 newProject 默认3000端口

目录结构

- bin
- public
- routes
- views
- node_moudles
- app.js
- packge.json

最好引入webpack，打包到dist目录 很多新语法和sass需要webpack支持比较好

或者sass得用koa编译成css

可来个src目录放源码



##### 引入第三方模块方法!!

```javascript
import NProgress from "nprogress";
import 'nprogress/nprogress.css';
```



如果直接引入不生效，就加上对象名 from 模块

如果没有样式，考虑引入css样式 切记



##### 进度条使用

在点击某个按钮触发的方法最开头 NProgress.start()

在ajax的success或done方法 中NProgress.done()

或者在await方法获取异步结果的语句之后 NProgress.done()



##### 重要项目Koa-Notes AdvancedJS目录下

1. koa-generator 服务端应用生成器

   views router public src等重要目录结构

2. koa-session的使用，passport-github2，做登录验证

3. koa-bodyparser,想用ctx.request.body需要这个中间件

4. 请求发送后，必须要ctx.response.body(xxxx) 才算有响应，否则404





##### 反向代理 & 部署项目

内网映射到外网

使用花生壳

内网服务器使用192.168.0.119:8081 而不是127.0.0.1



将本机作为服务器来访问

在本机上运行项目npm run start 相当于在3000端口启动了服务器 然后打开数据库



这时候输入花生壳产生的域名 就可以访问了

相当于将域名映射到了 本地的127.0.0.1:3000 成功开启项目 



成功访问！ 注意github passport的处理 不同的访问地址(本地，云服务器，花生壳等)对应不同passport的

clientID和clientSecret



在腾讯云服务器上，mysql注意事项见mysql笔记

注意要用pm2或supervisor守护 node进程 否则登出云服务器后 服务就停掉了

mysqld自带守护



##### 服务器端响应

如果是404 可能是服务器端没响应

ctx.response.body = xxx 需要设置

如果是500 可能是服务器端哪儿写错了 服务器错误



##### 异步和promise

研究KoaETH-Notes api.js

有时候回调(err,result)解决不了 客户端调api后获取不到服务器给的结果

试试async和await 可能有效哦~



如果koa服务器计算的结果是异步的 

最好在 ctx 前加async ，然后在 计算方法前加await 就会等到 计算完成才将响应体传给前端

学习例子 KoaETH-Notes 的api.js



服务器响应 ctx.body 放在某个promise的then中是无效的 注意api.js 388行处 ctx放在err,result=>后是可以的，

最好放在ctx=>{放这一层里头} 所以就要用到async和await了



##### get请求体与post请求体

一般get 与request param 请求参数配合使用 ctx.request.query 

因为可能取不到ctx.request.body



post与requestbody 配合使用



💡 踩坑：

jquery的ajax 发get请求，的第二个参数或者data对象中

发给服务器的是querystring查询参数 而不是请求体！！！

所以并不能查到 ctx.request.body 



同axios的params参数 对象中 params 发查询参数



##### 守护进程

forever npm包

forever start bin/www 即可断掉ssh 进程仍然在

forever stop bin/www 停止即可



##### 前端模块

瀑布流的实现

大致了解 然后借用插件吧？

Masonry.js库 超神 超级好用



note.js的实现 用class改写



##### 后端模块 后端路由 api约定

1. 获取所有笔记 /api/notes  GET req:{} res:{status:0,data:[]|} {status:1,errMsg:失败原因}
2. 个人页面 /user  /api/getInfo GET req
3. 创建一个note: /api/note/create POST req 参数{noteValue: ‘helloworld’} res同上
4. 修改一个note: POST /api/note/edit POST 参数 req{noteValue: ‘new note’,id: 100} 
5. 删除一个note: POST /api/note/delete  req 参数{id:100} 





app.use(‘/api’,api) 单独一个文件来处理这些路由 

router.get(‘/notes’,(ctx,next)=>{})



router.post(‘/note/create’)



router.post(‘/note/edit’)



router.post(‘/note/delete’)





#### 区块链部分

本地私链版记得启动ganache 部署好的合约想查看

可以用remix的at功能 超级好用







##### 地址转整数

以太坊中的 uint(addr)

在js中相当于把十六进制转为十进制，等同于

Number(addr)或 parseInt(addr)



##### 生成交易后查看输入的内容

每次修改状态变量生成交易remix会提供一个地址查看 etherscan

https://rinkeby.etherscan.io/tx/0xd5b5a83b20f3857db8a207fc6e41b1fbd32050d46ca34726cf43b776453e50d7

在页面的Input Data选项，可以看到修改便签的内容，所以这个相当于去中心化的内容，所有人可查

选择View Input As UTF-8 则可以看到内容了

input data前半部分乱码，后半部分为输入的参数内容



##### 前端与后端调用web3

==正式线上(测试链或公链)：==

前端(浏览器端)

可以使用metamask的provider 有交易的手动确认功能 web3直接调用合约方法即可

测试链可连接 rinkeby或rospten 有人挖矿



后端

自己用geth打一堆命令连接可以 不过麻烦 参数多 容易错 

可用神器 infura节点 不过infura节点是去中心化的 需要自己输入私钥来签署交易

所以在web3调用合约方法时 需要提供私钥 去签名交易 要写更多的方法



==本地自己测试：==

前端后端均可使用 ganache启动的7545私链节点 

Web3.providers.HttpProvider("http://127.0.0.1:7545")

调合约方法时直接调用即可，因为账户ganache是开发者账户 自动挖矿 交易无需确认



##### truffle-hdwallet-provider

配合infura使用，由于infura需要自己提供私钥来签名交易





每次涉及方法调用都要写一大堆代码 所以可以用库 简化操作

https://github.com/trufflesuite/truffle-hdwallet-provider

koa便签死活调不通 暂时放弃，以后的项目再尝试使用truffle-hdwallet-provider

不知是否异步关系太复杂 用不了它



自己写需要用到ethereumjs-tx

自己原生写的话，需要配置很多项 还容易错 

https://www.jianshu.com/p/496c9d833df9

https://www.jianshu.com/p/3732f39b5638 好文 带参数的怎么调用

rawTx的to为合约地址，data为合约方法的16进制数，在remix的input中看

是那一大串字符里头取前4字节，即8个16进制位，前8位组成(加上0x就10位了)

写data时 包含‘0x’



所有博文都是这个老方法 sendRawTransaction 晕

1.0已经是这个了啊sendSignedTransaction



两个能用的值，记录下

```javascript
gasPrice: '0x77359400',
gasLimit: '0x295f05',
```



调合约方法代码段 但是未成功不知道啥原因

```javascript
lib: ethereumjs-tx | ethereumjs-abi

var nonce = Number(web3.eth.getTransactionCount(contractFounder));

var paramsData = ethABI.rawEncode(["uint","string"], [noteid,note]).toString('hex');
var rawTx = {
    from: contractFounder,	//发起人外部账户地址
    // nonce: web3.utils.toHex(count),
    nonce: web3.utils.toHex(count),	//曾经发起过的交易数量 因为nonce从0开始
    gasPrice: '0x97359400',
    gasLimit: '0x495f05',
    to: contractAddr,	//合约地址
    value: "0x0",	//转入的eth数量
    //data: "0xa4edff47"+paramsData,
    data: "0x49781ef9"+paramsData,  //input看到的函数名16进制 + 函数参数换算成的16进制数
}

var tx = new Tx(rawTx);
tx.sign(privateKey);
var serializedTx = tx.serialize();

await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex'), (err, hash)=> {
            if (!err){
                console.log('!@#$%^&*我的天终于成功了',hash);
                ctx.response.body = {status: 0};
                updateRes = {
                    success: true,
                    res: hash,
                };
                //ctx.response.body = {status: 0, result: updateRes};
                console.log('来，打印出ctx.body', ctx.body);
            }else{
                console.log(err);
                updateRes = {
                    success: false,
                    res: err,
                };
                ctx.response.body = {status: 4, result: updateRes, errorMsg: "Failed to update Note!"}
            }
        }).on('receipt', res=>{
            console.log('真正成功',res);
            updateRes = {
                success: true,
                res: hash,
            };
            ctx.response.body = {status: 0, result: updateRes};
        });
```











##### 判私钥或助记词方法

```javascript
bip39.validateMnemonic(mnemonic)
```

判断是否是助记词格式



1. 判是否私钥

   web3.utils.isHex(str)&&str.length==‘64’&&str.substring(0,2)!=‘0x’&&str.substring(0,2)!=‘0X’

2. 判是否助记词

   bip39.validateMnemonic(str)



##### ether.js

终于成功了 我的天。。！！  后端给区块链发交易 果然慢

还是用前端发比较快



切记 ether.js创建的合约实例 不要和web3的合约实例混淆了 

调用合约方法后 一定要 await tx.wait() 默认不写参数为等待1个确认? 

可以加参数 await tx.wait(2) 等待两个确认



很好的一个库



https://docs.ethers.io/ethers.js/html/api-contract.html#connecting



https://docs.ethers.io/ethers.js/html/cookbook-contracts.html



很多超好用工具



1. 通过私钥推出地址

2. 生成随机数uint8数组

   ethers.utils.randomBytes(length) length为数组元素个数