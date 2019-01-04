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



可视化工具推荐Navicat for MySQL