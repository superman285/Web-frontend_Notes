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



### 变量【重要】

js区分大小写变量名



undefined “未定义” var声明但不赋值



==JS是动态类型语言==

变量的类型没有限制，可以随时更改类型，例如：

var a = 1;

a = ‘hello’;



> **用var重新声明(但不赋值)一个已存在的变量是无效的**，例如：

var x = 1;

var x; //此句无效，等于没写，x等于1，x不会等于undefined

==但是==

var x = 1;

var x = undefined;//你瞅瞅会输出啥

==然后==

var x = 1;
function py(){console.log(x);var x = 2;};py();//你瞅瞅会输出啥

相当于

var x = 1;

function py(){

​    var x;
​    console.log(x);
​    x = 2;

}
py();

==**注意**==

> 重新声明一个函数是有效的，即使重新声明的函数没有函数体！则什么东西都不输出。例：

foo();	//啥都不打印，空空如也，显示一个undefined是因为函数无返回值，默认返回undefined

function foo(){console.log(1);}

function foo(){}





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



null的典型场景

1. 作为函数的参数，表示该函数的参数不是对象

2. 作为对象原型链的终点

3. 在JS的DOM元素获取中，如果没有获取到指定的元素对象，结果是null

   (对象有那个属性，但那个属性值为空) 



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

==记忆:5种类型，除了object和symbol都到了==

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

// 字符串：如果不可以被解析为数值，返回 NaN 非数
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
String([]) //""

//转换函数
function kv(){console.log(1)}
String(kv) // "function kv(){console.log(1)}"
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
> - `false`

`附:` if(xxx)其实就是if(Boolean())，判断if句式中条件的真假即可。



转换实例：

```js
Boolean(undefined) // false
Boolean(null) // false
Boolean(0) // false
Boolean(NaN) // false
Boolean('') // false
Boolean() //输出啥
window.Boolean() //输出啥

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



> **前缀常识**
>
> - 0b表示二进制
> - 0d表示十进制(或者不写)
> - 0表示八进制
> - 0x表示十六进制



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











### 运算符

#### 加法运算符

特殊的加法运算符



==强大的字符串==

> **只要有一个运算子是字符串，加法运算符就变成连接运算符**



加法运算符是在运行时决定，到底是执行相加，还是执行连接。也就是说，运算子的不同，导致了不同的语法行为，这种现象称为“重载”（overload）。由于加法运算符存在重载，可能执行两种运算，使用的时候必须很小心。

```js
'3' + 4 + 5 // "345"
3 + 4 + '5' // "75"
3 + (4 + '5') // "345"
```

除了加法运算符，其他算术运算符（比如减法、除法和乘法）都不会发生重载。它们的规则是：==所有运算子一律转为数值，再进行相应的数学运算。==



如果运算子是对象，必须先转成原始类型的值，然后再相加。



对象转成原始类型的值，规则如下:

1. 自动调用对象的`valueOf`方法。
2. 对象的`valueOf`方法总是返回对象自身，这时再自动调用对象的`toString`方法，将其转为字符串。

```js
var obj = { p: 1 };
obj.valueOf().toString() // "[object Object]"
```



可以自己定义`valueOf`方法或`toString`方法，得到想要的结果。

```js
var obj = {
  valueOf: function () {
    return 1;
  }
};

obj + 2 // 3
```

上面代码中，我们定义`obj`对象的`valueOf`方法返回`1`，于是`obj + 2`就得到了`3`。这个例子中，由于`valueOf`方法直接返回一个原始类型的值，所以不再调用`toString`方法。

下面是自定义`toString`方法的例子。

```js
var obj = {
  toString: function () {
    return 'hello';
  }
};

obj + 2 // "hello2"
```

上面代码中，对象`obj`的`toString`方法返回字符串`hello`。前面说过，只要有一个运算子是字符串，加法运算符就变成连接运算符，返回连接后的字符串。

这里有一个特例，如果运算子是一个`Date`对象的实例，那么会优先执行`toString`方法。

```js
var obj = new Date();
obj.valueOf = function () { return 1 };
obj.toString = function () { return 'hello' };

obj + 2 // "hello2"
```

上面代码中，对象`obj`是一个`Date`对象的实例，并且自定义了`valueOf`方法和`toString`方法，结果`toString`方法优先执行。



#### 算术运算符

##### 余数运算符

运算结果的正负号由第一个运算子的正负号决定。

```js
-1 % 2 // -1
1 % -2 // 1
```



##### 自增和自减运算符

`++`和`--`放在变量之后，会先返回变量操作前的值，再进行自增/自减操作；放在变量之前，会先进行自增/自减操作，再返回变量操作后的值。



##### 数值运算符

`+`和`-`

一元运算符，作用在于可以将任何值转为数值（与`Number`函数的作用相同）。

-(-X) 相当于 +X



##### 比较运算符

> - `<` 小于运算符
> - `>` 大于运算符
> - `<=` 小于或等于运算符
> - `>=` 大于或等于运算符
> - `==` 相等运算符
> - `===` 严格相等运算符
> - `!=` 不相等运算符
> - `!==` 严格不相等运算符



###### 字符串的比较

字符串按照字典顺序进行比较。JavaScript 引擎内部首先比较首字符的 Unicode 码点。如果相等，再比较第二个字符的 Unicode 码点，以此类推。

```js
'cat' > 'Cat' // true'
```

上面代码中，小写的`c`的 Unicode 码点（`99`）大于大写的`C`的 Unicode 码点（`67`），所以返回`true`。

例如： ‘a11’ 和 ‘a2’ 先对比第一个字母a相同，再对比第二个字符‘1’和‘2’ ‘2’大 所以 ‘a2’胜出

由于所有字符都有 Unicode 码点，因此汉字也可以比较。

```js
'大' > '小' // false
```

上面代码中，“大”的 Unicode 码点是22823，“小”是23567，因此返回`false`。



###### 非字符串的比较

> **原始类型值比较**

两个原始类型的值的比较，***除了相等运算符（`==`）和严格相等运算符（`===`）***，其他比较运算符都是先转成数值再比较。

`特殊情况` 任何值（包括`NaN`本身）与`NaN`比较，返回的都是`false`。

**NaN**六亲不认，凶起来连自己都翻脸。

> **对象比较**

运算子是对象，会转为原始类型的值，再进行比较。

先调用`valueOf`方法；如果返回的还是对象，再接着调用`toString`方法。

举个栗子：

```js
var x = [2];
x > '11' // true
// 等同于 [2].valueOf().toString() > '11'
// 即 '2' > '11'

x.valueOf = function () { return '1' };
x > '11' // false
// 等同于 [2].valueOf() > '11'
// 即 '1' > '11' false
```

两个对象之间的比较也是如此。

```js
[2] > [1] // true
// 等同于 [2].valueOf().toString() > [1].valueOf().toString()
// 即 '2' > '1'

[2] > [11] // true
// 等同于 [2].valueOf().toString() > [11].valueOf().toString()
// 即 '2' > '11'

{x: 2} >= {x: 1} // true
// 等同于 {x: 2}.valueOf().toString() >= {x: 1}.valueOf().toString()
// 即 '[object Object]' >= '[object Object]'
```

注意，Date 对象实例用于比较时，是先调用`toString`方法。如果返回的不是原始类型的值，再接着对返回值调用`valueOf`方法。



#### 相等运算符和严格相等运算符





##### 严格相等运算符

> 如果两个值不是同一类型，严格相等运算符（`===`）直接返回`false`，而相等运算符（`==`）会将它们转换成同一个类型，再用严格相等运算符进行比较。



比较算法如下：

1. 不同类型的值，直接返回false

2. 同一类型原始值(数值、字符串、布尔值)，值相同就返回true，反之false。

   特殊地

   ```js
   NaN === NaN  // false
   +0 === -0 // true
   ```

3. 两个复合类型（对象、数组、函数）的数据比较时，不是比较它们的值是否相等，而是比较它们是否指向同一个地址。

   ```js
   {} === {} // false
   [] === [] // false
   (function () {} === function () {}) // false
   ```

   看起来相等，实际上存在不同的内储存地址，所以false。

   如果两个变量引用同一个对象，则它们相等。

   ```js
   var v1 = {};
   var v2 = v1;
   v1 === v2 // true
   ```

   严格相等运算符比较的是地址，而大小于运算符比较的是值。

4. `undefined`和`null`与自身严格相等。

   ```js
   var v1;
   var v2;
   v1 === v2 // true，都是undefined
   ```



严格相等运算符有一个对应的“严格不相等运算符”（`!==`），它的算法就是先求严格相等运算符的结果，然后返回相反值。





##### 相等运算符

==比较相同类型的数据时，与严格相等运算符完全一样。==

比较不同类型的数据时，相等运算符会先将数据进行类型转换，然后再用严格相等运算符比较。

类型转换规则如下：

1. 原始类型的数据(数值、字符串、布尔值)，转换成数值类型再进行比较。

2. 对象(指广义对象，包括数组、对象和函数)和原始类型的值比较时，对象转换成原始类型的值，然后再进行原始类型值之间的比较。其实就是把对象与原始类型都转换成数值类型，然后比较。

   ```js
   [1] == '1' // true
   // 等同于 Number([1]) == Number('1')
   
   [1] == true // true
   // 等同于 Number([1]) == Number(true)
   ```

3. 对象(指广义对象)和对象比较时，同严格相等运算符，比较的是地址而不是值。

4. 特殊的==**undefined 和 null**==

   `undefined`和`null`与其他类型的值比较时，结果都为`false`，它们互相比较时结果为`true`。

   而不是转为数值类型再比较。切记切记。

   ```js
   false == null // false
   false == undefined // false
   
   0 == null // false
   0 == undefined // false
   
   undefined == null // true
   ```

   绝大多数情况下，对象与`undefined`和`null`比较，都返回`false`。只有在对象转为原始值得到`undefined`时，才会返回`true`，这种情况是非常罕见的。



一些反直觉的比较结果，好好感受下：

```js
0 == ''             // true
0 == '0'            // true

2 == true           // false
2 == false          // false

false == 'false'    // false
false == '0'        // true

false == undefined  // false
false == null       // false
null == undefined   // true

' \t\r\n ' == 0     // true
```



相等运算符有一个对应的“不相等运算符”（`!=`），两者的运算结果正好相反。



---



#### 布尔运算符

> - 取反运算符：`!`
> - 且运算符：`&&`
> - 或运算符：`||`
> - 三元运算符：`?:`



```js
!!x
// 等同于
Boolean(x)
```

```js
if (i) {
  doSomething();
}
// 等同于
i && doSomething();	//短路机制

//或的短路机制
var x = 1;
true || (x = 2) // true，不再运算x=2
x // 1
```

或的短路机制常有以下用法：

```js
function saveText(text) {
  text = text || '';
  // ...
}

// 或者写成
saveText(this.text || '')
```

**如果函数调用时，没有提供参数，则该参数默认设置为空字符串。**

text为真就用text，否则为空字符串。



#### 其他好用的运算符

##### void运算符

`void`运算符的作用是执行一个表达式，然后不返回任何值，或者说返回`undefined`。

void(0) //undefined

主要用途是浏览器的书签工具（bookmarklet），以及在超级链接中插入代码防止网页跳转。

```html
<a href="javascript: void(document.form.submit())">
  提交
</a>
<!--用户点击提交表单，但是不产生页面跳转-->
```



##### 逗号运算符

逗号运算符用于对两个表达式求值，并返回后一个表达式的值。

```js
'a', 'b' // "b"

var x = 0;
var y = (x++, 10); //var y = x++, 10 为错误写法
x // 1
y // 10
```



#### 圆括号作用

==圆括号不是运算符，而是一种语法结构==

两种用法：

- 把表达式放在圆括号之中，提升运算的优先级
- 跟在函数的后面，作用是调用函数。

```js
var x = 1;
(x) = 2;
//不报错，因为(x)只是改优先级，不进行求值
```



> **圆括号之中，只能放置表达式，如果将语句放在圆括号之中，就会报错。**



函数中，圆括号有很多妙用。



---



#### 左结合与右结合

对于优先级别相同的运算符，大多数情况，计算顺序总是从左到右，这叫做运算符的“左结合”（left-to-right associativity），即从左边开始计算。

少数运算符的计算顺序是从右到左，即从右边开始计算，这叫做运算符的“右结合”（right-to-left associativity）。其中，最主要的是赋值运算符（`=`）和三元条件运算符（`?:`）。从右往左。



思考：

```js
w = x = y = z;
q = a ? b : c ? d : e ? f : g;
```



公布答案：

```js
w = (x = (y = z));
q = a ? b : (c ? d : (e ? f : g));
```



---



### 字符串

==定义==

如果要在单引号字符串的内部，使用单引号，就必须在内部的单引号前面加上反斜杠，用来转义。双引号字符串内部使用双引号，也是如此。否则报错

```js
'Did she say \'Hello\'?'
// "Did she say 'Hello'?"

"Did she say \"Hello\"?"
// "Did she say "Hello"?"
```

如果长字符串必须分成多行，可以在每一行的尾部使用反斜杠。

```js
var longString = 'Long \
long \
long \
string';

longString
// "Long long long string"
```

上面代码表示，加了反斜杠以后，原来写在一行的字符串，可以分成多行书写。但是，输出的时候还是单行，效果与写在同一行完全一样。注意，反斜杠的后面必须是换行符，而不能有其他字符（比如空格），否则会报错。



不加反斜杠会报错。



> **想输出多行字符串，可利用多行注释技巧来改造**

```
(function () { /*
line 1
line 2
line 3
*/}).toString().split('\n').slice(1, -1).join('\n')
// "line 1
// line 2
// line 3"
```



==转义符==

> - `\0` ：null（`\u0000`）
> - `\b` ：后退键（`\u0008`）
> - `\f` ：换页符（`\u000C`）
> - `\n` ：**换行符**（`\u000A`）
> - `\r` ：回车键（`\u000D`）
> - `\t` ：制表符（`\u0009`）
> - `\v` ：垂直制表符（`\u000B`）
> - `\'` ：**单引号**（`\u0027`）
> - `\"` ：**双引号**（`\u0022`）
> - `\\` ：**反斜杠**（`\u005C`）



如果在非特殊字符前面使用反斜杠，则反斜杠会被省略。

```js
'\a'
// "a"
```

如果字符串的正常内容之中，需要包含反斜杠，则反斜杠前面需要再加一个反斜杠，用来对自身转义。

```js
"Prev \\ Next"
// "Prev \ Next"
```



#### 字符串与数组

字符串可以被视为字符数组，因此可以使用数组的方括号运算符，用来返回某个位置的字符（位置编号从0开始）。 e.g  var s = ‘hello’; s[0] //‘h’

方括号中的数字超过字符串的长度，或者方括号中根本不是数字，则返回`undefined`。



注意：实际上，无法改变字符串之中的单个字符。

```js
var s = 'hello';

delete s[0];
s // "hello"

s[1] = 'a';
s // "hello"

s[5] = '!';
s // "hello"
```

==上述操作说明，字符串内的单个字符无法改变和增加删除。==



##### length属性

length属性返回字符串长度，但是无法改变。

```js
var s = 'hello';
s.length // 5
s.length = 7;
s.length // 5
//赋值失败
```



#### 字符集

JavaScript 使用 Unicode 字符集。JavaScript 引擎内部，所有字符都用 Unicode 表示。



不仅以 Unicode 储存字符，还允许直接在程序中使用 Unicode 码点表示字符，即将字符写成`\uxxxx`的形式，其中`xxxx`代表该字符的 Unicode 码点。

JavaScript 会自动识别一个字符是字面形式表示，还是 Unicode 形式表示。输出给用户的时候，所有字符都会转成字面形式。

```js
var s = '\u00A9';
s // "©"

var f\u006F\u006F = 'abc';
foo // "abc"
```



每个字符在 JavaScript 内部都是以16位（即2个字节）的 UTF-16 格式储存。也就是说，JavaScript 的单位字符长度固定为16位长度，即2个字节。(历史由来)



但实际上，UTF-16 有两种长度：对于码点在`U+0000`到`U+FFFF`之间的字符，长度为16位（即2个字节）；对于码点在`U+10000`到`U+10FFFF`之间的字符，长度为32位（即4个字节）。

JavaScript对UTF-16支持不完整。由于历史原因，只支持两字节的字符，不支持四字节的字符。这是因为 JavaScript 第一版发布的时候，Unicode 的码点只编到`U+FFFF`，因此两字节足够表示了。

例如：四字节字符`𝌆`，JavaScript 认为`𝌆`的长度为2，而不是1。即2个两字节字符。



#### Base64转码

> - `btoa()`：任意值转为 Base64 编码
> - `atob()`：Base64 编码转为原来的值



---



### 对象

> 对象就是一组键值对(key-value)集合,是无序的复合数据集合。类似map结构。

一个对象的键值对之间，用逗号分隔。



💫键名如果是数值，会被自动转为字符串。



如果键名不符合标识名的条件（比如第一个字符为数字，或者含有空格或运算符），且也不是数字，则必须加上引号，否则会报错。

```js
// 报错
var obj = {
  1p: 'Hello World'
};

// 不报错
var obj = {
  '1p': 'Hello World',
  'h w': 'Hello World',
  'p+q': 'Hello World'
};
```

对象两种调用属性方式，obj.pro | obj[‘pro’]。在上面这个栗子，只能用[‘’]的方式调用。



对象的每一个键名又称为“属性”（property），它的“键值”可以是任何数据类型。如果一个属性的值为函数，通常把这个属性称为“方法”，它可以像函数那样调用。

```js
var obj = {
  p: function (x) {
    return 2 * x;
  }
};

obj.p(1) // 2
obj["p"](1) // 2 ，第二种调用方法
```



#### 表达式还是语句？

如果行首是一个大括号，它到底是表达式还是语句？

```js
{ foo: 123 }
```

JavaScript 引擎读到上面这行代码，会发现可能有两种含义。第一种可能是，这是一个表达式，表示一个包含`foo`属性的对象；第二种可能是，这是一个语句，表示一个代码区块，里面有一个标签`foo`，指向表达式`123`。



==外面加上圆括号，理解为对象；不加圆括号，理解为代码块。==

这种差异在`eval`语句（作用是对字符串求值）中反映得最明显。

```js
eval('{foo: 123}') // 123
eval('({foo: 123})') // {foo: 123}
```

没有圆括号，`eval`将其理解为一个代码块；加上圆括号以后，就理解成一个对象。



#### 属性的操作

##### 读取属性

点运算符和方括号运算符。

```
var obj = {
  p: 'Hello World'
};

obj.p // "Hello World"
obj['p'] // "Hello World"
```

上面代码分别采用点运算符和方括号运算符，读取属性`p`。

请注意，如果使用方括号运算符，键名必须放在引号里面，否则会被当作变量处理。

```js
var foo = 'bar';

var obj = {
  foo: 1,
  bar: 2
};

obj.foo  // 1
obj[foo]  // 2
```



方括号更加灵活多样，方括号运算符内部还可以使用表达式，点号不行。

```js
obj['hello' + ' world']
obj[3 + 3]
```



数字键可以不加引号，因为自动转为字符串。数字键不能用点运算符，会被当成小数点，报错。

```js
var obj = {
  0.7: 'Hello World'
};

obj['0.7'] // "Hello World"
obj[0.7] // "Hello World"
obj.0.7 //报错，不可用点运算符。
```



##### 属性的赋值

点运算符和方括号运算符，除了读取，还可用于赋值。

```js
var obj = {};

obj.foo = 'Hello';
obj['bar'] = 'World';
```

JavaScript 允许==属性的“后绑定”==，也就是说，你可以在任意时刻新增属性，没必要在定义对象的时候，就定义好属性。



##### 查看所有属性

`Object.keys`，查看一个对象本身的所有属性(所有‘键’)，返回的是一个数组(Array)。

💡 技巧：想查看一个对象中有多少个键，使用`Object.keys(objxx).length`方法即可。

(或Object.keys(objxx)[‘length’])

```js
var obj = {
  key1: 1,
  key2: 2
};

Object.keys(obj);
// ['key1', 'key2']
```



##### delete命令

用于删除对象的某个属性，删除成功后返回true

删除存在或不存在的属性，都会返回true；只有一种情况，该属性存在而且不得删除，delete才会返回false。

```js
var obj = { p: 1 };
Object.keys(obj) // ["p"]

delete obj.p // true
obj.p // undefined
Object.keys(obj) // []
```



```js
var obj = Object.defineProperty({}, 'p', {
  value: 123,
  configurable: false
});

obj.p // 123
delete obj.p // false
```

上面代码之中，对象`obj`的`p`属性是不能删除的，所以`delete`命令返回`false`（关于`Object.defineProperty`方法的介绍，请看《标准库》的 Object 对象一章）。

```js
var obj = {};
delete obj.toString // true
obj.toString // function toString() { [native code] }
```

另外，需要注意的是，`delete`命令只能删除对象本身的属性，无法删除继承的属性（关于继承参见《面向对象编程》章节）。

上面代码中，`toString`是对象`obj`继承的属性，虽然`delete`命令返回`true`，但该属性并没有被删除，依然存在。这个例子还说明，即使`delete`返回`true`，该属性依然可能读取到值。



##### in运算符

`in`运算符用于检查对象是否包含某个属性（注意，检查的是键名，不是键值），如果包含就返回`true`，否则返回`false`。

```js
var obj = { p: 1 };
'p' in obj // true
```

不能识别哪些属性是对象自身的，哪些属性是继承的。`toString`方法不是对象`obj`自身的属性，而是继承的属性。但是，`in`运算符不能识别，对继承的属性也返回`true`。

```js
var obj = {};
'toString' in obj // true
```



##### for...in循环

该循环用来遍历一个对象的全部属性。

```js
var obj = {a: 1, b: 2, c: 3};

for (var i in obj) {
  console.log(obj[i]); | console.log(i)
}
// 1  |  a
// 2  |  b
// 3  |  c
```

下面是一个使用`for...in`循环，提取对象属性名的例子。

```js
var obj = {
  x: 1,
  y: 2
};
var props = [];
var i = 0;

for (var p in obj) {
  props[i++] = p
}

props // ['x', 'y']
```



对象`obj`继承了`toString`属性，该属性不会被`for...in`循环遍历到，因为它默认是“不可遍历”的。



==hasOwnProperty==

判断某个属性是不是对象自身的属性(还是继承的?)，返回真假。

```js
var person = { name: '老张' };

for (var key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key);
  }
}
// name
```



#### with语句

作用是操作同一个对象的多个属性时，提供一些书写的方便。

```js
// 例一
var obj = {
  p1: 1,
  p2: 2,
};
with (obj) {
  p1 = 4;
  p2 = 5;
}
// 等同于
obj.p1 = 4;
obj.p2 = 5;

// 例二
with (document.links[0]){
  console.log(href);
  console.log(title);
  console.log(style);
}
// 等同于
console.log(document.links[0].href);
console.log(document.links[0].title);
console.log(document.links[0].style);
```

弊端：绑定对象不明确。

可用一个临时变量代替with

```js
with(obj1.obj2.obj3) {
  console.log(p1 + p2);
}

// 可以写成
var temp = obj1.obj2.obj3;
console.log(temp.p1 + temp.p2);
```



---



### 函数

> 💡 **函数若无返回值，会默认返回undefined，所以控制台总是能看到一个undefined**
>
> function fu(){console.log(666)}
> 看到的打印结果是：
>
> 666
> undefined

#### 函数的声明有三种方式

1. **function命令**

   ```js
   function print(s) {
     console.log(s);
   }
   ```

2. **函数表达式**

   ```js
   var print = function(s) {
     console.log(s);
   };
   ```

3. **Function 构造函数**

   ```js
   var add = new Function(
     'x',
     'y',
     'return x + y'
   );
   
   // 等同于
   function add(x, y) {
     return x + y;
   }
   ```

   `Function`构造函数接受三个参数，除了最后一个参数是`add`函数的“函数体”，其他参数都是`add`函数的参数。

   可以传递任意数量的参数给`Function`构造函数，只有最后一个参数会被当做函数体，如果只有一个参数，该参数就是函数体。

   ```js
   var foo = new Function(
     'return "hello world"'
   );
   
   // 等同于
   function foo() {
     return 'hello world';
   }
   ```


> **方式1与方式2近乎等价，方式3甚少使用**



function testf(){console.log(‘666’);}

testf	//输出 f testf(){console.log(‘666’);}



#### 函数的重复声明

同一个函数被多次声明，后面的声明会覆盖前面的声明。



#### 第一等公民

>JavaScript 语言将函数看作一种值，与其它值（数值、字符串、布尔值等等）地位相同。凡是可以使用值的地方，就能使用函数。比如，可以把函数赋值给变量和对象的属性，也可以当作参数传入其他函数，或者作为函数的结果返回。函数只是一个可以执行的值，此外并无特殊之处。

==由于函数与其他数据类型地位平等，所以在 JavaScript 语言中又称函数为第一等公民。==



```js
function add(x, y) {
  return x + y;
}

// 将函数作为参数和返回值
function a(op){
  return op;
}
a(add)(1, 1)
// 2
```

==函数运算次序从左到右==，上面代码中其实是(a(add))(1,1)，不同于a(add(1,1))，不过此处结果一样。



#### 函数名提升 hoisting

js引擎将函数名视同变量名，所以采用`function`命令声明函数时，函数会像变量声明一样，被提升到代码头部。

function方式的函数提升，除了函数名，把函数的定义也给提升到了头部。

==函数声明会连同命名和函数体一起被提升至作用域顶部==



🔯***经典操作***

> **函数会首先被提升，然后再到变量，即函数会提升到变量之前(因为f在v前...function更牛逼)** 
>
> 但是变量的声明var a只是定义并不会覆盖变量，不会将前面的a改为undefined。
>
> 参考资料:https://segmentfault.com/q/1010000011747018



> **函数提升更前原理解释**
>
> https://github.com/xiaohesong/TIL/blob/master/front-end/javascript/%E6%89%A7%E8%A1%8C%E4%B8%8A%E4%B8%8B%E6%96%87.md



这个例子：

```js
test2	//输出啥
var test2 = 666
function test2(){
	console.log(678)
}

console.log(foo);	//输出啥
function foo(){
    console.log("函数声明");
}
var foo = "变量";
```



##### 不能在非函数的代码块中声明函数，例如条件语句中不可声明函数

```js
if (condition) {
  function f() {}
}

f() // 不报错,但是由于函数声明提升，if语句失效了
```



#### 函数的属性和方法

##### name属性

返回函数名

```js
function f1() {}
f1.name // "f1"

var f2 = function () {};
f2.name // "f2"，匿名函数返回的是变量名，具名函数则返回function关键字后的函数名

var f3 = function myName() {};
f3.name // 'myName' 注意:真正的函数名还是f3，myName这个名字只在函数体内部可用。
myName // 报错，Uncaught ReferenceError: myName is not defined
```

`name`属性的一个用处，就是获取参数函数的名字。

函数`test`内部通过`name`属性，就可以知道传入的参数是什么函数。

```js
var myFunc = function () {};

function test(f) {
  console.log(f.name);
}

test(myFunc) // myFunc
```



##### length属性

函数的`length`属性返回函数预期传入的参数个数，即函数定义之中的参数个数。

```js
function f(a, b) {}
f.length // 2
```

上面代码定义了空函数`f`，它的`length`属性就是==定义时的参数个数==。

**不管调用时输入了多少个参数，`length`属性始终等于2。**

`length`属性提供了一种机制，判断定义时和调用时参数的差异，以便实现面向对象编程的”方法重载“（overload）。



##### toString()属性

函数的`toString`方法返回一个字符串，内容是函数的源码。

```js
function f() {
  a();
  b();
  c();
}

f.toString()
// function f() {
//  a();
//  b();
//  c();
// }

function f() {/*
  这是一个
  多行注释
*/}

f.toString()
// "function f(){/*
//   这是一个
//   多行注释
// */}"
```



利用这一点，可以变相实现多行字符串。

```js
var multiline = function (fn) {
  var arr = fn.toString().split('\n');
  return arr.slice(1, arr.length - 1).join('\n');
};

function f() {/*
  这是一个
  多行注释
*/}

multiline(f);
// " 这是一个
//   多行注释"
```



#### 函数作用域

##### 定义

- 全局作用域，变量在整个程序中一直存在，所有地方都可以读取
- 函数作用域，变量只在函数内部存在



```js
//局部变量
function f(){
  var v = 1;
}

v // ReferenceError: v is not defined
```

```js
var v = 1;

function f(){
  var v = 2;
  console.log(v);
}

f() // 2
v // 1
```

上面代码中，变量`v`同时在函数的外部和内部有定义。在函数内部定义时，函数内部的局部变量`v`覆盖了全局变量`v`。



❗注意：对于`var`命令来说，局部变量只能在函数内部声明，在其他区块中声明，一律都是全局变量。

```js
if (true) {
  var x = 5;
}
console.log(x);  // 5
```





##### 函数内部的变量提升

```js
function foo(x) {
  if (x > 100) {
    var tmp = x - 100;
  }
}

// 等同于
function foo(x) {
  var tmp;
  if (x > 100) {
    tmp = x - 100;
  };
}
```



##### 函数本身的作用域 ㊙

函数本身也是一个值，也有自己的作用域。它的作用域与变量一样，就是其声明时所在的作用域，与其运行时所在的作用域无关。 函数执行时作用域绑定声明时的作用域。

> **函数执行时所在的作用域，是定义时的作用域，而不是调用时所在的作用域。**
>
> 里面的能访问外面的，外面的不能访问里面的

> ==总结==
>
> **看最终要输出的变量名，先从函数声明时函数体内部找，找不到就往外一层找(从上到下,下面的赋值会把上面的覆盖掉，并不是往上找到第一个就对了，但切记不能找到函数调用位置之下，而是函数调用之上的这一层的最后的值才是对的。**
>
> 看不懂找下面的犯糊涂和面试题看看加深理解。



```js
var a = 1;
var x = function () {
  console.log(a);
};

function f() {
  var a = 2;
  x();
}

f() // 1
```

上面代码中，函数`x`是在函数`f`的外部声明的，所以它的作用域绑定外层，内部变量`a`不会到函数`f`体内取值，所以输出`1`，而不是`2`。



==**必须注意！**==

函数f()内有与全局变量a同名的`局部变量a`时，会`优先使用自己的变量`，只不过第一次alert时未赋值

所以这个和同作用域下同名变量重复声明var a无效不同；函数内如果重复声明(var a)了函数外声明过的a，那a就真的成了undefined，可怕！



==犯糊涂==

```js
var xyx = 1;
function fx(){console.log(xyx)}
var xyx = 2;
fx();
```

==作用域面试题==

> http://book.jirengu.com/fe/%E5%89%8D%E7%AB%AF%E5%9F%BA%E7%A1%80/Javascript/%E5%87%BD%E6%95%B0%E5%92%8C%E4%BD%9C%E7%94%A8%E5%9F%9F.html



虽然函数会提升到变量之前，但是并不会导致输出的xyx没定义过，因为fx()执行的时候xyx已经被赋值了，找位置只是找到所在的那一层，并不是认为函数在声明的时候当场执行导致xyx出错，观念要扭过来，然后到时再看下作用域链。



作用域相关资料【加精，难懂】

> https://www.cnblogs.com/moqiutao/p/4798201.html



用作用域链来解释：从函数声明(创建)时的自身内部找，然后从上面开始找，而不是从调用时的上面开始找。

> https://www.jianshu.com/p/858c6a924142



==易错==

容易犯错的一点是，如果函数`A`调用函数`B`，却没考虑到函数`B`不会引用函数`A`的内部变量。

```js
var x = function () {
  console.log(a);
};

function y(f) {
  var a = 2;
  f();
}

y(x)
// ReferenceError: a is not defined
```

上面代码将函数`x`作为参数，传入函数`y`。但是，函数`x`是在函数`y`体外声明的，作用域绑定外层，因此找不到函数`y`的内部变量`a`，导致报错。



```js
function foo() {
  var x = 1;
  function bar() {
    console.log(x);
  }
  var x = 3;
  return bar;
}

var x = 2;
var f = foo();
f() // 1
```

上面代码中，函数`foo`内部声明了一个函数`bar`，`bar`的作用域绑定`foo`。当我们在`foo`外部取出`bar`执行时，变量`x`指向的是`foo`内部的`x`，而不是`foo`外部的`x`。正是这种机制，构成了下文要讲解的“闭包”现象。



#### 参数

##### 参数的省略

```js
function f(a, b) {
  return a;
}

f(1, 2, 3) // 1
f(1) // 1
f() // undefined

f.length // 2
```

上面代码的函数`f`定义了两个参数，但是运行时无论提供多少个参数（或者不提供参数），JavaScript 都不会报错。

==省略的参数的值就变为`undefined`。==

需要注意的是，函数的`length`属性与实际传入的参数个数无关，只反映函数预期传入的参数个数(定义时候的参数个数)。



可以省略靠后的参数，但没办法只省略靠后的参数。如果一定要省略靠前的参数，只有显式传入`undefined`。

```js
function f(a, b) {
  return a;
}

f( , 1) // SyntaxError: Unexpected token ,(…)
f(undefined, 1) // undefined
```



> ##### 💡传递方式

如果是原始类型的值（数值、字符串、布尔值），传递方式是传值传递（passes by value）。这意味着，在函数体内修改参数值，不会影响到函数外部。

```js
var p = 2;

function f(p) {
  p = 3;
}
f(p);

p // 2
```



But，如果函数参数是复合类型的值（数组、对象、其他函数），传递方式是传址传递（pass by reference）。也就是说，传入函数的原始值的地址，因此在函数内部修改参数，将会影响到原始值。

```js
var obj = { p: 1 };

function f(o) {
  o.p = 2;
}
f(obj);

obj.p // 2
```

上面代码中，传入函数`f`的是参数对象`obj`的地址。因此，在函数内部修改`obj`的属性`p`，会影响到原始值。



==特殊地，==如果函数内部修改的，不是参数对象的某个属性，而是替换掉整个参数，这时不会影响到原始值。

```js
var obj = [1, 2, 3];

function f(o) {
  o = [2, 3, 4];
}
f(obj);

obj // [1, 2, 3]
```

上面代码中，在函数`f`内部，参数对象`obj`被整个替换成另一个值。这时不会影响到原始值。这是因为，形式参数（`o`）的值实际是参数`obj`的地址，重新对`o`赋值导致`o`指向另一个地址，保存在原地址上的值当然不受影响。



#### 同名参数

```js
//有同名的参数，则取最后出现的那个值。
function f(a, a) {
  console.log(a);
}

f(1, 2) // 2
f(1) // undefined
```

调用函数`f`的时候，没有提供第二个参数，`a`的取值就变成了`undefined`。这时，如果要获得第一个`a`的值，可以使用`arguments`对象。如下：

```js
function f(a, a) {
  console.log(arguments[0]);
}

f(1) // 1
```



#### arguments对象

`arguments`对象包含了函数运行时的所有参数，`arguments[0]`就是第一个参数，`arguments[1]`就是第二个参数，以此类推。这个对象==只有在函数体内部，才可以使用。==

```js
var f = function (one) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}

f(1, 2, 3)
// 1
// 2
// 3
```

正常模式下，`arguments`对象可以在运行时修改。

```js
var f = function(a, b) {
  arguments[0] = 3;
  arguments[1] = 2;
  return a + b;
}

f(1, 1) // 5
```

上面代码中，函数`f`调用时传入的参数，在函数内部被修改成`3`和`2`。

```js
var f = function(a, b) {
  'use strict'; // 开启严格模式
  arguments[0] = 3; // 无效
  arguments[1] = 2; // 无效
  return a + b;
}

f(1, 1) // 2
```

上面代码中，函数体内是严格模式，这时修改`arguments`对象就是无效的。



💡技巧：通过`arguments`对象的`length`属性，可以判断函数调用时到底带几个参数。

```js
function f() {
  return arguments.length;
}

f(1, 2, 3) // 3
f(1) // 1
f() // 0
```



##### arguments和数组的关系

虽然`arguments`很像数组，但==它是一个对象==。数组专有的方法（比如`slice`和`forEach`），不能在`arguments`对象上直接使用。

如果要让`arguments`对象使用数组方法，真正的解决方法是将`arguments`转为真正的数组。下面是两种常用的转换方法：`slice`方法和逐一填入新数组。

```js
var args = Array.prototype.slice.call(arguments);

// 或者
var args = [];
for (var i = 0; i < arguments.length; i++) {
  args.push(arguments[i]);
}
```



##### calee属性

`arguments`对象带有一个`callee`属性，返回它所对应的原函数。

```js
var f = function () {
  console.log(arguments.callee === f);
}

f() // true
```

可以通过`arguments.callee`，达到调用函数自身的目的。这个属性在严格模式里面是禁用的，因此不建议使用。



#### 函数的其他知识点

> ##### 闭包



> ###### JavaScript 终极指南之执行上下文、变量提升、作用域和闭包
>
> [必看学习链接](https://blog.hhking.cn/2018/10/24/ultimate-guide-to-execution-contexts-hoisting-scopes-and-closures-in-javascript/?utm_source=tuicool&utm_medium=referral)



函数有执行上下文，有调用栈，在运行阶段结束后，就会从调用栈中弹出，函数中的局部变量自然也没了。





　

