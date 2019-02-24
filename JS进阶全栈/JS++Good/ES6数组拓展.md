部署了 迭代器接口 Symbol.iterator后



就可以使用拓展运算符…了



##### 构造函数上的方法 

###### Array.of 

解决 new Array(4) 是生成4个空格的情况

Array.of(4) 生成单个元素4



###### Array.from

将类数组(NodeList等)转化为数组 或者将带有部署迭代器接口的对象转化为数组



数组去重

Array.from(new Set(arr))



##### 实例的方法



###### arr.fill(value,start,end) 会改变原数组

将数组某位置的元素替换为value

fill(value) 数组元素全替换为value值

fill(value,start) 从索引start到最后全替换为value

fill(value,start,end) 索引start直到索引end-1 都替换为value



包括start不包括end



###### copyWithin(target,start,end) 会改变原数组

将数组的一部分复制到数组的另一位置

start默认值为0,end默认值为length(即最后一个)

[1,2,3,4,5,6].copyWithin(1,2,4)

将索引2,3(索引2到4不包括4)的内容替换到索引1处来

=>1,3,4,4,5,6 替换的长度即end - start





###### findIndexOf

return后写判断条件，返回满足条件的第一个索引，没搜索到返回-1

比indexOf 优秀的点是 可以找出NaN哦



###### includes()

方法用来判断一个数组是否包含**一个**指定的值，根据情况，如果包含则返回 true，否则返回false。

适用于NaN哦