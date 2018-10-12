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