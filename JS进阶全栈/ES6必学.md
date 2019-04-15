##### class类

类中默认自带constructor

`constructor`方法默认返回实例对象（即`this`），完全可以指定返回另外一个对象。



实例属性写法 以下两种写法等价

class A {

​    prop1 = 1;

constructor(){

​    this.prop2 = 2;

}

}

静态属性 两种写法 static目前能用不？

- class A{static pro = 1;} 好像用不了
- 类外面 A.pro = 1; 可用



类的私有属性 属性前加# 好像用不了



##### 模板字符串

\`我的天我是${god}\`   god为变量





##### 解构赋值

用于数组或对象，等号左边一个变量时默认取等号右边数组或对象中的第一个

var [[a]] =  [[1],2] //a=1 ,等同于 写法[[a],]

var {x} = {x:1,y:2} //x=1 对象无序,不同于数组,没有占位符写法,对应上属性名即可



var [a] = [[1],2] //a=[1]

var [,a] = [[1],2] //a=2

var {,y} = {x:1,y:2} //报错

var {y} = {x:1,y:2} //y=2



##### 对象的增强

- 对象中的属性简写
- 对象中的方法简写
- 对象属性名可使用表达式 e.g. obj[‘my’+‘name’]

简写举🌰

```javascript
let name = 'miaomiao'
var obj = {
    name,	//相当于name:name
    getName(){console.log(this.name)}
    //相当于
    //getName: function(){console.log(this.name)}
    //或getName: function getName(){console.log(this.name)}
}
```



###### 对象展开运算符...

...obj 相当于把obj展开 去掉花括号 => a:1,b:2

var obj = {a:1,b:2}



let a={x:1,y:2};
let b={z:3};
let ab={...a,...b};
ab //{x:1,y:2,z:3}



一个很容易懵的操作

...func({xxx})

func是函数名 意思是拿到func({xxx})的执行结果返回值 再用...展开!



超级详细解读:

https://segmentfault.com/a/1190000016571785



##### forEach循环 (其实是es5的)

arr.forEach(val=>{//do something}) 循环的结果是值而非索引



💡tips: 遍历对象

```javascript
var obj = {'0':'a','1':'b','2':'c'};

Object.keys(obj).forEach(key=>{console.log(key,obj[key])})
```



##### forEach引申出的 数组和遍历相关的方法

forEach map filter find findIndex

some every



==共同点==

五个方法均把函数作为参数，然后这个函数的第一个param为元素值，第二个param为元素索引

arr.method((value,index)=>{});



map return+处理语句

其他 return+判断语句



==差异点==

forEach无返回值 一般是根据需要进行循环操作 其他四项均有返回值

map的函数 return后的语句作为返回值塞入新结果数组中 生成新数组

filter的函数 return后的语句作为判断条件 满足条件的原数组元素 塞入新结果数组中

find的函数 return后的语句作为判断条件 满足条件的原数组第一个元素 为新返回结果

findIndex的函数 return后的语句作为判断条件 满足条件的原数组第一个元素的索引 为新返回结果



some和every return后跟的是判断条件 返回值是true或false 

every需要数组每个值都满足条件

some需要数组中至少一个值满足条件



**举个**🌰

```javascript
var arr = [1,2,3,4,5]
var nr1 = arr.forEach((x,y)=>{return x+y}) //nr1 = undefined

var nr2 = arr.map((x,y)=>{return x+y}) // nr2 = [1,3,5,7,9]
var nr2_2 = arr.map((x,y)=>{return x>2}) //nr2_2 = [false,false,true,true,true] 把x>2的判断结果布尔值塞进了新结果数组

var nr3 = arr.filter((x,y)=>{return x+y}) // nr3 = [1,2,3,4,5] x+y这个语句肯定是真 全都满足
var nr3_2 = arr.map((x,y)=>{return x>2}) // nr3_2 = [3,4,5] 只有3、4、5满足x>2为true

var nr4 = arr.find((x,y)=>{return x+y}) //nr4 = 1 x+y这个语句肯定是真 全都满足 取第一个为1
var nr4_2 = arr.find((x,y)=>{return x>2}) //nr4_2 = 3 只有3、4、5满足，取第一个为3

var nr5 = arr.findIndex((x,y)=>{return x+y}) //nr5 = 0 x+y这个语句肯定是真 全都满足 取第一个的索引
var nr5_2 = arr.findIndex((x,y)=>{return x>2}) //nr5_2 = 2 只有3、4、5满足，取第三个的索引
```







##### 各种循环

forEach 用于数组,不可直接用于对象/字符串

arr.forEach((value,index)=>{}) 函数中的参数第一个为值，第二个为索引



for...in... 取到的是索引 可用于数组/字符串，==可直接用于对象==

for(let index in arr){console.log(index)}

vue中的for in取到的是值



for...of... 取到的是值 可用于数组/字符串，不直接用于对象 只能作用于实现了迭代器的 [Symbol.iterator]

for(let val of str){console.log(val)}



不能直接作用于对象，但是对象有返回数组的方法呀，返回key或value的数组

Object.keys(obj) | Object.values(obj) Object.entries(obj)



然后再对这俩数组使用for即可



for...of... 是比较新的es6方法



##### Object.assign

Object.assign(目标对象,源对象1,源对象2...)

把源对象塞进目标对象中，key不同名则添加，有同名key则覆盖，后面的覆盖前面的



有一个黑科技用法



Object.assign({},源1,源2...)



##### find方法

返回==符合判断条件的第一个==数组元素的值,只返回一个

```javascript
var arr = [1,2,3,4,5,6,7];
var ar = arr.find(function(elem){
    return elem>5;
 });
//更优美的写法
var ar = arr.find(elem=>elem>5)
//同样结果的 var ar = arr.find(elem=>elem==5)
 console.log(ar);//6 ,注意是6 而不是true 找不到则返回undefined
```



还有附送的findIndex方法 返回的第一个符合判断条件的元素的索引



注意💡

符合判断条件的第一个是从左到右开始判断 即从索引0开始



##### 伪数组改造为真数组方法

很多js获取到的内容为伪数组，例如arguments、HTMLCollection、NodeList等

Array.prototype.slice.call(arguments|HTMLCollection|NodeList)返回一个真数组

即可改造成功,相当于获取到伪数组中所有带数字索引的项 

相当于xxxxx.slice.call(arg,0)



更绝的方法:

var arr = [...NodeList|HTMLCollection|arguments] 可以试试 记得加[]

或var arr = Array.from(arguments)



##### import和export

import {A} from ‘./xxx’

import C from ‘./yyy’



export {A,B} 或 export default C



##### 箭头函数

是匿名的

一个参数,有返回值时的简写

name=>result

**注意💡**

返回值为对象时，如果不写return，要加个小括号以区分

因为花括号一般指函数体开始和函数体结束，加个括号相当于转义，说明这个是对象而不是函数体



以下两种写法是一样的

```javascript
name => ( { 'user' : name } );
name => {return { 'user' : name } };
```



对象中定义方法

data(){return {user:name}}

data: ()=>({user:name})

data: ()=>{return {user:name}}

==这几种写法是一样的==





##### set 键不重复

超速去重



let newArr = Array.from(new Set(oldArr));



let newArr = [...new Set(oldArr)]



Set构造函数返回一个对象，且key不重复

Array.from将类数组对象、可迭代对象转为数组



##### Array.of

以前有个坑

var arr = new Array(4) | 与 Array(4) 含义一模一样

讲道理 应该生成[4]，结果生成[empty✖️4]

所以多了Array.of



var arr = Array.of(4) //终于生成 [4]了

此处不能用new 因为Array.of不是构造函数