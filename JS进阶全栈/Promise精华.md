##### 先记住写法

new Promise(function(resolve,reject){resolve() **或者** reject()})

==等价于==

new Promise((resolve,reject)=>{resolve() **或者** reject()})



###### 知识点:js内置属性[[prop]] 双方括号

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