/**
 * 在node中的顶层对象不是window，默认没有window这个对象
 * node中的顶层对象是：global
 * 
 * 每一个文件就是一个模块
 * 每一个模块都有自己的独立作用域
 * 
 * 每个独立的模块都有一个内置的对象 module
 * 这个对象存储和提供与当前模块有关的一些信息
 * 该对象在使用的时候可以省略
 * 
 * 模块的加载通过一个模块内置的方法来实现的
 * 
 * require()
 * 
 * 每一个模块对象下（module）有一个属性exports，默认是一个空对象
 * 该对象就是导出对象，我们可以把一个模块中的局部变量等数据，挂载到该对象下
 * require方法返回的值就是被加载的模块的exports对象
 */

let m2 = require('./2'); // 执行2.js，同时会返回一个值，这个值

let a = 1;

// console.log(m2);

// console.log( module );

// console.log( __dirname );   //当前模块所在的绝对目录
// console.log( __filename );  //当前模块所在的绝对目录以及文件名称