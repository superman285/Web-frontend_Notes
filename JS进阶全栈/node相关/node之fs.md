##### fs文件系统模块

增 删 改 读

let content = fs.readFileSync(‘../myWeb/index.html’)



文件操作是基于二进制流数据，返回值是二进制



res.write(content.toString())



前后端分离的思想 利用这个



两次请求，如果一个页面A里头还有别的链接，请求页面A时会造成二次请求，再请求A页面中的别的链接



两个请求是互相独立的，其实没有依赖关系，只不过第二个请求是浏览器来发的



不能每一个url单独处理，不然要疯

应该按照某个规则来决定条件



let urlStr = res.url;

let file = “../myWeb” + urlStr;



==获取后缀==

let pointIndex = file.lastIndexOf(‘.’);

let ext = file.substring(pointIndex+1);



let mime = ‘’;

switch(ext) {

​    case ‘css’:

​        mime = ‘text/css’;

​        break;

​    case ‘html’:

​    default:

​        mime = “text/html”;

​        break;

}



nginx的mime.types 文件里头可以看到不同后缀对应的文件名



可以借用npm的mime模块





###### 路由的含义

url与文件/内容/组件的 映射关系 | 分发

输入一个url，给你提供一个对应的东西出来



即某个key与某类value的映射关系