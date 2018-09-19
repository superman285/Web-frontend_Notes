

文档流：文档内元素的流动方向。

标准流

块级元素：从上往下流动

行内元素：从左往右流动，遇到边框，换行继续往右流

注:默认情况一个中文词语span被挤换行，会出现一个字在上行一个字在下行；

而一个英文词语(连着的)span被挤换行，会整个词出现在下行，不会某些字母在上行某些字母在下行。默认属性：word-break:break-word;

如果改成`word-break:break-all;`则每个字母都可以被挤到下行，不会整个单词挤到下行。



==难点：行内元素的高度怎么决定的？==



- 不同字体的建议行高不一样
- font-size大约是字母或汉字最高处到最低处的最大距离
- span的高度并不是由line-height撑开的





CSS引用方式：

内联 style 属性

html head中的style标签

外部引入 link

CSS中引入 @import url(./style2.css);





解决导航栏tab加上底边框后hover抖动技巧：

鼠标hover产生边框时，从无边框到有边框会出现位置的变化，所以会抖动

💡 提前给元素设置透明边框即可，鸡贼。

   border-bottom: 1px solid transparent;

如果因为border问题文字无法垂直居中，有以下方法：

- 再补上border-top(更好的方案)
- 调节line-height让文字再次居中



💡 再来个高端技巧，用伪元素after，还能配合动画做出酷炫效果，也不会抖动，因为是绝对定位
a标签要加相对定位。要影响谁就要给谁加transition
如果包含双重动画，在下划线变长的同时字体颜色也要渐变，则需要再在a标签本身处加transition

```css
.topMenu a::after {
    content: '';
    display: block;
    height: 3px;
    width: 0%;
    background: var(--red);
    position: absolute;
    margin-top: 3px;
    transition: width 0.2s linear;
}
.topMenu a:hover::after {
    content: '';
    display: block;
    height: 3px;
    width: 100%;
    background: var(--red);
    position: absolute;
    margin-top: 3px;
}
```





###### 布局

==过去==

- float + clear
- position relative + absolute
- display inline-block
- 负margin

==现在&将来==

- flex布局	单行或单列
- grid布局	多行多列



> **Flex特点**

- flex布局<font color="orange">**与方向无关**</font>
- flex布局可以实现<font color="orange">**空间自动分配**</font>、<font color="orange">**自动对齐**</font>
- flex适用于<font color="orange">**简单的线性布局**</font>，更复杂的交给grid布局





float属性

首次出现是为了图文混排设计的，

让文字可以环绕图片，图片头部与文字对齐而不是尾部对齐



各属性之间互相影响：不正交..

- margin V.S. border

- 列表小圆点 V.S. display

  li默认display为list-item，而不是block

  而一旦改为其他display，例如display:block，小圆点就不见了

ul

  li

  li

ul

- position|float V.S. display

  position设置为absolute之后|或设置float属性后，display会把inline和inline-block强转为block(table/flex不会被强改)，即脱标后内联会变为块级！！

  但是这个块级元素并没有块级特性，不会占一整行，不设置宽度的话要么为0要么被内容撑开(即使神功了display:block)。


- 变形transform V.S. fixed定位

  父亲变形后fixed定位不是相对于浏览器定位了，而是相对于父亲

- 浮动元素 V.S. 内联元素

  浮动初衷是图文混排，

  设置浮动后，浮动元素会位于块级元素上方

  但是块级元素的文字确不会被浮动元素压着，而是聪明地环绕于浮动元素周围

  所以浮动元素只是浮动于块级元素的上方(块级元素会钻到浮动元素下方)，

  但是一旦碰到inline或inline-block(内联元素不会钻到下方)，浮动元素不会浮动于他们上方，内联元素会环绕浮动元素

