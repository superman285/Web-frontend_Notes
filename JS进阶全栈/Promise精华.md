##### 同步异步

script标签加载方式为同步阻塞方式，所以一般放在body最后

最新es版本 script标签增加了async属性 可设置为true 则为异步加载

createElement创建script对象加载 为异步非阻塞模式



##### 先记住写法

new Promise(function(resolve,reject){dosomething(异步代码)})

==等价于==

new Promise((resolve,reject)=>{dosomething(异步代码)})



Promise为js内置的构造函数，构造的Promise对象是==专门用于处理异步任务的管理工具==





##### Promise状态

Promise如何管理异步代码？

它为每一个任务都维护了一个内部状态，我们可根据异步代码的执行结果去动态改变Promise的内部状态，从而实现后续代码的调用

(是我们手动改变状态，不是Promise自己维护的，如果我们不去手动改，**永远都是初始状态pending**)

- pending - 初始状态 既非成功 也非失败 在等待
- resolved - 操作成功 通过resolve(xx)方法 之后调用then方法
- rejected - 操作失败 通过reject(yy)方法 之后调用catch方法

resolve和reject函数调用类似事件对象event，需要传入进new Promise的参数中才可调用！

Promise的状态被修改后 就会调用后续的then、catch方法 ss



###### 💡知识点:js内置属性[[prop]] 双方括号

[[PromiseStatus]]和[[PromiseValue]]

均为js内置属性，这种双方括号属性无法直接进行读或写操作，只能通过特定方法来进行读写操作。

特定方法来了:

Promise.resolve(1) 就相当于把promise的status设置为resolved,PromiseValue设为1

想读取PromiseValue只能 Promise.resolve(‘hello’).then(res=>{console.log(res)})

then中才可以打印出‘hello’

==注意==

var er = Promise.reject(‘err2’) 会改变PromiseStatus为rejected和PromiseValue为‘err’

但是会报错 Uncaught (in promise) err2

还是得处理下错误









then中处理返回值方案选择：

1. then中没有异步代码|逻辑处理或不需要向下传值了，我们只需要用then默认返回的promise即可

   默认返回的promise的状态继承自上个promise的状态(new Promise过来的或then过来的)

2. 如果then中有异步代码 或者需要向下传值，我们就需要手动返回new Promise

- 如果只向下传值 简洁地用return Promise.resolve(val)或Promise.reject(val) 即可

- 如果除了传值可能还有更复杂的异步任务和逻辑要处理，就使用

  return new Promise(resolve=>{

  //dosomething;

  resolve(val)

  })



> 几段代码读懂promise特性 https://www.jb51.net/article/119630.htm



##### async和await 很甜的语法糖

await后面是一个Promise对象

等待Promise的状态发生改变(且需要是resolve) 才进行后续操作 await后面的值 会被赋值给‘=’左侧的变量

await不能单独使用，需要在async函数中使用



若可能变为reject，需要将await所在语句放在try catch语句中



try