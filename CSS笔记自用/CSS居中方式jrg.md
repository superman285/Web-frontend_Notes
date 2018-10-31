## 水平居中



flex

grid

margin: 0 auto;



## 垂直居中



flex (移动端用的多)

grid



给parent设置

display:table-cell;

vertical-align:middle;



单行文本垂直居中，其实不用设置line-height与height相同，height可以不用设置，直接设置line-height，则行高会把高度撑开了。



## 水平垂直居中

flex

grid



.container {

​    position: relative;

}

.child {

​    position: absolute;

​    top: 50%;

​    left: 50%;

​    transform: translate(-50%,-50%);

}