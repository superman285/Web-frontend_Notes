# 给简历加JS



给简历加上动效



- sticky navbar
- auto highlight navbar
- auto scroll smoothly
- popup menu
- auto hide aside
- *seamless* slider 无缝轮播
- loading animation
- animate when scroll









> **DOM找弟弟**



- nextElementSibling
- nextSibling

两个都有bug

nextElementSibling无法支持ie9和更早的ie，无法支持Safari，还得加上代码支持ie和safari

nextSibling会找到空格、回车之类的垃圾节点，要加代码处理一下



==nextSibling处理方法==

```js
let nextBrother = target.nextSibling;
while(nextBrother.tagName !== 'UL'){	//已知要找到的下一个弟弟是ul，必须大写
	nextBrother = nextBrother.nextSibling;
}

//通用版本
while(nextBrother.nodeType === Node.TEXT_NODE){ //Node.TEXT_NODE为常量3，指空格或回车
    nextBrother = nextBrother.nextSibling;
}
//通用版本2
while(nextBrother.nodeType !== Node.ELEMENT_NODE){ //Node.ELEMENT_NODE为常量1，指有含义标签节点
    nextBrother = nextBrother.nextSibling;
}
```





id名最好不要中括号，不方便访问，

如果要访问可以用全局方式命名，例如锚点跳转的 id=‘siteAbout’



锚链接跳转实现平滑滚动效果，一般用jq，.animate(scrollTo) ...

纯css实现方式：scroll-behavior



> 阻止默认动作
>
> 例如阻止a链接的默认跳转行为：
>
> ```
> xx.onclick = function(event){
> 	event.preventDefault();
> }
> ```
>
>



a.href是带http协议的，含浏览器自动补充的http地址



a.getAttribute(‘href’) 不带http协议，html中写了什么就显示什么



代码中写debugger，即在这个位置打断点





window.scrollY, 滚动条向下滑动了多少距离



找元素相关API：

.parentElement	找父亲节点

.children	找孩子节点

用childNodes会出现空格回车等乱七八糟东西，不用



一个console.log的问题一定注意：

console.log(xx.parentElement)可以正常打出一个元素，

但是 console.log(‘父元素’+xx.parentElement)可就出问题了，这时候会把parentElement自动转换类型成string，这时就会打出奇怪东西了