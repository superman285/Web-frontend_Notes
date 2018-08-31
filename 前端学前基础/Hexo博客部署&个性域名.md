#### Hexo博客部署&学习

***



新建博客专用仓库名字必须为:

username.github.io



建立一个仓库叫做hexo-generator，专门用于存放博文内容的，对应hexo blog/source目录下的内容。

```
git@github.com:superman285/HexoBlog-generator.git
```

其中包含

- _posts/	放博文内容
- about/    about相关md文件
- tags/    tags相关md文件，注意配置type:tags  layout:tags
- CNAME    github pages管理custom domain解析的文件



初始化：

- hexo init

各种报错无法解决时放大招，全删了，然后来个初始化！！

`npm install hexo-deployer-git --save`

重新初始化后要重装hexo部署插件，切记切记！

然后需要初始化主题和安装主题所需库



清理：

- hexo clean 

  (清除缓存文件 (db.json) 和已生成的public目录下的静态文件，在某些情况下，尤其是更换主题后，如果发现对站点的更改无论如何也不生效，可能需要运行该命令)



服务器：

- hexo s (hexo server的简化命令，用于启动本地服务器，一般用于测试)



提交更改，两个命令：

- hexo g	(hexo generate的简化命令，用于生成静态文件)
- hexo d    (hexo deploy的简化命令，用将本地内容部署到远程仓库)



新建博文，

- hexo n 或hexo new +文章名字



最新hexo3方法：

插入图片的写法与markdown不同，也不可直接拖拽进来

{% asset_img 文件名.后缀 配图信息 %}

切记切记文件名不要带空格，吃了个大亏，图片文件名不可带空格！



hexo2方法：

装插件插入图片方法：此法的语法格式更接近markdown，我选择

`npm install hexo-asset-image --save`





初始化新主题：

https://github.com/Longlongyu/hexo-theme-Cxo/blob/master/README_CN.md

```
git clone -b master https://github.com/Longlongyu/hexo-theme-Cxo themes/Cxo
```

Cxo主题需要安装所需库

```
npm install hexo-renderer-jade hexo-renderer-sass --save
```

改主题样式是在

Hexo Blog/themes/themes-name/source/css/style.css中修改

修改完后

hexo g

hexo d



###### 多标签设置

- 方法一：tags: [tag1,tag2]

- 方法二：

  tags:

  \- tag1 

  \- tag2

  tag名顶头



文章排序：

- 头部信息加个updated: 更新时间    需要手动打入，更新时间越晚越排前面
- 头部信息加个top: 数字    数字越大越排前面



###### ==**一个超级大毒坑🕳**==

***

当博客md文件出现标签的< >符号时，例如下文：

<img>、<object>、<video>和 表单元素，如<textarea>、<input>。 某些元素只在一些特殊情况下表现为可替换元素，例如 <audio>、<canvas>。

会出现这个错误提示

==TypeError: Cannot read property 'replace' of undefined==

死活找不到原因，各种排查才发现问题。



#### 个性域名

***

博客原地址：superman285.github.io

对应IP：185.199.(108~111).153

- skr.dog	(www.skr.dog)

- superskr.me (www.superskr.me)

	 skr.blue	(www.skr.blue)



博客解析域名，一般使用A方式或CNAME方式，A方式多，我们在namesilo这儿用A方式



##### 查询博客对应的ip地址

- nslookup superman285.github.io

- ping superman285.github.io



##### 域名解析设置方法

***

###### ==namesilo网站设置==

*第一步*

![1535599403648](C:\Users\SuperX\AppData\Local\Temp\1535599403648.png)

*第二步*

![1535599527106](C:\Users\SuperX\AppData\Local\Temp\1535599527106.png)

*第三步*

![1535599626098](C:\Users\SuperX\AppData\Local\Temp\1535599626098.png)

点击 ==Apply Template==，此模板为github专用，点击后会智能地为你设置好ip地址。

![1535599679584](C:\Users\SuperX\AppData\Local\Temp\1535599679584.png)

选择==Accept==，然后	在上方生成==Existing Resource Records==

然后可以再各自单独设置TTL，namesilo最小TTL需设置为3600。

TTL大，修改解析等待生效时间长，但解析访问速度快；(不频繁更换服务器IP可设置大些)

TTL小，修改等待生效时间短，但稳定性和解析速度慢。

![1535599789246](C:\Users\SuperX\AppData\Local\Temp\1535599789246.png)

此处为防止www.skr.dog无法解析，加个www的保险。

实际上github pages的cname会自动帮你解析www，不加也可。(不是100%确定)

###### ==GitHub Pages设置==

hexo博客所在仓库，进入上方菜单的设置界面，下拉到GitHub Pages设置



![1535600362068](C:\Users\SuperX\AppData\Local\Temp\1535600362068.png)

设置Custom domain，填入个性域名，skr.dog，点击save，会在仓库Code目录下生成一个CNAME文件(可在第二行加上www.skr.dog，不加也可)

![1535600512874](C:\Users\SuperX\AppData\Local\Temp\1535600512874.png)

***

:cherry_blossom:这样就算大功告成啦！！:cherry_blossom:

需要等待一段时间，不要心急。

然后在浏览器地址栏输入skr.dog 或者 www.skr.dog，biu一下就跳转到自己的GitHub博客了！



##### 其他个性域名也指向博客

但是，不完美，因为我们有多个个性域名，如何让他们都指向博客呢。

GitHub Pages的CNAME只能支持一个域名的配置，无法在这儿入手。

只能从域名解析商namesilo处入手，让我们的其他个性域名用重定向的方式指向博客(指向skr.dog)。

*第一步：*

先进行域名解析设置-namesilo网站设置的第一步和第二步，然后先把Existing Resource Records中的几个配置Delete。

*第二步：*

![1535601378531](C:\Users\SuperX\AppData\Local\Temp\1535601378531.png)

到这个界面，点击菜单上的Forward Domains，即重定向域名。

*第三步：*

跳转Domain Forwarding页面后，进行如下配置

![1535601478440](C:\Users\SuperX\AppData\Local\Temp\1535601478440.png)

选择301方式。path forwarding为转发，为了可以正常访问网站的二级页面(如skr.dog/about)，选Yes。

然后在此界面Status状态栏为红色的processing，需要等一下才可以Active![1535601378531](C:\Users\SuperX\AppData\Local\Temp\1535601378531.png)



Active后再打开DNS管理界面(点击蓝色球球和上面执行一二步后效果一样)

![1535601825515](C:\Users\SuperX\AppData\Local\Temp\1535601825515.png)

发现添加了四项配置，不要手贱删除，这四项的SERVICE都是Forwarding重定向。

![1535601766703](C:\Users\SuperX\AppData\Local\Temp\1535601766703.png)

再慢慢地等待一段时间，可能很久......

:white_flower:大功告成！！:white_flower:

这时​使用其他个性域名也可以访问博客了，舒服~



#### 一个坑🕳Github pages 的custom domain个性域名重置问题

***

每次`hexo deploy`之后，个性域名访问都会出现404，而[原github.io地址](username.github.io)则访问正常。

再看下仓库的Settings-->Github pages-->Custom domain , 发现Custom domain被重置空了，又需要手动再次重新关联。



问题原因 : CNAME文件每次部署都被自动删除. 

解决方案 : 将CNAME文件放在hexo根目录/source/目录下.

OVER！

参考[王西文-简书](https://www.jianshu.com/p/060b1c810975)



