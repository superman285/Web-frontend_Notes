服务器三特点

有网

cpu好

内存高



脚本可以提供HTTP服务，Bash脚本或Node.js脚本都可以。



touch server.js



响应 /index.html	

返回的content-type为text/html，write一段html代码



若：html代码中引入css和script 则如果**发起index请求时会再发两个请求**

走一遍index.html再走一遍style.css请求然后再走一遍script.js请求

所以当打访问/index.html时浏览器network页签会一共看到3个请求

index.html 、 style.css 、 script.js

`如果用命令行的curl命令是无法一次得到三个请求内容的，只能得到html内容而已，而在浏览器就可以看到三个请求内容`



==视频内容见任务7-总结 5分钟左右开始==



/style.css

返回的content-type为text/css，write一段css代码

/script.js

返回的content-type为text/javascript，write一段js代码

只请求/script.js时 纯js在浏览器是不会执行的，需要嵌在html代码中才可以啦

浏览器又不是node环境