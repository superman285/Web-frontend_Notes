词法分析

语法分析

语义分析



- 词法分析
  1. 关键字识别 var function
  2. 标识符 var a = 1
  3. 分界符 () {} ;
  4. 运算符 + | &&

- 语法分析
  - 语法抽象树 Abstract Syntax Tree 非线性结构
- 语义分析(代码生成)



javascript和node.js 严格来说不是同一种语言



词法分析、语法分析一致；语义分析不一致 node的操作对象是global或浏览器；js的操作对象是浏览器





关系型数据库 mySQL 数据都存磁盘中

NoSQL数据库 redis 数据全在内存中 | mongoDB 部分数据在内存部分数据在磁盘





node适用于 I/O 密集的场景 采用了事件驱动 异步非阻塞I/O模型

I/O 密集 读写密集

CPU密集 





#### NodeJS

2009.3 Ryan Dahl

单线程 无法利用多核CPU 性能浪费

可利用process模块 child_process

主线程 来实现多线程方式





展示层 <=> web层高并发高性能(用node) 前端学习起来曲线平滑 而且又有后端的作用

服务层复杂的业务逻辑 持久层庞大的吞吐量

运维