##### 发请求

用form表单 get或post请求



用a标签 get请求





3. 基于js的请求 即xhr xmlhttpserver

   不会重新渲染整个页面



通过queryString方式 既可以post也可以get

如果用正文方式 只能post



获取表单元素的小技巧:

form.username

username为表单内标签的name

获取到了name为username的input元素



> 发请求的方式
>
> - 通过url (path,例如localhost/login这种)
>
> - 通过url的queryString (?xxx=yyy) 受长度限制不能传大数据,只能传字符串,
>
>   有缓存/历史记录/编码urlencoded格式问题
>
> - 通过请求头信息传 例如发content-type 发cookie等
>
> - 通过请求正文传 不支持get 要用post



path和queryString都基于url，会受到url长度限制

大数据可以用正文传



==提交==



1. 使用form表单，表单中的button(需要唯一?)或input(submit)自带提交功能
2. 不适用form表单，使用ajax提交，或者使用form表单但是给button或input(submit)取消默认行为 preventDefault



> Ajax是JS提交请求而不是浏览器的url提交请求 不用重新渲染整个页面
>
> 即无刷新提交



##### 代码示例 创 开 发 载

//创建

let xhr = new XMLHttpRequest();



//发送前的准备工作，open(method,url,async) 开启

//async参数默认为true，异步的

xhr.open(‘get’,‘/checkUserName?username=’+this.value,true);



//发送请求 发送

xhr.send();

console.log(1);

如果open参数设置为同步的，后面所有事情都需要等待请求完成才会处理后面的事情

会阻塞后续所有行为，如果请求没回来 所有操作都无效



onload事件绑定发生在事件完成之后，所以 onload就不生效了，事件都结束了 over了



解决方法：将onload放到send之前，这样就先触发onload再触发，再打印1



//响应完成(即下载完成)后触发的事件 加载 

//响应完成后,服务端返回的信息会保存在xhr对象下response属性下



xhr.onload = function(){

​    console.log(this.response)//or xhr.responseText

​    userNameMessageEle.innerHTML = this.response;

}



或者这种写法:

```js
request.onreadystatechange = function () {
   if(request.readyState === 4 && request.status === 200) {
     console.log(request.responseText);
   }};
```



---



一般都使用异步，

除非后续操作或行为严重依赖于ajax请求返回后的结果，才需要用同步，但是基本废弃了



参数同步和异步

两种情况:

- 异步，将onload加载放在打印1之后，结果是先打印1再拿到返回结果；

  将onload加载放在send之前，结果是先打印1再拿到返回结果；

- 同步，将onload加载放在打印1之后，就只会打印1但拿不到返回结果了，因为还没等到拿到就已经结束了 (一定避免这种情况) 

  它只在请求完成后触发一次，没触发就算了 不会等你了 而不是一直不停地申请触发

  将onload加载放在send之前，结果是先拿到返回结果再打印1。

> 求稳妥，可以先写onload，再写send



==注意==

提交数据方式

若通过queryString提交的数据只支持url编码字符串(urlencoded)

通过正文发送，提交的数据支持多种格式(纯文本|url编码|formData等等),需要在发送的请求头中设置提交的数据的content-type



queryString方式 open的url参数带查询参数即可,send()不用带参数,简单四步 创开发载



正文方式 

xhr.setRequestHeader(‘content-type’,‘application/x-www-form-urlencoded’)

xhr.send(‘content=’ + content.value)



---



后端代码:

接口名为checkUserName

router.get(‘/checkUserName’,async ctx=>{

​    let {username} = ctx.request.query;

​    if(username==‘’){

​        ctx.body = ‘用户名不能为空’;

​	return;

​    }



let sql1 = “select * from users where username=?”

let [[user]] = await db.query(sql1,)

​    ctx.body = “可以注册”

})



不同提示对应前端不同颜色的文字，比如可以注册和不能注册

后端经常这么处理 返回一个约定好的数据结构json

{“code”:number}



ctx.body = {

​    code: 1,

​    message: ‘用户名不能为空’

}

ctx.body = {

​    code: 2,

​    message: ‘用户名已经被注册’

}

ctx.body = {

​    code: 0,

​    message: ‘可以注册’

}

koa框架自动会将对象转为json格式(当把对象赋给body时)





xhr.send()

get方式不支持正文提交 所以send后面不写参数

post方式支持正文提交，send后可加参数 (提交的内容)

post提交一般需要设置头信息

xhr.setRequestHeader(‘content-type’,‘application/json’)



map相当于开了个循环

keys.map((key,index)=>{

​    return key+‘=’+values[index]

})



==知识点==

前端处理后端传来的各种类型的数据

如果是json，需要

let data = JSON.parse(xhr.response); //转成对象格式，方便使用

如果是string，就这么用

如果是xxx



根据content-type来判断数据类型，从而使用不同处理方法，可借助MIME来处理不同类型



xhr.getAllResponseHeaders() 把整个响应头返回

xhr.getResponseHeader(‘content-type’) 返回响应头指定的某个属性



整个响应头包括：connection,content-length,content-type



urlencoded格式发data写法：

使用&来连接

```javascript
xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
xhr.send('content=' + content.value+"&singerid="+window.location.href.split('/')[4]);
```



##### 通识:同步 | 异步

有些操作是需要花费时间去完成，比如下载电影->看电影

同步：盯着电影下载完成后 再看电影

异步：后台静默下载(同时做些其他事情)，当电影下载完成后会通知下载完成了



阻塞/非阻塞 

一件事情一件事情地做，阻塞(一件事情做完后再做另外一件)，非阻塞(一件事情没做完就可以做别的)

同步/异步

事情的通知方式，自己主动观察(同步) | 自动通知(异步)





##### ajax框架

- jQuery
- axios | 在vue中很常用



自己封装一个ajax框架



let opts = Object.assign({method:‘get’,url:‘’,data:‘’})

###### jQuery

jq头信息默认是urlencoded，有时返回的是json，但是一看头信息还是urlencoded(不匹配)

可以用contentType字段指定发给服务器的头信息的content-type (请求头)



格式:

```javascript
$.ajax({
                type: "GET",
                url: '/checkUserName_login',
                data: {
                  username: this.value
                },
    			//url: '/checkUserName_login?username='+this.value,
    		   contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
    		   dataType: "text", //可不写，jq根据MIME信息智能判断
                success: function(data,status,jqxhr){
                    console.log('data:');
                    console.log(data);
                    /*console.log('status:');
                    console.log(status);
                    console.log('xhr:');
                    console.log(xhr);*/
                }
            })
```

https://www.jquery123.com/jQuery.ajax/

可写在对象中的属性



success的回调函数有三个参数

服务器返回的数据，状态，xhr对象

xhr对象有很多可用属性和方法，可借助这儿的参数获得



==注意点==

data为对象，内容为键值对形式

在get请求中，data将作为queryString附加到url之后(例如?username=‘superman’)

或者这种写法: url: ‘/api?username=’+this.value

data写法更好

queryString采用以下两种写法都行，jq做了智能的封装，能判断各种类型，很聪明

```
data: 'username='+this.value,
//对象写法或string写法都可以，因为jq做了智能的处理，支持各种格式
data: {
  username: this.value
},
```



💡重点

###### axios框架

这个框架功能比之jQ的ajax更简单简洁 明晰 专一为ajax而生

使用说明: https://www.kancloud.cn/yunye/axios/234845



里头借用了一个很好的框架 qs

url解析，queryString和对象互转



request header 的content-type默认为json，与jq不同



格式:

axios({

​    url: ‘’,

​    method: ‘’,

​    data:{

​    },

​    headers: {‘content-type’:‘application/json’}

​    timeout: 1000

})



这儿的data没有jQ的智能，只能适用于post|put|patch，没有jq的作为get的queryString功能

get+查询参数 url方式

```javascript
url: '/checkUserName?username='+this.value,
```



axios中想使用queryString也可以，但是不是放在data中，而是放在params字段

params: {username:‘wzc’,password:‘123’}

其实axios区分更合理，axios把正文和queryString区分开了，

分为data和params



get请求 使用params作为请求参数queryString

post请求 使用data作为请求体



跨域相关的配置

- withCredentials
- proxy