

CSS引用方式：

内联 style 属性

html head中的style标签

外部引入 link

CSS中引入 @import url(./style2.css);





解决hover抖动技巧：

鼠标hover产生边框时，从无边框到有边框会出现位置的变化，所以会抖动

💡 提前给元素设置透明边框即可，鸡贼。

   border-bottom: 1px solid transparent;

如果因为border问题不好对齐，就再补上border-top