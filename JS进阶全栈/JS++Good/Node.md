c层 controller

m层 model

v层 view



1. web层 controller
2. 业务逻辑层 server层 loginService
3. DAO 数据操作层
4. 持久层 数据库



##### CommonJS node遵循commonJS规范

1. 一个文件是一个模块 拥有单独作用域
2. 普通方式定义的变量，函数，对象，都属于模块内部
3. require方式加载模块
4. exports或module.export 导出模块



node REPL 交互式解释器 read eval print loop 执行代码



文件模块引入,一般不用绝对路径 用相对路径

require(‘./index.js’);

核心模块引入

require(‘fs’)



const {readFile} = require(‘fs’);





require(xxx)代表的是module.exports



所以 module.exports.a = xx;module.exports.b = yy;

可以这样引入 let {a,b} = require(xxx);



module.exports === exports

他俩拿的是相同的引用



> 这里有个坑 最好少用exports 都用module.exports

exports是被module.exports挂过去的 exports=module.exports

但是有个特殊



exports = {a:1} 改写了引用 导致module.exports也没了 会导出空对象

但是exports.a=1 这个不会改写引用 能正常导出



另: module.exports = {a:1} 这个还是可以导出想要的对象 和exports不同





---

###### require引入缓存

let {a} = require(xx);//缓存

let {b} = require(xx);//上一个语句缓存了，不会重复加载



重复加载可采取以下方式



两个文件互相加载 循环依赖 方式如下



只输出已经加载的部分，还未执行的部分就不加载了 所以不会陷入死循环

注意顺序



应当尽量避免这种情况 不要这么写，，比较反人类，容易出错，

==避免循环依赖==



##### require引入方式

require引入包的找的方式

npm包 先找npm包所在的 找

node_module -> chalk -> package.json -> main字段(入口文件,可能是dist)

如果没有main字段就找当前目录的index.js ->还是没有就依次往上找node_module



---



libuv可以编译.node文件 dlopen()



Buffer.from

path模块

fs模块

http http2 https 模块

global模块部分方法