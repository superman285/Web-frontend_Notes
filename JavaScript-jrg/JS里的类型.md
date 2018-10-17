## JS里的类型



### 类型转换



| 左👉右         | number                        | string                                                       | boolean    | null | undefined | object |
| ------------- | ----------------------------- | ------------------------------------------------------------ | ---------- | ---- | --------- | ------ |
| **number**    |                               | n.toString()<br/>(6).toString()<br>或var num = 6;<br/>num.toString() | Boolean(n) |      |           |        |
| **string**    | Number(‘str’)                 |                                                              | Boolean()  |      |           |        |
| **boolean**   | Number(true)                  | .toString()                                                  |            |      |           |        |
| **null**      | Number()<br>转为0             | 无法用toString                                               | Boolean()  |      |           |        |
| **undefined** | Number()<br/>转为NaN          | 无法用toString                                               | Boolean()  |      |           |        |
| **object**    | 对象和函数转为NaN，数组看情况 | 使用toString<br/>‘[object Object]’                           | Boolean()  |      |           |        |



🛵**老司机妙招**

==快速转换成string类型：xx + ‘’==

```js
1+'' //'1'
true+'' //'true'
undefined+'' //'undefined'
({}) + '' //猜猜输出啥
{} + ''   //猜猜输出啥
```

==快速转换成boolean类型：!!xx==

```js
!!undefined //false
!!null //false
!!6 //true
!!0 //false
!!'s' //true
!!" " //空格字符串输出true
!!'' //猜猜输出啥
!!{} //猜猜输出啥
!![] //猜猜输出啥
```

==快速转换成number类型：==

- ==xx - 0==
- ==+xx==

```js
+'s'	//NaN
+'12'	//12
+'1s'	//NaN
+[]		//猜一猜
+[123]	//123
+[1,2,3]	//NaN
+{}		//猜一猜
+null	//猜一猜
+undefined	//猜一猜
```



##### 转换方法总结

> **转换为字符串的方法**

- String(x)

- x.toString()

- **区别**

  - .toString()不可用于null和undefined而String()可以。

  - `注：`数字或对象使用toString方法需要加上括号，否则报错

    666.toString()❌ (666).toString() ✔

    {}.toString() ❌ ({}).toString() ✔

  - .toString可支持将数字转为不同进制字符串，例如(2).toString(2)//“10”

    可支持.toString(2)|.toString(8)|.toString(10)括号内不写默认为10|.toString(16)

- x+‘’

> **转换为数字的方法**

- Number(xx)
- parseInt(xx)
- parseFloat(xx)
- xx - 0
- +xx

❗ **注意ParseInt**

完整写法是parseInt(value,radix)，value为要被解析的值，radix为基数。

> <font color=darkorenge>parseInt会(从左到右)从第一个字符开始解析，直到碰到了无法解析为数字的东西(如unicode字母等)，前面的解析出来多少是多少，打印出多少。</font>
>
> 例如：
>
> parseInt(‘0b110’) //输出0
>
> parseInt([1,2,3]) //输出1

含义是将参数value看作radix进制数，返回十进制数值。例如：

```js
parseInt('123', 5) // 将'123'看作5进制数，返回十进制数38 => 1*5^2 + 2*5^1 + 3*5^0 = 38
```

==易错点==

先回顾下二进制、八进制、十六进制数表示：

> <font color=deeppink>**0b开头代表二进制**</font> **|** <font color=deeppink>**0开头代表八进制**</font> **|** <font color=deeppink>**0x开头代表十六进制**</font> (字母大小写均可)

在没有指定基数radix或者基数为`0`时，有以下处理

- 当参数value为<font color=darkorenge>**数字**</font>时：

  - 以0b开头，则基数是2(二进制)
  - 以0开头，则基数是8(八进制)
  - 以0x开头，则基数是16(十六进制)

  ```js
  parseInt(017) 相当于parseInt(017,10)|parseInt(017,0)
  也相当于直接在浏览器控制台输入 017 得出一个数值
  parseInt(017) //15 , 1*8^1+7*8^0 = 15
  017 //15 , 浏览器将其视为了八进制数，所以转换成十进制数后得到15
  0789 //789,由于到达了8，浏览器会智能地将它视为十进制数，输出789
  parseInt(017,8) //13,因为浏览器自动将017转为15,所以其实是parseInt(15,8),得到13
  parseInt(17,8) //15,因为没有0开头,不知道他是八进制数，所以用给的radix参数来当作8进制数处理
  			  //即 1*8^1+7*8^0 = 15 ，相当于parseInt(017)	
  ```

- 当参数value为<font color=darkorenge>**字符串**</font>时：

  - 以0b开头，并不会被识别为二进制，而是将b当为字符，所以解析到b之前中断，输出0
  - 以0开头，**基数是10**(十进制)或8(八进制)，ES5规定为10，但可能有的浏览器仍为8,一般用10
  - 以0x开头，则基数是16(十六进制)
  - 其他任何开头视为基数10(十进制)

  ```js
  parseInt('0b111') //输出0
  parseInt('0789')  //789,视为十进制，若为八进制是不会出现8和9的
  parseInt('0789',8) //7,浏览器自动将'0789'转为了789,只能解析出小于8的，所以是7
  parseInt('0x178')  //376,1*16^2+7*16+8*1=376，相当于parseInt('0x178',16)
  parseInt('0x178',10) //0，若视为其他进制，则x越不过去，解析到x前停下，所以是0
  傻傻分不清楚：
  parseInt('0x011',16)  //17,1*16^1+1*16^0=17
  parseInt(0x011,16)   //23 , 0x011自动被转为了17,所以是parseInt(17,16),1*16+7*1=23
  ```


有很多坑，具体可以看MDN资料：

> https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/parseInt



> **转换为布尔值的方法**

- Boolean(x)
- !!x



==记忆==

只有0|NaN|‘’|undefined|null 是`5`个falsy值，转成boolean为false，其他`所有`都会转成true

`所有对象`转为boolean都为true，包括空对象、空数组、空函数等



==注意==

对象中

var obj = {null:0,undefined:0}

obj[null]==obj[‘null’]\==obj.null //都打印出0，null自动转换为了‘null’

obj[undefined]==obj[‘undefined’]\==obj.undefined//都打出0，undefined自动转成了‘undefined’



### 各类型的API













### 内存图



js内存分配



js引擎将内存分成两大块

代码区：存代码 a 

数据区：‘1’ 2 {}



栈内存(stack)和堆内存(heap)



js中数据是以64位浮点数存的

var a = 2

先进行变量提升









### 深复制(深拷贝)