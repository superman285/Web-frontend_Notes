##### 给他人直接提交权限，团队协作方式

自己的github中某个项目，Settings-Collaborators

Add collaborators的input输入框中，填入别人用户名，然后上方会多出用户

这时点击==Copy invite link==,然后发送给被邀请方

被邀请方访问这个邀请链接，然后点击按钮==Accept invitation==即可接受邀请

然后被邀请方git clone下来项目仓库，更改之后就可以直接提交commit啦



##### git pull相当于git fetch和git mergt的合集

相当于走了下面三步，将远程的master合并到本地master，对本地master进行了改变

```javascript
git fetch origin master
git log -p master..origin/master
git merge origin/master
```

merge相当于一个新的提交记录



但是push并不等于merge,将本地master内容merge到远程origin/master上确实已经改变了远程origin/master内容，但是他们的位置还是差1，本地master[ahead1]，远程origin/master[behind 1]



##### git回滚和撤销

1. 没add 没commit

当进行一个操作，且没add时，可以用checkout . 进行撤销。可定位到当前的目录 撤销

或者指定文件 cheout filename 来撤销某个文件

2. add了 没commit

git reset head filename(可选,不写就是回滚目录所有)

3. add了 commit了

当进行一个操作，且add和commit了，可以用revert commitID 进行回滚。(commitID在log中查看)

然后需要push?



严重用revert 次严重用reset



临时回滚可用revert 然后不提交 再把这个revert给revert 但是是revert一个版本的 而不是revert到某个版本



用reset吧 

reset 版本号 回到这个版本 不要用--hard!否则会很麻烦



##### branch分支相关

git branch branchB 创建分支B

git checkout branchB 切换到分支branchB

或者合并为命令 git checkout -b branchB 创建并切换到分支branchB

git branch 查看所有分支，当前分支会标*号

git branch -d branchA 删除分支A

git merge branchC 合并branchC分支到当前分支 相当于git merge branchX to this



切记💡

git merge branchX (here)   |branchX是当前仓库的本地分支branchX 最好更新到最新再merge

合并branchX到当前分支 然后push进行提交

先checkout到当前分支



新建branch

在github上直接新建分支 左上角 新命名一个然后回车的

然后本地再更新下仓库 把分支拉下来 切到分支提交就行



==拉取远程分支==

git checkout -b <本地分支名> origin/<想要拉取的远程分支名>

==和远程分支建立联系==

git branch --set-upstream-to=origin/branchName



---

更好的方法，两步合二为一:

git checkout <想要拉取的远程分支名> (不带remotes不带origin)

例如 git checkout bj_dev



切记！！！！

==第一次提交代码到分支==

git push --set-upstream origin bj_dev 记得第一次提交分支用这个关联上 以后就不用再打这个了



==远程分支检出(checkout)时自动进入分离HEAD状态==

###### 本地与远程master分支

master代表本地master分支,origin/master代表远程master分支

远程master分支表示

\* (HEAD detached at origin/master)

  master

本地master分支表示

\* master



合并之前可以先用命令 git checkout master|git checkout origin/master来切换分支查看内容



==新建远程分支并到本地==





##### 冲突conflict

当A和B都在修改文件，A提交后B不知道，B改了自己的也提交，这时就会出现提交失败，需要先pull。

然后B进行pull操作后，就出现了conflict冲突，然后B进行修改，把特殊符号行删除，修改成所需内容，然后再add和commit和push即可。



##### fork + pull request 「不加入团队协作者collaborator的协作方式，即跨团队协作」

fork成为独属自己的仓库，自己可以随意改动随意提交

add，commit，push之后，可以发起pull request

New pull request -> Create pull request



切记切记

==base fork 是自己的==

==head fork 是别人的==





更新fork仓库的方法：https://www.jianshu.com/p/8ab6ef7ce5e3



学习video:https://www.bilibili.com/video/av24736323/?p=41

##### clone和fork区别

clone是把远程仓库给同步到本地，会生成一个与远程同步的本地仓库 remote->local

而fork呢 是将别人的仓库复制一份作为自己的远程仓库 remote->remote，想直接操作的话要先clone到本地

即fork+clone





##### 学习视频

https://www.bilibili.com/video/av24736323

互动学习：https://learngitbranching.js.org/