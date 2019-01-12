##### 模板引擎

\`我的天我是${god}\`   god为变量





##### 解构赋值

用于数组或对象，等号左边一个变量时默认取等号右边数组或对象中的第一个

var [[a]] =  [[1],2] //a=1 ,等同于 写法[[a],]

var {x} = {x:1,y:2} //x=1 对象无序,不同于数组,没有占位符写法,对应上属性名即可



var [a] = [[1],2] //a=[1]

var [,a] = [[1],2] //a=2

var {,y} = {x:1,y:2} //报错

var {y} = {x:1,y:2} //y=2



##### forEach循环

arr.forEach(val=>{//do something}) 循环的结果是值而非索引



💡tips: 遍历对象

```javascript
var obj = {'0':'a','1':'b','2':'c'};

Object.keys(obj).forEach(key=>{console.log(key,obj[key])})
```



##### 各种循环

forEach 用于数组,不可直接用于对象/字符串

arr.forEach((value,index)=>{}) 函数中的参数第一个为值，第二个为索引



for...in... 取到的是索引 可用于数组/字符串，==可直接用于对象==

for(let index in arr){console.log(index)}



for...of... 取到的是值 可用于数组/字符串，不直接用于对象

for(let val of str){console.log(val)}



不能直接作用于对象，但是对象有返回数组的方法呀，返回key或value的数组

Object.keys(obj) | Object.values(obj)



然后再对这俩数组使用for即可



for...of... 是比较新的方法



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



还有附送的findIndex方法



##### import和export





##### 箭头函数

是匿名的

一个参数,有返回值时的简写

name=>result

注意💡

返回值为对象时，如果不写return，要加个小括号以区分

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



Set构造函数返回一个对象，且key不重复

Array.from将类数组对象、可迭代对象转为数组



##### Array.of

以前有个坑

var arr = new Array(4) | 与 Array(4) 含义一模一样

讲道理 应该生成[4]，结果生成[empty✖️4]

所以多了Array.of



var arr = Array.of(4) //终于生成 [4]了

此处不能用new 因为Array.of不是构造函数