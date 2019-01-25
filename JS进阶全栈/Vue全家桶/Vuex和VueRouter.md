##### VueRouter vue前端路由

vue页面开发中 每一个要实现的独立页面内容都是通过组件来完成的





router 路由管理者 新建Vue对象需要配置此项

route 单个路由 对象

routes 路由们 (定义路由组件关系映射关系的数组)

routes[route1,route2]



route{name:xx,path:yy,component:zz} path即url,component即组件名,name不是必须的





router的组件 router-view router-link



router-view : 相当于占位符,用于展示与当前url匹配的组件内容(route对象中的component)



router-link : 会被渲染成a标签，但是会增加click事件，阻止默认行为(跳转和发请求)，

根据hash模式或history模式进行不同处理；

history模式增加pushState事件，hash模式用上了onhashchange事件(回顾下确定)



切记 把url放在地址栏然后回车 是通过浏览器发请求给后端 如果没有配后端路由 就会挂掉

但是在页面上点击标签 就没有给后端发请求





动态路由

path-to-regexp模式  path: ‘/:id’





$route 当前路由信息 包括path、params等属性

$router 为new出来的router对象实例



传数据

$route.params.id 

$route.query.id 通过查询参数?



router-link激活的类名 router-link-active(包含匹配) router-link-exact-active(精确匹配)

==💡坑点:==

可能需要默认选中项(第一项)进行精确匹配，其他项进行包含匹配

默认项router-link标签加上属性exact即变成精确匹配



router-link tag属性 不默认渲染成a 而是渲染成写在tag后的标签



==嵌套路由两个核心==

routes选项中设置路由的包含关系，在某个route对象中设置children routes数组

子路由组件出现在父级路由组件页面中的哪个位置



==命名路由== 更方便以后管理和修改路径



==命名视图== router-view起名 一个页面可能包含多个页面组合 用name来标识他们



==重定向==

{path:‘/list’,redirect:‘/l’} 访问list时重定向到l







###### 路由组件传参

在一个组件中复用另一个组件，都统一从props中拿，而不是从$route.params或\$route.query中拿





###### 路由守卫

最全解释:

https://router.vuejs.org/zh/guide/advanced/navigation-guards.html



==全局前置守卫== 导航被确认之前

router.beforeEach((to,from,next)=>{//路由跳转前的业务逻辑})

next()调用 才可以正常跳转到路由页

当路由发生变化时，全局beforeEach就会被触发，

我们可以在这个函数中加入一些业务处理，例如权限验证，如果通过则调用next进入目标路由页

demo例子: 登录验证 如果没登录 点其他页都跳到登录页，登录了就正常跳转



to 即将要进入的目标 ==路由对象==

from 当前正要离开的 ==路由对象== 如果name看不出来可以看它的fullPath来判断是哪个路由





==全局后置守卫== 导航被确认之后

router.afterEach



==单独路由独享的守卫==

某一个路由想做一些与全局无关的事情 多个路由的话用全局守卫

路由对象中配置beforeEnter(to,from,next){}

{name:xx,path:yy,component:zz,beforeEnter(to,from,next){}}



与在全局用路由守卫 然后单个路由加上meta



多个里头有一个有特殊需求 可以用路由独享守卫



多个里头有多个有特殊需求 可以用全局守卫+ 多个路由元信息



###### 路由元信息meta

在路由中配置

加入可供查看的一些路由的信息 做一些批量xx或者批量不xx的工作



###### 路由跳转

router.push({name: ‘login’}) 跳转到login路由页

在路由守卫中可以简写为 next({name:‘login’})



###### 组件内的守卫 

类似生命周期

to from next

beforeRouteEnter  不能获取this!!! 因为组件都没渲染出来呢!! 用to就相当于this.$route了

这里头的next(function(vm){}) function参数vm就相当于组件对象实例！



beforeRouteUpdate 例如 /login/:id 这种 由login/1切换到login/2 就走了beforeRouteUpdate

beforeRouteLeave



写了的话 一定要处理好调用next()的条件和逻辑!! 否则无法正常执行

不写的话 相当于默认都无条件调了next() 没有特殊判断逻辑





###### 路由监听

watch: { ‘$route’(to,from){}} 



##### VueX状态管理



不同组件之间想共享数据方式

- 把数据向上层提，提到多个组件的上层，大家都能访问

  需要修改时往上汇报$emit 父亲来改，可能需要不停地向上坑爹

- vuex状态管理



把应用中需要公用的数据都交给一个人管理，使用时不需要层层传递，扁平化



这时不要定义data(){}



定义computed计算属性 

当仓库的数据发生改变时，该计算属性也会更新 (用data的话数据变了可能不会对应更新)

return this.$store.state.dataA





==过程==

通过Vuex.Store创建一个存储数据的仓库

new Vue时配置加入store 关联起来 然后就可以通过this.$store访问仓库啦



组件就不用自己调methods了

通知仓库Store去处理就可以了

this.$store.commit(‘eventName’)



仓库的处理方法统一在mutations对象中

mutations对象的方法 第一个参数为state 然后可以改state中的数据，第二个参数为传入来的参数

第二个参数叫载荷Payload (传进来的实际参数)



---



不要data了 把需要多个地方共享的数据 放在Store对象的state中

属于单向绑定