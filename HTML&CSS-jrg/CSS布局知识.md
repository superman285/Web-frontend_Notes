## CSS布局知识



==常见简单布局:左右布局，左中右布局。==



#### 左右布局实现

- > **使用浮动float**

  可将左部分区域和右部分区域的float属性都设置为left，然后使用margin来调节两区域之间的间距。

  或者将左部分区域设置float:left，右部分区域float:right，用margin调节两区域间距。

  `注意：使用float会造成元素脱标，要注意宽度的设置，要给父元素清除浮动`


- > **使用inline-block**

  将左右部分区域display属性均设置为inline-block，然后左右区域即可在同一行显示，达到左右布局效果。

  `注意：inline-block元素之间会因为换行导致有空隙，可用margin来调节间距。`



- > **使用flex布局**

  将父容器display属性设置为flex，justify-content可以调节多种排布方式，居于两侧、居中、开头对齐、末尾对齐等。

  可以用flex-basis来设置左右区域的具体宽度值，也可用flex-grow来设置左右区域占父容器空间的比值。



#### 左中右布局实现

==**和左右布局一样，可采用上述三种方式来实现**==

---

- 使用float方式来布局
- 使用inline-block方式来布局
- 使用flex弹性布局方式



#### 水平居中实现

> **行内元素的水平居中**

- 给父元素设置text-align:center;
- 给父元素设置display:flex;justify-content:center;

> **块级元素的水平居中**

- 元素宽度确定时，给元素设置margin:0 auto;
- 元素宽度不确定时，
  - 给父元素设置display:flex;justify-content:center;
  - 给父元素设置display:flex;子元素设置margin:0 auto;
  - 给父元素设置display:grid;justify-content:center;
  - 给父元素设置display:grid;子元素设置margin:0 auto;



#### 垂直居中实现

> **行内元素的垂直居中**

- 设置父元素的高度height与行高line-height一致，则父元素内的行内子元素会垂直居中显示
- 给父元素设置display:flex;flex-direction:column;justify-content:center;
- 给父元素设置display:flex;align-items:center;
- 给父元素设置display:flex;子元素设置margin:auto 0;
- 给父元素设置display:grid;align-content:center;
- 给父元素设置display:grid;子元素设置margin:auto 0;



> **块级元素的垂直居中**

`💡 flex布局和grid布局的方法对行内元素或块级元素都适用`

- 给父元素设置display:flex;flex-direction:column;justify-content:center;
- 给父元素设置display:flex;align-items:center;
- 给父元素设置display:flex;子元素设置margin:auto 0;
- 给父元素设置display:grid;align-content:center;
- 给父元素设置display:grid;子元素设置margin:auto 0;

  

- 元素高度确定时，

  - 父元素设置相对定位，子元素设置绝对定位，子元素top:50%;margin-top:-元素高度/2;
  - 子元素设置相对定位，子元素top:50%;margin-top:-元素高度/2;

  - ```css
    .father:before,.father:after{
                content:"";
                display:block;
                height: (父元素高度-子元素高度)/2;
    }
    ```

- 元素高度不确定时，

  - 父元素设置相对定位，子元素设置绝对定位，子元素top:50%;translateY(-50%)/translate(0,-50%)
  - 子元素设置相对定位，子元素top:50%;translateY(-50%)/translate(0,-50%)



#### 水平垂直居中万用大法

`行内元素、块级元素均可` ==**flex布局大法和grid布局大法**==

- 给父元素设置display:flex;justify-content:center;align-items:center;
- 给父元素设置display:flex;给子元素设置**margin:auto;**
- 给父元素设置display:grid;justify-content:center;align-content:center;
- 给父元素设置display:grid;给子元素设置**margin:auto;**