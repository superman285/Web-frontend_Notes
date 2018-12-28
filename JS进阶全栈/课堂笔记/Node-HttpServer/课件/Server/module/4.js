/**
 * 自己项目的模块会用文件或者普通文件进行组织就可以了
 * 但是实际项目开发中肯定会用到其他的一些第三方的模块
 * 为了不让自己的项目模块与第三方的模块混合，所以node中为我们约定了一个特殊的目录
 * node_modules目录，该目录下存放的是一些第三方的模块
 */

let jq = require('jquery');
console.log(jq);


let bootstrap = require('bootstrap');
console.log(bootstrap);