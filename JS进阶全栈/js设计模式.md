array.forEach((value,index)=>{//do somethins})



for(let index in arr){console.log(array[index])}



for(let value of arr){console.log(value)}

或for(let value of arr.values()){console.log(value)}

求索引方法for(let value of arr.keys()){console.log(value)}



==工厂模式==

面向对象的封装函数

函数返回出对象

原料，加工，出厂



new调用函数时，函数中的this指向创建出来的对象，这种方式不写return也有隐式返回(返回this)

其他方式没有隐式返回，构造函数。

不带new直接调用函数(如 funName())，这时this指向window





> 注意：
>
> b.push(1)
>
> 和b = [1,2,3,4]
>
> 赋值会生成新的内存区域，而不是改原来的
>
> 所以 a = b
>
> b.push(1)会影响a
>
> b = [1,2,3,4]不会影响b





原型：改写对象下面的公用方法或者公用属性

让公用方法或公用属性内存中只存在一份，提高性能。

prototype要写在构造函数下

==优先级问题==

arr.number = 10

Array.prototype.number = 20

console.log(arr.number) 输出10

如果arr.number这句注释掉，那就会输出20，实例的属性优先级更高

构造函数.prototype.functionName = xxxxx；这时的this指向的是构造函数构造出来的实例



> 构造函数中写对象属性 this.property = xxx
>
> 构造函数外写对象方法，用构造函数.prototype.functionName来声明方法





