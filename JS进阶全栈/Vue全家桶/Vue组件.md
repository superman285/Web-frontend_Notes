- 路由组件(页面组件,比如一个页面,和url挂钩)

- 功能组件(比如一个评分啊、轮播图啊,用于页面组件中)



简单点说，组件其实就是自定义的html标签 封装好的可以复用的vue实例。

vue实例本质上也是组件，vue实例也有template

如果给实例设置了el，el元素的内容就是template(el改成template一样的？)



指令自定义完成后作为标签的属性 进行使用



组件定义完成后作为标签 进行使用



组件->自定义标签

- 结构(样式)
- 数据
- 行为



💡: template结构只能有一个根节点！



Vue.component(‘tab’,{

​    //组件的结构(样式)，注意：模板中的结构只能存在一个根节点 template

​    template: \`

​	\<div @click=“fn”>我就是结构{{title}}\</div>

​        \<div>我就是结构2\</div>  //❌错误，只能有一个根节点，这行不能有

​    `,

​    //vue实例的data可以是对象，但组件的data必须是函数且必须返回一个对象，

​    //返回的对象才是最终data

​    data(){

​        //做初始化的数据处理后再返回数据

​        return {

​            title: ‘superman285’,

​        }

​    },

​    methods: {

​        fn(){console.log(‘...’)}    

​    }

});



组件可以看做一个函数，也可以接收参数，因为组件通过标签方式使用，参数传入通过标签属性传进来

注意💡:如果传入的数据不是字符串，比如是对象、数组等，最好使用v-bind 否则会视为字符串



==组件与组件之间的数据不同享，组件与父级之间的数据不共享== 与js作用域不同 无法访问父级数据



定义外部使用的时候可以传入哪些属性，数据可以通过this.直接访问



==组件的props和data区别:==

props 存放接收 组件外部调用的时候传入的数据



data 存放组件内部私有的数据 组件的data必须是函数 不能是直接对象



props中和data中定义的数据不要重名！



ctx.set(‘Access-Control-Allow-Origin’,‘*’)



##### props

定义之后 标签中就可以带这个属性了



Prop 是你可以在组件上注册的一些自定义特性。当一个值传递给一个 prop 特性的时候，它就变成了那个组件实例的一个属性(data)。





```javascript
props:['title','id']
data中:
post: {
id: 1,
title: 'My Journey with Vue'
}
```

```html
<blog-post v-bind="post"></blog-post>
等价于
<blog-post
  v-bind:id="post.id"
  v-bind:title="post.title"
></blog-post>
```



props 数据从标签的属性传到了innerText

data 数据直接从data传到innerText



数据从父亲的data传到儿子的prop



数据单向下行

父亲的prop变化了 儿子也知道

儿子的prop变化了 父亲不知道

儿子太多 父亲只有一个



##### 调用方法

1.

子组件调用父组件,要打报告emit,当然 父亲需要开个on来监听(就像solidity) v-on:eventName=“func”

父亲需要监听，儿子需要汇报

调用父组件上的方法使用$emit('eventName',param)

报告的是事件名不是方法名 注意了



2.

父组件调用子组件,直接找到儿子,访问方法 简单粗暴.. 也不需要监听了 

父亲和儿子啥都不用准备

儿子有ref

父亲使用this.$refs.child.chMethod()



儿子:

props: [‘data1’]

父亲:

\<sonComponent data1=‘love you’\>\</sonComponent\>



3.

平行组件互相调用，直接用vuex呗 全局都可以随便访问到



通过prop向子组件传递数据

https://cn.vuejs.org/v2/guide/components-props.html

https://cn.vuejs.org/v2/guide/components.html



##### 组件定义

在js文件中用Vue.component({})定义全局组件 不支持css

在vue文件中定义单文件组件 (更优秀)



##### slot插槽

很简单 如果想在==组件标签中==加上内容(包括文本和其他标签)

那就在组件定义时就在中间加上`<v-slot>defaultContent</v-slot>`

defaultContent为可设置的默认内容

如果加了默认内容 当组件标签间不加内容时 就会渲染出默认内容 defaultContent

组件标签间加了内容 就会取代掉默认内容 不显示默认内容

插槽命名

v-slot:nameA



##### 注意💡事项

如果组件拿到的数据 是从外部传入的 不是自己私有的

千万不要轻易修改，否则会影响到别人!!

可以把事件往上传递给父级

this.$emit(‘eventName’,ev)

父级: 标签@eventName=‘xxx’ 再回去看下例子