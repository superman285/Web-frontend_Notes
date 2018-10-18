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