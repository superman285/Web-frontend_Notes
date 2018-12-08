##### 函数调用方式

- 主动调用，加();this为window或global(node环境)
- 事件调用，.onclick = function(){};this为事件左侧的元素，若里头还嵌套函数 
- 定时器调用，相当于window调的；this为window或global

```javascript
var a={b:function(){setTimeout(function(){console.log(this)},100)}}
```

this为window



特殊的箭头函数，不会改变this指向，仍为当前上下文this



Interfal:间歇性

Timtout:延时





var a;

a = xxxx;



a = null; 可以清空引用，让js把空间回收，a的空间释放



##### setInterval

调用函数的实参写在哪儿？

比如 function fn(a,b){}

setInterval(fn(a,b),1000); ❌

setInterval(fn,1000,a,b); ✅

匿名：setInterval(function(a,b){},1000,1,2); ✅



---



- 不会阻塞代码的执行

- setInterval的时间小于16按16处理(16ms)。

- setInterval有返回值，返回值为该定时器编号，开启定时器时，系统会自动给定时器打上一个编号，就代表当前这个定时器，这个编号会作为定时器的返回值返回出来，从1开始

- 清除定时器clearInterval(timerID),必须带参数

  - 清除的是一个编号，清除定时器的引用

  timerID = setInterval(function(){ if(xxx){clearInterval(timerID)} },1000)



##### setTimeout

也需要关闭，clearTimeout(timerID)，必须带参数，例子，移开后一会儿消失





clearInterval和clearTimeout有容错性，清除的是null、0、undefined时也不会报错



> **setInterval制作动画**

点击一次移动一下，相当于模拟超级无敌高速点击



同时多个定时器作用域一个元素，可能会让速度越来越快，想解决问题可以清除上一个定时器timerID



获取最终的样式值(优先级最高的、最新修改后的、实际表现出来的值)

包括样式表、行间、js改动过后的 都可能被获取到

getComputedStyle(obj)[attr]

obj为获取的元素，attr代表任意样式属性(包括未知变量)，

getComputedStyle(oDiv)[‘width’]或getComputedStyle(oDiv).width





##### 过渡结束事件

transitionEnd，过渡结束后触发的事件，与on事件绑定不同，不能用ele.transitionEnd

要用addEventListener





##### 无缝轮播用过渡结束判断

监听事件时根据下表来判整个图 移动完成(移到了最后)





- 自动无缝轮播最后一张会顿一下再过去是因为

  将图片下标置为0的操作是在setInterval中操作的 所以顿了一下

  如果把下标置0操作在运动结束后就操作，然后setInterval再操作一次就不会顿一下了

  尝试一下