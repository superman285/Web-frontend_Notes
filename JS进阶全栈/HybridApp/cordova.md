最麻烦的步骤:



安装android sdk



网上的资料 不太靠谱 使用国外的比较好

<https://ionicframework.com/docs/installation/android>



不要改proxy了 直接打开vpn 然后把proxy设置去掉

让android studio自动下载sdk即可



cordova create xxx



cordova platform add android



cordova build



需要安装的环境和工具



cordova cli

ant 可用brew装

android sdk

jdk 一定要小于等于1.8版本 否则cordova不支持

gradle 可用brew装



将原项目中打包到dist的内容都丢到 cordova项目 www目录下 要把gz等无法识别的文件删除



记得在html的body末尾 引入 script标签 载入cordova.js



main.js中加入监听；监听deviceready 事件



然后cordova build



怕有问题 可暂时关闭gzip压缩