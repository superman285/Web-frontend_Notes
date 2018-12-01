##### BOM browser object model

顶层对象是window



###### window常用方法

- alert
- confirm 返回值true|false
- setInterval() | clearInterval()
- setTimeout() | clearTimeout()

```javascript
var timerID = setTimeout(fn,1000);
function fn(){xxxx;clearTimeout(timerID);}
```

- open([页面地址]，[打开方式])

  打开方式：_self本窗口打开 _blank新窗口打开 _parent

  不写页面地址默认打开blank，不写打开方式默认是_blank

  返回值：新窗口的window对象

  前端会涉及跨域问题，若页面地址写一个百度的网址，是无法对百度网址的窗口对象直接进行操作的，因为跨了域。 

- close() 火狐无法关闭本窗口，除非设置某个值为true(about:config dom.allow.xxx)



###### ==window下的四大金刚==

> 四个对象
>
> navigator | location | history | screen

- navigator 浏览器信息

  navigator.userAgent

  1操作系统

  2渲染内核

  3浏览器版本

- location 页面URL相关信息

  location.href 页面地址

  location.hash 锚点 获取地址栏从#开始到后面的内容，包括#，格式为==string==

  从#开始截止到下一个特殊符号前，例如?

  神奇之处：这个hash不会因为页面刷新和被刷掉，刷新之后仍赖在地址栏上

  使用：添加hash后，判断当hash为某个值时，状态为xx，这个xx状态就不会因为刷新页面而消失了。

  1. 通过a标签添加hash值 <a href=“#11” 点击a标签就给地址加上了#1
  2. 通过js代码添加hash值 location.hash = xx; 设置时忽略#，不用写#
  3. 

  location.search 获取地址栏从?开始到后面的内容，包括?，格式为==string==

  从?开始截止到下一个特殊符号前，例如#

  添加方法：

  1. 通过a标签添加search值 <a href=“?why” 点击a标签 #11就消失了，末尾加上了?why

  2. 用js代码添加search值的话，会加在#11之前，无法达到取消#不刷新(即重新刷新)的目的。

- screen 屏幕对象

  height | width 获取屏幕的宽度和高度，包括顶部地址栏和工具栏

  availHeight | availWidth 获取屏幕的可用宽度和可用高度，不包括顶部地址栏和工具栏

  availHeight<height 但 availWidth==width

  对比：

  document.documentElement.clientWidth/clientHeight 可视窗口的宽高，会随着拖动浏览器变化





###### 滚动条距离，纵向距离|横向距离

可以进行读和写操作

document.documentElement.scrollTop (滚动条上部距离页面顶部距离)

document.documentElement.scrollLeft (滚动条左部距离页面最左侧距离)

无滚动条时，scrollTop或scrollLeft为0



###### 元素总高度

scrollHeight || scrollWidth 只读属性

元素的总高度|总宽度，包含滚动条中内容，

只要子元素超过父元素，不管滚动条是否显示，得到的都是子元素宽度|高度

**「**其实就是取子元素和父元素中宽度|高度的较大值**」**

子元素超过父元素高度时，不确定子元素高度时，通过父元素的scrollHeight获取子元素高度

当子元素高度<=父元素高度时，通过scrollHeight获取的是父元素的尺寸



==相关事件==

window.onscroll = function(){} 滚动滚动条时就触发该事件

window.onresize = function(){} 窗口拖动变化时就触发事件



offsetTop <= clientHeight + scrollTop 说明内容从页面外进入了可视区

offsetTop是==不变==的(只读不可写)，相对的==是页面顶部的距离而不是浏览器窗口顶部的距离==



