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

> ### 基本语法



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



---



> ### 数据类型



==6种数据类型==

- 数值number
- 字符串string
- 布尔值boolean
- `undefined`： 表示“未定义”或不存在，即由于目前没有定义，所以此处暂时没有任何值。
- `null`： 表示空值，即此处的值为空。
- 对象object： 各种值组成的集合。

第7种类型`symbol`，为ES6新增类型。



💡 number|string|boolean 原始类型，无法再细分

💡 object 合成类型(complex type),往往是多个原始类型的值的合成，可以看成是一个存放各种值的容器。



> **确定值类型的三种方法**
>
> - `typeof`运算符
> - `instanceof`运算符
> - `Object.prototype.toString`方法



typeof的取值有以下：都是小写的，要和instanceof区分开来。

> “number”、“string”、“boolean”、“object”、“undefined”、“function”和新的“symbol”



💡 打醒精神：

```js
typeof window // "object"
typeof {} // "object"
typeof [] // "object"

var o = {};
var a = [];
o instanceof Array // false
a instanceof Array // true
```

typeof这儿，数组也是object类型，



typeof null //输出的竟然不是‘null’而是‘object’,历史原因，因为95年第一版时没有null类型，为了兼容以前代码，就一直没更改。



typeof不够精确，所以有了instanceof。



type of object //错误用法，并不是查看object类型是不是object类型，object在这儿就是一个未被声明的字符串



==number类型解读==

- 普通数值
- NaN (not a number) e.g  0/0 | Math.sqrt(-4) 负数开平方
- Infinity e.g 1/0 1.5/0  -1/0 (为-Infinity) 非零数除以0 视为无穷



==**null和undefined解读**==

null表示空值，即该处的值现在为空。

undefined表示“未定义”。



以下情况都是undefined典型场景

```js
// 变量声明了，但没有赋值
var i;
i // undefined

// 调用函数时，应该提供的参数没有提供，该参数等于 undefined
function f(x) {
  return x;
}
f() // undefined

// 对象没有赋值的属性
var  o = new Object();
o.p // undefined

// 函数没有返回值时，默认返回 undefined
function f() {}
f() // undefined
```

函数没有返回值，默认返回undefined，可以解释在浏览器控制台时，为什么总是出现undefined了。(?对么)



==**布尔值**==

最常用的，if(xxx),xxx什么时候为真，什么时候为假呢？

转换规则:

- `undefined`
- `null`
- `false`
- `0`
- `NaN` （not a number 不是一个数字）
- `""`或`'' `（空字符串）

以上==6个值==都被转为`false`，其他的值都是`true`。

注意：空值是false，但是空数组[]和空对象{}对应的都是true



---



### 数据类型转换

```js
var x = y ? 1 : 'a';
```

独自解读一下这句话(然后到http://javascript.ruanyifeng.com/grammar/conversion.html看下是否正确)



> 强制转换：Number() | String() | Boolean()

#### **Number()转换返回值: 数值 | NaN | 0**  

⌛思考下：[]/{}/[5]/null/undefined 分别转换成什么

```javascript
// 数值：转换后还是原来的值
Number(324) // 324
Number([5]) // 5
// 字符串：如果可以被解析为数值，则转换为相应的数值
Number('324') // 324

// 字符串：如果不可以被解析为数值，返回 NaN
Number('324abc') // NaN

// 空字符串转为0
Number('') // 0

// 布尔值：true 转成 1，false 转成 0
Number(true) // 1
Number(false) // 0

// undefined或对象object(除包含单数值的数组)或函数：转成 NaN
Number(undefined) // NaN
Number({}) //NaN 空对象
Number({a: 1}) // NaN
Number([1, 2, 3]) // NaN
Number([5]) // 5

// null：转成0 | 空数组：转成0
Number(null) // 0
Number([])
```

Number()比parseInt()严格:

```js
parseInt('42 cats') // 42
Number('42 cats') // NaN
```



#### **String() 返回值：字符串(带引号)**

⌛思考：[]、{}、null、undefined、false、[1,2,3]

```js
String(123) // "123"
String('abc') // "abc"
String(true) // "true"
String(undefined) // "undefined"
String(null) // "null"

//转换对象
String({}) //[object Object]
String({x:1,y:2})

//转换数组
String([1,2,3]) // "1,2,3"
```



#### **Boolean() 返回值：false | true**

⌛思考：Boolean()、Boolean({})、Boolean([])、Boolean(0/0)、Boolean(-4/0)、Boolean(false)、

​       Boolean(new Boolean(false))

> 转换规则：除了以下五个值的转换结果为`false`，其他的值全部转换为`true`。
>
> - `undefined`
> - `null`
> - `-0`或`+0`
> - `NaN`
> - `''`（空字符串）

`附:` if(xxx)其实就是if(Boolean())，判断if句式中条件的真假即可。



转换实例：

```js
Boolean(undefined) // false
Boolean(null) // false
Boolean(0) // false
Boolean(NaN) // false
Boolean('') // false

//对象的转换
Boolean({}) // true
Boolean([]) // true
Boolean(new Boolean(false)) // true
```



#### 自动转换

自动转换以强制转换为基础，转换自动完成，用户不可见。



==有以下三种情况==

1. 不同类型的数据互相运算。
2. 对非布尔值类型的数据求布尔值。
3. 对非数值类型的值使用一元运算符（即`+`和`-`）。



**规则**

预期什么类型的值，就调用该类型的转换函数。比如，某个位置预期为字符串，就调用`String`函数进行转换。

> ##### 特别注意
>
> ###### **如果该位置既可以是字符串，也可能是数值，那么默认转为数值。**



由于自动转换具有不确定性，而且不易排除错误，建议在预期为布尔值、数值、字符串的地方，全部使用`Boolean`、`Number`和`String`函数进行显式转换。



###### 自动转换为布尔值

```js
if ( !undefined
  && !null
  && !0
  && !NaN
  && !''
) {
  console.log('true');
} //
```

转换为布尔值除了Boolean()以外的另外两种写法：

```js
// 写法一
expression ? true : false

// 写法二
!! expression
```

实际内部调用也是Boolean()



###### 自动转换为字符串

```js
'5' + 1 // '51'
'5' + true // "5true"
'5' + false // "5false"
'5' + {} // "5[object Object]"
'5' + [] // "5"
'5' + function (){} // "5function (){}"
'5' + undefined // "5undefined"
'5' + null // "5null"
```



这种自动转换很容易出错，要小心，例如下面代码，预期110，结果变成中国联通

```js
var obj = {
  width: '100'
};

obj.width + 10 // "10020"
```



###### 自动转换为数值

⌛思考：null+1 | ‘null’+1 | ‘5’-1 | ‘5’+1 | null+1 | undefined+1



除了加法运算符（`+`）有可能把运算子转为字符串，其他运算符都会把运算子自动转成数值。

`+`可能造成字符串拼接。 例如： ‘5’-2 //3  ||  ‘5’+2 //“52”  

`+` 如果其中有运算子是字符串，可能会发生字符串拼接，如果运算子没有字符串，则会把运算子转为数值。



先调用Number转成数值，再做运算(`+`可能会比较特殊，有字符串时，要注意)。



```js
'5' - '2' // 3
'5' * '2' // 10
true - 1  // 0
false - 1 // -1
'1' - 1   // 0
'5' * []    // 0
false / '5' // 0
'abc' - 1   // NaN
null + 1 // 1
undefined + 1 // NaN
```

上面代码中，运算符两侧的运算子，都被转成了数值。



**一元运算符也会把运算子转成数值**

```js
+'abc' // NaN
-'abc' // NaN
+true // 1
-false // 0
```



💡 ==**引申出一个小技巧**==

字符串(里头是数值)和数值之间快速互转。

字符串=>数值：`+`string  e.g  +“123” //输出123

数值=>字符串：num`+‘’`  e.g  123+‘’ //输出“123” 



> 关于Number()、String()、Boolean() 实际调用xx.toString()、xx.valueOf()的先后顺序问题
>
> http://javascript.ruanyifeng.com/grammar/conversion.html



---



### 数值

JavaScript的底层没有整数,d 所有数字都是小数（64位浮点数）。

```js
1 === 1.0 // true
```



**JavaScript浮点数的64个二进制位的组成**

> - 第1位：符号位，`0`表示正数，`1`表示负数
> - 第2位到第12位（共11位）：指数部分
> - 第13位到第64位（共52位）：小数部分（即有效数字）



64位浮点数的指数部分的长度是11个二进制位，意味着指数部分的最大值是2047（2的11次方减1）

JavaScript 能够表示的数值范围为2^1024^到2^-1023^（开区间），超出这个范围的数无法表示。



如果一个数大于等于2的1024次方，那么就会发生“正向溢出”，即 JavaScript 无法表示这么大的数，这时就会返回`Infinity`。

如果一个数小于等于2的-1075次方（指数部分最小值-1023，再加上小数部分的52位），那么就会发生为“负向溢出”，即 JavaScript 无法表示这么小的数，这时会直接返回0。

```js
Math.pow(2, 1024) // Infinity
Math.pow(2, -1075) // 0
```



JavaScript 提供`Number`对象的`MAX_VALUE`和`MIN_VALUE`属性，返回可以表示的具体的最大值和最小值。

```js
Number.MAX_VALUE // 1.7976931348623157e+308
Number.MIN_VALUE // 5e-324
```



#### 数值的表示法

字面形式直接表示，比如`35`（十进制）和`0xFF`（十六进制）

科学计数法表示，如下：

```js
123e3 // 123000
123e-3 // 0.123
-3.1E+12
.1e-23
```



以下两种情况，JavaScript 会自动将数值转为科学计数法表示，其他情况都采用字面形式直接表示。

- 小数点前的数字多于21位
- 小数点后的零多于5个

```js
1234567890123456789012
// 1.2345678901234568e+21

123456789012345678901
// 123456789012345680000

// 小数点后紧跟5个以上的零，就自动转为科学计数法
0.0000003 // 3e-7

// 否则，就保持原来的字面形式
0.000003 // 0.000003
```



#### 数值的进制

> - 十进制：没有前导0的数值。
> - 八进制：有前缀`0o`或`0O`的数值，或者有前导0、且只用到0-7的八个阿拉伯数字的数值。
> - 十六进制：有前缀`0x`或`0X`的数值。
> - 二进制：有前缀`0b`或`0B`的数值。