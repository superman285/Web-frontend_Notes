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

特殊情况，即任何值（包括`NaN`本身）与`NaN`比较，返回的都是`false`。

六亲不认，凶起来还给自己翻脸。

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
// 即 '1' > '11'
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