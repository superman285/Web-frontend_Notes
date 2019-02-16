12.17课程倒数第二节开始 nginx介绍



配置目录



云服务器



sudo systemctl start nginx

sudo systemctl stop nginx



启动http-server也可以 访问到目录了 



其实不用装nginx





我们自己的电脑 外网无法访问是因为没有配置内网穿透 所以外网无法访问

云服务器配置了内网穿透 外网可以访问到



create table notesContent(noteid int not null primary key,uid int not null,text varchar(255) not null);



只下载部分github代码的方法

https://www.cnblogs.com/Hi-blog/p/9008932.html



tree/master 改为trunk



svn checkout https://github.com/superman285/PrivateOwnWebProject/trunk/AdvancedJS/Koa-Notes



###### 数据库

sudo apt-get install mysql-server mysql-client

注意编码问题

要手动修改

最好是两个都改了 表和字段

alter table \`notesContent\` default character set utf8;

alter table \`notesContent\` change \`text\` \`text\` VARCHAR(255) character set utf8;



启动连接:

mysql -u root -p

123456



==重启mysql的命令==

**重启mysql**

　　启动mysql：
　　方式一：sudo /etc/init.d/mysql start 
　　方式二：sudo start mysql
　　方式三：sudo service mysql start

　　停止mysql：
　　方式一：sudo /etc/init.d/mysql stop 
　　方式二：sudo stop mysql　
　　方式三：sudo service mysql stop

　　重启mysql：
　　方式一：sudo/etc/init.d/mysql restart
　　方式二：sudo restart mysql
　　方式三：sudo service mysql restart



mysqld本身就是守护进程，关了终端 依然处在运行中 在任务管理器可见



除非你强制关闭

mysql.server stop | mac命令

sudo service mysql stop | linux命令



关闭后在用start命令开启 然后重新连接 mysql -u root -p 输密码



然后用pm2 或 supervisor守护进程

即可实现 关闭终端 程序仍在运行的效果了