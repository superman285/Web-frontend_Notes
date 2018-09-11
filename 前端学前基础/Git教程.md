#### Git使用教程

***



==git bash可以相当于linux命令行 特别好用==

windows版本git bash加入tree显示的方法：

https://blog.csdn.net/t3369/article/details/80517097



<span style="font-size:18px;color:white;font-weight:700;background-color:dodgerblue;padding:5px;">四字真言：add , commit , pull , push</span>



##### git bash技巧

- 创建一个文件~/.bashrc或者直接修改Git/etc/bash.bashrc文件，加上

  cd ~/Desktop，即每次打开git bash都会定位到~/Desktop路径下。

  ==.bashrc文件中写的命令都会在进入Git Bash前执行。==

  注意：加了这个之后 git bash here可能就失效了，因为每次都定位到desktop下

- 常用命令缩写：

  - alias gs='git status'
  - alias gssb='git status -sb'

- 以后用的到的技巧：环境变量/设置path

  export SASS_BINARY_SITE="https://npm.taobao.org/mirrors/node-sass"

  export PATH="目录的绝对路径:$PATH"

见：https://xiedaimala.com/tasks/24e32d28-9aeb-4010-a643-d97904e8101d/text_tutorials/080635ee-d50a-499c-b3bc-1666785e90cc

任务四-第9节-命令行技巧



==一台机器使用一个SSH key就可以，不管多少个仓库==

:fire:

git默认远程仓库:origin | git默认分支:master

:fire:

忘记了git的使用就回到饥人谷课程 软件安装章节 和命令行基础章节-Git操作手册

视频-编辑器的使用

或文章-Git的安装与配置



```
git config --global user.name +你的英文名字
git config --global user.email +你的常用邮箱
git config --global push.default simple 
# 本来我写的是 matching，不过想了想可能 simple 更好
git config --global core.quotepath false                                       #防止文件名变成数字
git config --global core.editor "vim"  #看具体需求
```

很重要的确认身份的两句命令，在git bash中执行

然后再初始化仓库



github pages 在setting中开通 不是右上角setting，而是当前仓库的上方菜单栏的setting





##### git四种使用方式

***



- **纯本地仓库**
  - git init	初始化本地仓库 .git
  - git add    add不是指添加文件，而是指添加操作，包括删除时
  - git commit -m （m代表message，本次提交描述，正式提交到.git仓库)
  - git status -sb 显示当前所有文件的状态
  - ==有新变动时(增删改都是)就两步操作，先add再commit==
  - git log 查看提交历史记录

- **本地仓库提交到github上**
  - 建立好一个新的空仓库(什么都不选只起名)

```
git remote add origin git@github.com:superman285/git-demo-1.git
git push -u origin master
```

- **远程仓库下载到本地(克隆)**

  - git clone + ssh地址/或https地址，下载仓库

    git clone git@github.com:superman285/git-demo-2.git

  - 本地仓库克隆到本地：

    定位到目标目录，git clone 仓库源路径(相对或绝对)

- **如何上传更新**
  - git add +文件路径
  - git commit -m "提交信息"
  - git pull (当远程仓库有更新的内容时，需要先更新下来再去推送)
  - git push    先拉后推

<span style="font-size:18px;color:white;font-weight:700;background-color:dodgerblue;padding:5px;">四字真言：add , commit , pull , push</span>



##### 一些其他命令：

***

- git remote add origin git@github.com:superman285/repo-name.git

  将本地仓库与远程仓库关联

- git remote set-url origin git@github.com:superman285/repo-name.git

  上一步手抖了，可以用这个命令抢救

- git branch    查看分支情况

- git merge    合并分支

- git stash    通灵术

- git stash pop    通灵术反转

- git revert/git reset    后悔了

- git diff    查看详细变化



##### GitHub Pages相关

***

若给你的某个仓库设置了github pages(Source选择master branch)后，可以用published地址后接index.html或readme.md来预览放在仓库一级的html或md文件，用浏览器预览md文件需要更改编码方式为UTF-8。

`Your site is published at <https://skr.dog/blog/>`

- 方法一: 以上是一种情况 仓库的published地址不跟html或md打开就可直接预览**名为index的html文件**或**名为readme的md文件**。

  通用方法是published url/+html文件在这个仓库的地址

  e.g. https://skr.dog/HandTraining-S-Demos/Perfect-Grid/

       代表https://skr.dog/HandTraining-S-Demos/Perfect-Grid/index.html




- 方法二: 文件地址前加上`http://htmlpreview.github.io/?`

  例：

  http://htmlpreview.github.io/?https://github.com/superman285/HandTraining-S-Demos/blob/master/Perfect-Grid/index.html



**git的许可证的选择：**

![git_licenses](C:\Users\SuperX\Desktop\饥人谷前端\前端学前基础\git_licenses.png)



