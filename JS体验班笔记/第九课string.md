##### string方法



[]

可以访问数组、字符串、元素集合，ie5678不支持

charAt()

可以访问字符串，无参数默认值为0

charCodeAt()

获得字符的ASCII码



==substring==

str.substring(startIdx)

返回下标从startIdx开始到最后的所有字符(包含最后),无参数默认为0,即获得整个str

若为负数，也取0；若大于str长度，返回空。



str.substring(startIdx,endIdx) 

返回下标从开始位置到结束位置的所有字符，但是不包含结束位置字符，返回个数为endIdx-startIdx

若startIdx==endIdx，返回空；若startIdx<endIdx，会智能地交换顺序。



==substr==

str.substr(startIdx,[length]) 从startIdx开始向后截取length个字符

[]可选参数



==slice==

str.slice(startIdx) | ‘hello’.slice(-1) -> ‘o’

返回从startIdx开始一直到最后的所有字符

startIdx为负数则代表从倒数第几位开始一直到最后 



str.slice(startIdx,endIdx) 从startIdx到endIdx，**不包括endIdx**，endIdx可为负数(代表倒数第几位)

‘hello’.slice(1,-1) -> “ell”

当startIdx与endIdx都为正数，startIdx<endIdx时，返回空，没有substring智能



##### indexof

variable.indexOf(str,[searchIndex])

返回str字符串==**首次**==出现在variable中的位置，从searchIndex位置开始查找(不写默认为0)

若不存在想找的字符，返回 **-1**



==split== 字符串转数组

通过分割符将字符串转换为数组

str.split([分割符])，参数可选，若不填分割符代表不分割，将str整体作为数组一项

- 分割符为“”空字符串

  每个字符都为数组一项

- 分割符存在于str中，分割符前后切分作为数组项，若在末尾，则还会把一个“”空字符串作为数组最后一项；若在开头则会把空字符串作为数组第一项；且分割符消失。每个分割符都会切开

- 分割符不存在str中，则str整体作为数组的一项



==大小写转换==

str.toUpperCase()  全转大写

str.toLowerCase()  全转小写



==数组的join== 数组转字符串

通过连接符将数组转换为字符串，一般与string的split一起使用

arr.join(连接符)， 参数默认为“,”

- 连接符为“”空字符串，把数组内容连成字符串，arr=[‘a’,‘b’,‘c’] -> abc
- 连接符为其他，则代替逗号



str.split(‘X’).join(‘X’) == str 先切开，再粘回去



‘hello’

替换某个字符的方法：str.split(‘e’).join(‘a’) -> ‘hallo’



==数组的trim()==

去掉str的开头空格们，和末尾空格们

输入内容的处理，防止用户输入空格

if val.trim()===“” 提示用户输入内容



新方法：

xxx.repeat(arr.length);

重复xxx字符重复n次，这样就不用循环和变量了，666