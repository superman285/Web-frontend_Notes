#### 基础

class本质是函数 可以被赋给变量；可以立即执行；但是不会函数提升

默认严格模式

用()调用class时，必须要用new | 类的构造函数调用必须借助new

class Person{

​    constructor(name=“zhangsan”,age=18){

​        this.name = name;

​        this.age = age;

​    }

​    a = 1; //私有属性

​    say(){

​        console.log(this.name,this.age)

​    }

​    eat(){

​        console.log(“I can eat”)

​    }

}



constructor中的属性为私有属性(每个实例的似有所属性都不同)

constructor可以显式地返回其他对象e.g.return Object.create(null);(不写的话返回this)

class中的方法为公有方法(每个实例都有同样的方法)

即使new Person().say()也可以



class中定义的方法 <font style="color:white;background:mediumseagreen;padding:3px 6px;font-weight:bold;line-height:28px">是不可枚举的</font>

Object.keys(Person.prototype) 打印出来的为空数组



1. new Person()
2. new Person

以上两种方式都可以产生实例对象



#### 变种写法

1.

let Person = class{

​    say(){};

}



2.

let person = new class{

​    constructor(name=‘zhangsan’){this.name = name;}

​    say(){console.log(this.name)}

}(‘lisi’)



console.log(person) 



##### 技巧 公有属性的私有方法 利用symbol

```
const eat = Symbol();

class Person{

    say(){console.log(‘say’)}
	//symbol
    [eat](){console.log('eat')}
    
    prisay(baz){children.call(this,baz)}
}

function children(baz){console.log(baz)}

```



#### 静态属性静态方法

class Person{

​    static sMethod(){};



​    static sProp = 10;    //最新写法

}

静态属性 Person.sProp = 10 //老的写法

调用: Person.sMethod() | Person.sProp





#### 继承

extends关键字



公有方法可继承；静态属性(方法)不可继承



Child继承自Parent

class Child extends Parent{}



💡易忽略

派生类(儿子)必须使用super来指定this(constructor中调用super)，否则直接调this会报错❌

而且，super(param)无法直接从父类那儿拿到参数的值，需要在自己的constructor中传入参数才能拿到值

```javascript
class Child extends Parent{
    constructor(age="18"){
        super(name);
        this.type = 'child'
    }
}
```



##### super作用

1. 作为父类的构造函数

2. 当做对象使用
   - 在普通方法中指向父类的原型对象 fatherClass.prototype
   - 在静态方法中，指向**父类** fatherClass