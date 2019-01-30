##### 控制台console用法

console.dir(xxx)

可以打印出更详细的层级，当想查看对象的完整构成时可用。

可以打出函数对象的所有包含内容，包括prototype，\_\_proto\_\_等属性。

log做不到 很弱吗？




array共用方法 push pop shift join

function共用方法 call bind apply



##### 伪数组改造为真数组方法

很多js获取到的内容为伪数组，例如arguments、HTMLCollection、NodeList等

Array.prototype.slice.call(arguments|HTMLCollection|NodeList)返回一个真数组

即可改造成功,相当于获取到伪数组中所有带数字索引的项 

相当于xxxxx.slice.call(arg,0)



##### 数组和遍历相关的方法

forEach map filter find findIndex



==共同点==

五个方法均把函数作为参数，然后这个函数的第一个param为元素值，第二个param为元素索引

arr.method((value,index)=>{});



==差异点==

forEach无返回值 一般是根据需要进行循环操作 其他四项均有返回值

map的函数 return后的语句作为返回值塞入新结果数组中 生成新数组

filter的函数 return后的语句作为判断条件 满足条件的原数组元素 塞入新结果数组中

find的函数 return后的语句作为判断条件 满足条件的原数组第一个元素 为新返回结果

findIndex的函数 return后的语句作为判断条件 满足条件的原数组第一个元素的索引 为新返回结果



**举个**🌰

```javascript
var arr = [1,2,3,4,5]
var nr1 = arr.forEach((x,y)=>{return x+y}) //nr1 = undefined

var nr2 = arr.map((x,y)=>{return x+y}) // nr2 = [1,3,5,7,9]
var nr2_2 = arr.map((x,y)=>{return x>2}) //nr2_2 = [false,false,true,true,true] 把x>2的判断结果布尔值塞进了新结果数组

var nr3 = arr.filter((x,y)=>{return x+y}) // nr3 = [1,2,3,4,5] x+y这个语句肯定是真 全都满足
var nr3_2 = arr.map((x,y)=>{return x>2}) // nr3_2 = [3,4,5] 只有3、4、5满足x>2为true

var nr4 = arr.find((x,y)=>{return x+y}) //nr4 = 1 x+y这个语句肯定是真 全都满足 取第一个为1
var nr4_2 = arr.find((x,y)=>{return x>2}) //nr4_2 = 3 只有3、4、5满足，取第一个为3

var nr5 = arr.findIndex((x,y)=>{return x+y}) //nr5 = 0 x+y这个语句肯定是真 全都满足 取第一个的索引
var nr5_2 = arr.findIndex((x,y)=>{return x>2}) //nr5_2 = 2 只有3、4、5满足，取第三个的索引
```



