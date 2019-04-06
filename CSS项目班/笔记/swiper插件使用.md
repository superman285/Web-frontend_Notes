##### swiper轮播模块

使用通用轮播模块结构 从官网复制



```html
<div class="swiper-container">
    <div class="swiper-wrapper">
        <div class="swiper-slide">Slide 1</div>
        <div class="swiper-slide">Slide 2</div>
        <div class="swiper-slide">Slide 3</div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>
</div>
```



分页器就是 轮播图下方的点点



初始化:

```javascript
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'vertical', // 垂直切换选项
    loop: true, // 循环模式选项
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
  }) 
```



往slide1、slide2、slide3里头填充内容，注意响应式布局思路，注意内容标签嵌套多层时可适当进行标签区分(使用非那么主流的html5标签)



样式调整时，注意插件本身是有样式的，不确定可以看一眼



动画的执行！

执行动画的对象

动画发生的时间或对象

(找出动画激活的时间条件)swiper附加了一个类名 swiper-slide-active 代表当前轮播图被激活

css播动画时所在类再带上类名 swiper-slide-active代表当前被激活才开始播动画



==插件参数==

创建对象时候的属性设置

loop:无缝轮播/循环

autoplay:自动播放



speed 速度



分页器组件对象下的属性

clickable:点击分页器可控制切换



window.onload = function() {
...
}

$(document).ready(function () {
...
})

$(function(){

})()