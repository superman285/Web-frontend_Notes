#### 码点 codepoint

/u{44} == /u0044



一系列方法



#### 一些新增方法

includes 是否包含

startsWith 以xx开头

endsWith 以xx结尾



padStart(nums,str) 以str从开头开始填充，直到总长度满了nums位

padEnd(nums,str) 以str从末尾开始填充，直到满了nums位



因为有Symbol.iterator

所以可以用for...of...



#### 模板字符串 超级重点

\`i love ${variable}\`



${这里头是表达式}

可以做数学运算

可以写函数的执行，会转为字符串格式



模板字符串中可以嵌套 常规字符串



难点💡



const data = {

​    {first: “zhang”,last: “san”},

​    {first: “li”,last: “si”}

}



```javascript
const temp = data=>`
	<table>
		${data.map((addr)=>`
			<tr><td>${addr.first}</td></tr>
			<tr><td>${addr.last}</td></tr>
		`).join('')}
	</table>
`
```

join要加空串作为参数，不然会默认以,分隔 相当于join无效了



但是要注意，可能会导致xss，如果数据是脚本 可能会被注入恶意代码



<font style="color:white;background:mediumseagreen;padding:3px 6px;font-weight:bold;line-height:28px">可以使用标签模板:</font> 本质上是定义的函数 可用来处理script标签 把尖括号替换成$lt/gt

或者使用mustache.js来写

let a = 5; let b = 10;



```javascript
function tag($1,$2,$3){

    console.log($1,$2,$3)

}

tag`Hello ${a+b} world ${a*b}`

会自己处理下.split(/\$\{[^}]+\}/)

相当于 tag(["Hello "," world ",""],a+b,a*b)
第一个参数是摘除掉 模板字符串中的变量后的字符串数组，相当于split分割
后续参数对应模板字符串中的变量

$1是一个数组

会输出一个类数组
["Hello "," world ",""] 15 50
```



```javascript
function SaferHTML (tempData){
  let s = tempData;
   //第0个索引的内容上号刨除变量后的字符串 不需要处理，所以直接从索引1开始
  for(let i = 1; i < arguments.length; i++){
    let arg = String(arguments[i]);

    s += arg.replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

    s += tempData[i];  
  }
  return s;
}


let sender = `<script>alert("abc")</script>`
let message = SaferHTML`<p>${sender} has sent you message</p>`
console.log(message);

```



参考学习

https://segmentfault.com/a/1190000014934589

防止xss 跨站脚本攻击

https://segmentfault.com/a/1190000016493992