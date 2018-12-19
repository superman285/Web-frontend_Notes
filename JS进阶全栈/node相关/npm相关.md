

第三方模块商店

www.npmjs.com



npm文档

docs.npmjs.com

www.npmjs.cn



别人用node或者javascript写的工具模块



包版本格式一般为

主版本号.次版本号.修正版本号

重大更新 | 功能升级 | bug修复



==最常用命令==



- npm search | 例如: npm search jquery
- npm install(npm i) npm i jquery@3.3.1 有多种模式
  - 本地模式
  - 本地开发模式
  - 全局模式
- npm update xx 更新xx包到当前主版本号的最新版本，一般不会更新主版本号





##### package-lock.json 和 package.json

package-lock.json 

加速已安装过的包的安装速度

锁定安装版本，避免直接改package.json，利于包管理