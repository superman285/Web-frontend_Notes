#### 来点Sass

***



简单入门：https://www.sass.hk/guide/



==变量声明和引用：==

- 变量声明：

  ```
  $highlight-color: #F90;
  ```

- 变量引用：

  ```scss
  $nav-color: #F90;
  nav {
    $width: 100px;
    width: $width;
    color: $nav-color;
  }
  ```



==嵌套css规则：==

```scss
#content {
  article {
    h1 { color: #333 }
    p { margin-bottom: 1.4em }
  }
  aside { background-color: #EEE }
}
```

花括号来表示嵌套，嵌套即左花括号"{"后的为后代(所有后代，包括直接后代)。

上述sass编译为css：

```css
 /* 编译后 */
#content article h1 { color: #333 }
#content article p { margin-bottom: 1.4em }
#content aside { background-color: #EEE }
```



==父选择器的标识符&：==

错误写法：

```scss
article a {
  color: blue;
  :hover { color: red }
}
```

因为花括号代表嵌套关系，所以会编译为 

article a :hover（a后有空格) 而不是 article a:hover，所以无法正确识别。

这时&要出马了，&代表的就是最外层左花括号"{"左边的==***父亲***==

```scss
article a {
  color: blue;
  &:hover { color: red }
}
```

编译为 article a:hover{ color: red }，正确==✔==



==群组选择器的嵌套：==

```scss
.container {
  h1, h2, h3 {margin-bottom: .8em}
}
```

编译为：

```scss
.container h1, .container h2, .container h3 { margin-bottom: .8em }
```

写的时候多用一个花括号，少写了两边.container，舒服！



==子组合选择器和同层组合选择器：>、+和~：==

这三个选择器与后代选择器(空格)不同，不用再加&来表示父亲，也不会有问题。

```scss
article {
  ~ article { border-top: 1px dashed #ccc }
  > section { background: #eee }
  dl > {
    dt { color: #333 }
    dd { color: #555 }
  }
  nav + & { margin-top: 0 }
}
```

正确编译为：

```scss
article ~ article { border-top: 1px dashed #ccc }
article > section { background: #eee }
article dl > dt { color: #333 }
article dl > dd { color: #555 }
nav + article { margin-top: 0 }
```

到时测试下是否好使



==嵌套属性：==

```scss
nav {
  border: {
  style: solid;
  width: 1px;
  color: #ccc;
  }
}
```

冒号跟花括号，就代表"-"，编译为：

```scss
nav {
  border-style: solid;
  border-width: 1px;
  border-color: #ccc;
}
```

再来个例子：

```scss
nav {
  border: 1px solid #ccc {
  left: 0px;
  right: 0px;
  }
}
```

编译为：

```scss
nav {
  border: 1px solid #ccc;
  border-left: 0px;
  border-right: 0px;
}
```



***



==后面还有@import，@mixin 导入、混合器等用法，到时再深入学习==





💡技巧:

父子的命名可采用命名空间法

例如:

ul.footbar>li.footbar-item*5

scss可以这么写:

.footbar {

​    display: flex;

​    &-item{

​        flex: 1;

​    }

}

太方便了！