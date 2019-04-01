安装MySQL(mac版)

两种方式

- 官网下载community mysql server最新版dmg
- 使用homebrew方式安装 命令brew mysql



第一种不推荐，极力推荐第二种



第一种可能导致使用mysql.preference开不起来服务器，点击无反应





第二种直接在命令行进行开启数据库服务

> mysql.server start

关闭数据库服务

> mysql.server stop

连接数据库

> mysql -u root -p
>
> 回车后跳过输入密码 直接连接
>
> show databases; 可以查看所有数据库

或者输个密码123456



可视化工具推荐Navicat for MySQL



> 注意💡
>
> 在打开navicat连接前
>
> 先启动mysql.server 连接mysql -u root -p 这样就保证可以正常连接了



create table notesContent(noteid int not null primary key,uid int not null,text varchar(255) not null);



##### linux开启关闭数据库 找半天 晕

sudo apt-get install mysql-server 安装

https://www.cnblogs.com/sancong/p/6280094.html



mysql -u root -p



sudo service mysql start

sudo service mysql stop

sudo service mysql restart



###### 一些坑

node index启动时报错



<font color="dark">**Client does not support authentication protocol requested by server;**</font>

是数据库的问题

设置个初始密码可以搞定

https://www.cnblogs.com/zichuan/p/9203129.html



sequelize库的坑



如果报Data too long for column ‘xxx’ at row 1



如果是数据库的问题，就给数据库表设置text或longtext类型而不是varchar

如果是sequelize的问题，就不要设置sequelize.STRING，而是设置sequelize.TEXT







已备案网站

highskr.cn 博客

superman285.top 链接到博客

skrgame.fun 井字棋

superskr.top SkrWallet

superskr.fun KoaNotes