# JavaScript标准参考教程



## 第一章



JS宿主环境 最常见的

- 浏览器
- 服务器环境如node



==JavaScript核心语法== 只有两部份

- 基本的语法构造(操作符、控制结构、语句等)
- 标准库(一系列具有各种功能的对象比如`Array`、`Date`、`Math`等）

除此之外，有宿主环境提供的API

==浏览器提供的API==

- 浏览器控制类:操作浏览器
- DOM类：操作网页各种元素
- Web类：实现互联网各种功能



==服务器环境提供的API==

- 文件操作API
- 网络通信API
- 等等





## 第二章



### 变量



js区分大小写变量名



undefined “未定义” var声明但不赋值



==JS是动态类型语言==

变量的类型没有限制，可以随时更改类型，例如：

var a = 1;

a = ‘hello’;



> **用var重新声明一个已存在的变量是无效的**，例如：

var x = 1;

var x; //此句无效，等于没写，x等于1



#### 变量提升(hoisting)

> JavaScript 引擎的工作方式是，先解析代码，获取所有被声明的变量，然后再一行一行地运行。这造成的结果，就是所有的变量的声明语句，都会被提升到代码的头部。



```js
console.log(a);
var a = 1;
//等同于以下,输出undefined
var a;
console.log(a);
a = 1; 
```



### 标识符

==标识符（identifier）指的是用来识别各种值的合法名称。==

第一个字符：任意Unicode字母(英文和其他语言字母)，以及`$`和`_`

第二个字符以及后面字符，除了可用Unicode字母、美元符、下划线，还可用数字

一些保留字(关键字)不能用作标识符，例如for、true、class、case、yield、super等。



**以下合法标识符**

π arg0 _tmp $elem 临时变量 



**以下是不合法标识符**

```js
1a  // 第一个字符不能是数字
23  // 同上
***  // 标识符不能包含星号
a+b  // 标识符不能包含加号
-d  // 标识符不能包含减号或连词线
```



### 注释

`//`和`/* */`

此外，由于历史上 JavaScript 可以兼容 HTML 代码的注释，所以`<!--`和`-->`也被视为合法的单行注释。

例如：以下三种写法都是注释

- \<!-- x= 2;
- --\> x = 3;
- \<!-- x= 4;--\>



n --> 0 相当于 n-- > 0 (一个判断语句，先判断是否大于0，再做减减操作)



### 条件语句



#### if结构和if...else...结构

```js
var x = 1;
var y = 2;
if (x = y) {
  console.log(x);
}
// "2"
```

实际含义：将`y`赋值给变量`x`，再判断变量`x`的值（等于2）的布尔值（结果为`true`）。

如果碰上下面这个例子：

```js
var x = 1;
var y = "";
if (x = y) {
  console.log(x);
}else{
  console.log('i win')
}
```

想一想，结果会打印出什么呢？动手在浏览器试试吧。



==`else`代码块总是与离自己最近的那个`if`语句配对。==

```js
var m = 1;
var n = 2;

if (m !== 1)
if (n === 2) console.log('hello');
else console.log('world');
```

上面代码不会有任何输出，`else`代码块不会得到执行，因为它跟着的是最近的那个`if`语句，相当于下面这样。

```js
if (m !== 1) {
  if (n === 2) {
    console.log('hello');	
  } else {
    console.log('world');
  }
}
```

💡 所以一般不这么写有点令人费解的语句。



#### switch结构

💡 **每个case之后都要加上break，否则会发生穿透，一路走到底(走到加了break的语句)**

`default:` 如果是最后一个语句，那可以不加break

而且，swicth语句中的case用的是严格的“===”(严格相等运算符)判断，也会判断类型。



💡 switch(x) {case y:} x和y还可以是表达式

例如这么写： 

switch(true){

  case 1>0 : xxxx;break;  //执行这一句

  case 1<0 : yyyy;break;

} 

这么写：

switch(1 < 0){

  case true : xxxx;break;

  case false : yyyy;break;  //执行这一句

}



#### 三元运算符 ?:

(条件) ? 表达式1 : 表达式2

上面代码中，如果“条件”为`true`，则返回“表达式1”的值，否则返回“表达式2”的值。

```js
var even = (n % 2 === 0) ? true : false;
```

上面代码中，如果`n`可以被2整除，则`even`等于`true`，否则等于`false`。它等同于下面的形式。

```js
var even;
if (n % 2 === 0) {
  even = true;
} else {
  even = false;
}
```



三元运算符可以被视为`if...else...`的简写形式，因此可以用于多种场合。





### 循环语句

#### for循环

`for`语句的三个部分（initialize、test、increment），可以省略任何一个，也可以全部省略。

for( ; ; ){console.log(‘无限循环’)}  全部省略，无限循环。



#### do...while循环

```js
do
  语句
while (条件);
```

与`while`循环类似，唯一的区别就是先运行一次循环体，然后判断循环条件。



#### break语句和continue语句

`break`语句用于跳出代码块或循环。

`continue`语句用于立即终止本轮循环，返回循环结构的头部，开始下一轮循环。



💡 这两个关键字是==针对本层循环==而言

