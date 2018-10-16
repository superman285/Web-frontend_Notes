## JS里的数据



### JS黑历史

1991 李爵士 www

1992 李爵士同事 CSS

1993 W3C

1995 网景 Netscape => Navigator

Branden Eich JS之父，设计了js初版 Mocha

改名Mocha=>LiveScript=>JavaScript

网景和Sun达成协议，出品一门脚本语言。

几年后 Unicode和UTF-8发布  (JS在这之前就出现了，所以它的编码有bug)

1996 MS->IE => JScript 想抢占市场

后来 浏览器市场占有 ms打败了网景

网景开源浏览器 => Firefox 项目

​    IE5.5 MS推出JS发请求功能

2004 Gmail，网页上的程序 JS被正式认为是一门编程语言了(可以开发项目)



网景为了对抗微软的脚本，向ECMA(欧洲计算机制造协会)申报标准

标准名为 ECMAScript(因为javascript商标已经被注册了，不可用)

JS的一些缺点：全局变量(没有模块化)、标准库(内置代码少) | ES3以及之前

ECMAScript5 做了个小升级 步子比较小

ECMAScript6 做了比较给力的升级 可以视为现代编程语言了

很多来源于Rails社区的CoffeeScript社区



> **JS之父对JS的评价**
>
> 原创之处并不优秀，
>
> 优秀之处并非原创！



目前JS每年一更 

ES7 | ES8 | ES Next



> ES5新特性汇总：https://zhuanlan.zhihu.com/p/24336831?refer=study-fe
>
> ES6新特性汇总：https://zhuanlan.zhihu.com/p/24570791



`JS学习路径推荐`

先学核心ES3，小升级到ES5，再学习ES6(稍微要多花点时间精力)



没有纳入规范的js语法，可能就先用上了，例如Chrome支持了y1、然后firefox也支持了y1’、IE也支持了y1’’

ECMA一看大家都支持了，就把他纳入规范。

或者例如Chrome支持x1，firefox不支持，可以通过Babel来转义。



---



### JS数据类型

**7种数据类型**

- number 数字
- string 字符串
- boolean 布尔值
- object 对象
- null
- undefined
- symbol 符号

注：array和function并不是数据类型，他们都属于object对象

> object对象为复杂类型，其他6种都为基本类型(简单类型)

##### number数字

十进制数表示：

1 | .1 | 1.23e2（代表1.23*10^2^)

二进制：0b开头，e.g 0b11代表3

八进制：0开头， e.g 011代表9

十六进制：0x开头，e.g 0x11代表17



##### string字符串

空字符串：‘’ | “” 长度为0

空格字符串：‘ ’ | “ ” 长度为1

回车也占长度

例如：

var str=\`12345
67890\`

str长度是11，因为有回车，输出是
12345
67890

> ***转义***
>
> 符号前加\ 意为这个符号不是结束，而是我想显示出来的符号
> 转义符不占长度
>
> 想显示一个单引号的方法：
>
> var a = “‘”
> var a = ‘\‘’
>
> 多行字符串(抄袭命令行，\再加回车来表示换行)
>
> var str = ‘a\     //此处\代表不是结束
> ​           b’
>
> 常用转义：
> `\0` ：null（`\u0000`）
>
> `\b` ：后退键（`\u0008`）
>
> `\f` ：换页符（`\u000C`）
>
> `\n` ：换行符（`\u000A`）
>
> `\r` ：回车键（`\u000D`）
>
> `\t` ：制表符（`\u0009`）
>
> `\v` ：垂直制表符（`\u000B`）
>
> `\'` ：单引号（`\u0027`）
>
> `\"` ：双引号（`\u0022`）
>
> `\\` ：反斜杠（`\u005C`）
> \加空格 转义 为空格

 

##### boolean

两个值 true | false

a&&b 两个为真则为真，其中一个为假则为假

a||b 两个为假则为假，其中一个为真则为真



##### null和undefined

==区别==

- 【语法】变量未赋值，则为undefined 不是null。

- 【惯例】
  - 有一个object对象，现在不想赋值。推荐可初始化为null。 
  - 有一个非object对象，现在不想赋值。推荐可初始化为undefined。



##### 对象object





