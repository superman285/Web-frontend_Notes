##### 先记一下写法

new Promise(function(resolve,reject){resolve() **或者** reject()})

同

new Promise((resolve,reject)=>{resolve() **或者** reject()})









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





##### async和await 很甜的语法糖

await后面是一个Promise对象

等待Promise的状态发生改变(且需要是resolve) 才进行后续操作 await后面的值 会被赋值给‘=’左侧的变量

await不能单独使用，需要在async函数中使用



若可能变为reject，需要将await所在语句放在try catch语句中



try