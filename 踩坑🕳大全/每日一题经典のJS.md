> **2018.10.12** 考察对象与字符串类型的转换

```js
var a = {},
    b = {key:'b'},
    c = {key:'c'};
a[b] = 123;
a[c] = 456;
console.log(a);
```

答案是{[object Object]: 456}

a[b]导致类型自动转换，对象转换为字符串，所以b和c都被转换为[object Object]，然后作为a对象的键，456又把123覆盖了，所以输出[object Object]。



```js
var a = {},
    b = {key:'b'},
    c = {key:'c'};
a.b = 123;
a.c = 456;
console.log(a);
console.log(b);
console.log(c);
```

这个就是正常的将b和c作为a对象的成员啦，所以输出的a是{b:123,c:456}

b和c本身的值并不受影响，输出b还是{key:‘b’}，输出c还是{key:‘c’}。



> 考察对象键值为数字时，输出时候的自动排序
> 考察alert输出会将类型自动转换为string，很容易忽略

```js
var obj = {1:1,2:2};
function ak(){
	var obj = {2:2,1:1};
	return obj
}
console.log(ak());
alert(ak())；
```

第一个输出{1:1,2:2},第二个输出[object Object]

第一个输出 11 22 是因为 其实obj已经被重新赋值了 但是对象给自动排序了 数字小的键排在前，所以 11 22

若想不改变排序可以把键值弄成字符串类型

第二个输出[object Object]，是因为alert输出时会自动转换类型为string类型，对象被转为string时是[object Object]



> 考察，函数作用域问题，是声明时候的作用域，而不是赋值时候或者调用时候的作用域

```js
function a() {
   var i = 0;
  function b() {
     alert(++i);
}
return b;
}
var c = a ()
c();
```

答案是1，声明时候的作用域，i为0，而且是先自增，再输出。



> dom选择器的querySelector属性选择器，切记！
>
> querySelector(“[href=#top]”) ❌
>
> querySelector(“[href=‘#top’]”) 正确✔ 我的天。太容易错了