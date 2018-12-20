/**
 * 如果导入的模块是目录形式
 * 那么，导入的时候直接填写模块目录的名称
 * 那require是如何找到我们要导入的文件的呢？
 * 
 * 如果我们导入的是一个目录模块
 * 那么导入的时候会有一些默认的导入规则
 * 如果导入的时候只填写目录模块的名称，那么默认情况下会首先
 * 查找该目录下是否有package.json文件
 * 如果没有，则默认导入index.js
 * 
 * 如果一个模块下有package.json文件，则首先会读取package.json
 * 文件，如何找到该文件中main选项，如果有该选项则导入的是该选项的
 * 指定文件，如果没有该选项默认导入的是index.js
 */
// const miaovM1 = require('./miaov-m1');

// console.log(miaovM1);

// const miaovM2 = require('./miaov-m2');

// console.log(miaovM2);

// const miaovM3 = require('./miaov-m3');

// console.log(miaovM3);

/**
 * 如果该模块下既没有index.js，也没有package.json文件
 * 则会报错：Cannot find module
 */
// const miaovM4 = require('./miaov-m4');

// console.log(miaovM4);


const $ = require('jquery');

console.log($);