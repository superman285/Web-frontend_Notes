### HTTP入门

***

1.www万维网来历

2.HTTP+HTML+URL

3.curl命令

4.请求与响应



www来历

李爵士发明了第一个网页、第一个浏览器、第一个服务器。



1950年~1960年已经有了互联网雏形，但1990年之前没有网页。

当时人们对互联网的使用集中在email，

1965年email被发明，成为互联网杀手级应用。

1971年@符号被发明

人们用FTP下载文件附件

1980~1990年间人们迫切需要更好的上网方式，很多方案被提出，例如HTTP和Gopher，后来HTTP因为其易用性被提出。

当时的邮件内容都是普通文本或类markdown形式的文本，人们需要一种超文本用作页面跳转，也就是现在说的<a>标签，当时超文本方案有很多，HTML只是其中之一。



这种背景下1989~1992i案件，李爵士发明了world wide web(WWW)，主要包含三个概念：

- URL，统一资源定位符、俗称网址
- HTTP，两个电脑间传输内容的协议
- HTML，超文本，主要用作页面跳转

URL作用是让你访问一个页面，HTTP作用是让你能下载这个页面，HTML作用是让你能看懂这个页面。

三者相加是一个简单而完美的系统

世界上第一个网页 info.cern.ch



URI：统一资源标识符

URL：统一资源定位符    唯一确定的位置

URN：统一资源名称	唯一确定的



最具体的URL会包含以下内容：

- 协议
- 域名
- 端口号(不写的话用默认端口)
- 路径
- 查询参数
- 锚点

<span style="color:darkred;font-weight:700" >至少也要包含协议-域名两部分，例如http://www.baidu.com 才能算得上URL，才能正常定位</span>

(不带协议版本号)

类似

https://localhost:8080/?wd=scss#2



URL的范围更大，既有URI的标识作用，还有地址定位作用，所以URL可以是URI，但是URI却不是URL。

URN和URL 都可以是URI



本地host文件：

127.0.0.1	www.163.com

修改域名指向127.0.0.1 ip地址



> URL是一种具体的URI，它不仅唯一标识资源，而且还提供了定位该资源的信息。URI是一种语义上的抽象概念，可以是绝对的，也可以是相对的，而URL则必须提供足够的信息来定位，所以，是绝对的。



举个栗子🌰

经验式理解：<span style="color:red;">htt-p://localhost:8080</span><span style="color:green">/myweb/hello.html</span>

以上web地址，红色字体部分+绿色字体部分=URL；绿色字体部分=URI（相对的路径)。这是大部分程序员对两者理解的一个典型代表。



![url](C:\Users\SuperX\Pictures\url.png)



www.baidu.com

.com 是一级域名

baidu 是二级域名

www 是三级域名

锚点，跳转到对应id设置处，#5即跳转到id为5的元素那儿



打开html有文件协议和http协议，

从IDE用浏览器打开，http://localhost: , http协议

直接把html文件拖入浏览器打开， file:///C:/Users/SuperX/ , 文件协议

file://  `/c`代表下 最顶层目录下的C盘，



补充：//协议

> [//协议](https://blog.csdn.net/jimbowong/article/details/54960244)





***





#### DNS

***

Domain Name System	域名系统

- ==输入域名==
- ==输出IP==





#### Server + Client + HTTP

***

server服务器，指服务器中运行的代码

client客户端，指用户的电脑中运行的浏览器

服务器和客户端之间互相访问，HTTP协议



开了很多端口，每个端口对应一些服务或功能

1080端口对应代理



输入地址到浏览网页经过的全过程：

首先输入网址www.baidu.com，然后问电信DNSwww.baidu.com对应的IP是多少啊，电信回复一个IP x.x.x.x，然后我们就往这个IP x.x.x.x==发送请求==；服务器server收到请求后==开始响应==给我们返回一个网页，我们的client浏览器就下载这个网页，然后通过一定的规则渲染这个html网页 并展示给用户。

- 浏览器负责发起请求

- 服务器在80端口接收请求

- 服务器负责返回内容(响应)

- 浏览器负责下载响应内容

- ==HTTP的作用就是指导浏览器和服务器如何沟通== HTTP就像调解师

  比如服务器不在线、未开机时 响应502，网址错误或不存在时可能响应404



发起请求

curl -s -v -- "https://www.baidu.com"	默认为get请求方式

curl -X POST -s -v -H "superman285" -- "https://www.baidu.com"

“>”代表请求

"<"代表响应



GET请求

POST请求

POST带数据的请求



💡 找到网页中的图片资源并为我所用:

   Network选项卡，Img标签，选中某个Name点击，可看到Preview预览，选中想要的，双击Name新窗口打开，然后图片另存为即可。