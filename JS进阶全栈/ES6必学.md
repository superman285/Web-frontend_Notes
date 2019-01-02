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
 console.log(ar);//6 ,注意是6 而不是true
```





##### import和export





##### 箭头函数

返回值为对象时，如果不写return，要加个小括号以区分

以下两种写法是一样的

```javascript
name => ( { 'user' : name } );
name => {return { 'user' : name } };
```



data(){return {user:name}}

data: ()=>({user:name})

data: ()=>{return {user:name}}

==这几种写法是一样的==