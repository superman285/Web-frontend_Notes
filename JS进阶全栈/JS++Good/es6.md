##### let和块级作用域

{} 花括号为块级作用域

有了它，立即执行函数就不是那么必要了，用花括号就好啦

块级作用域无返回值，立即执行函数至少会返回undefined

let不能提升 暂时性死区 未声明就使用 报错

for(A){B}

A、B是两个不同的块级作用域

相当于

{A

  {B}

}



const 声明时必须赋值,不同的块级作用域可以定义同名const常量。



function foo(A){B} A和B是同一个作用域



let x=1;

function foo(x=x){console.log(x)} //打印啥 tdz 暂时性死区



##### 解构赋值

模式匹配，等号两边解构相等

let [a,[b,c]] = [1,[2,3]]

注意: 右边的值比左边的变量多，不完全解构



let [x=1,y=x] = []; //x和y 输出1和1 默认值结合解构



对象解构 和顺序无关 因为对象的键是无序的

let {a,c,b} = {a:1,b:2,c:3}



let obj;
{obj} = {obj:1} //报错 可改进为下

({obj}={obj:1}) //搞定 引擎不会以为他是函数了，加上括号，把他视为对象



##### this

1.默认绑定规则 指向window或global

2.隐式绑定规则，谁调用 this指谁 (fn()相当于window调用;xx.fn()相当于xx调用,this指向xx)

3.显示绑定规则，call/apply |bind

  显示指定了this

  call(obj,a,b) apply(obj,[a,b]) bind(this,a,b)

4.new, this指向了new出来的实例 new最大 优先级最高

new>显示绑定>隐式绑定>默认绑定



==注意==

箭头函数的this指向是固化的，this指向继承自父作用域的this

所以箭头函数 用call apply bind 可能是绑定不成功的

切记注意，箭头函数本身并不存在this指向，



##### 对象拓展运算符 ...

spread(展开) rest(收集) 两个功能

function fn(a,b,c,d){console.log(arguments);}

fn(...[1,2,3,4])相当于 fn(1,2,3,4) 展开 将[1,2,3,4]展开为1,2,3,4



function fn(a,b,...c){console.log(a,b,c)}

fn(1,2,3,4,5) 打印出 1,2,[3,4,5] 收集 将3,4,5收集为[3,4,5]



将类数组改为真数组 ...

let newArguments = [...arguments]



##### 伪数组改造为真数组方法

很多js获取到的内容为伪数组，例如arguments、HTMLCollection、NodeList等

Array.prototype.slice.call(arguments|HTMLCollection|NodeList)返回一个真数组

即可改造成功,相当于获取到伪数组中所有带数字索引的项 

相当于xxxxx.slice.call(arg,0)



更绝的方法:

var arr = [...NodeList|HTMLCollection|arguments] 可以试试 记得加[]

或var arr = Array.from(arguments)



##### Object.is 更准确的全等

Object.is(+0,-0) false  | ===比较为true

Object.is(NaN,NaN) true | ===比较为false



##### 对象属性描述

defineProperty

let obj = {a:1}

Object.defineProperty(obj,‘a’,{

  value:1,

  writable:false, //可写

  enumerable:true, //可枚举性 例如一些方法for...in obj|Object.keys(obj)

  configurable:true, //可配置(例如删除，或者用defineProperty改其他配置项)

})

delete obj.a

defineProperty中可以写getter和setter

Object.defineProperty(obj,‘b’,{

​    get(){return 4}

})



##### 对象的getter和setter

会覆盖掉原本的纯取值和赋值操作

```javascript
var obj = {
    get a(){
        return 2;
    }
    set current(name){
        this.log.push(name)
    }
	log: []
}
```

obj.current = ‘EN’;

obj.current = ‘CH’;

console.log(obj.log)

即使写了obj.a = 3 但是 访问时 obj.a还是得到2





##### babel

babel index.js -o bundle.js

打包index.js 输出 bundle.js



这个bundle 就是新的es版本js的 具体实现 ，技巧 看源码了解实现过程

降级成es5语法



##### Symbol

Symbol不是构造函数 不可new Symbol()

var sb1 = Symbol(); var sb2 = Symbol(“foo”);



迭代器 iterator

数组类型上有 迭代器接口 Symbol.iterator

var arr = [1,2,3]

var iter = arr\[Symbol.iterator]()

iter.next() 输出对象{value: ,done: ,} 不断调next相当于一项一项输出

value是读到的值 done表示遍历是否结束 像[1,2,3] 需要next3次 第3次 {value:3,done:false}

第4次 {value:undefined,done:true}





##### for...of... 

调用的iterator

部署过迭代器接口(Symbol.iterator)的数据类型 例如数组 对象无迭代器接口 因为无序

部署了迭代器接口的类型 map,set,array,string,arguments等类数组

for(let value of arr) 循环数组值

forof无法迭代对象，想迭代的话 给对象加上迭代接口 手动部署Symbol.iterator

obj = {

start: [1,2,3,4],

end: [5,6,7,8],

//记得要加[] 因为是string

​    [Symbol.iterator]\(){

​        let index = 0,

​        arr = [...this.start,...this.end],

​        len = arr.length;

​	return {

​	    next(){

​		if(index<len){

​		    return {

​		        value: arr[index++],

​			done: false

​		    }

​		}else {

​		    value: undefined,

​		    done: true

​		}

​            }

​	}

​    }

}





for...in...可循环对象

for(let index in arr) 循环数组索引