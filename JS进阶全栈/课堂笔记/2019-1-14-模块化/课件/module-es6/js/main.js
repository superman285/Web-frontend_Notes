// 无值导入
// import './tools.js';    

// 默认导入
import v from './tools.js';
console.log(v);

// 基于名字的导入：使用对象解构
import {a, b} from './tools.js';
console.log(a, b);

// 如果另外一个模块导出的名字和已经导入的其它模块的名字冲突了
import {a as fna, b as fnb} from './fn.js';
console.log(fna, fnb);

import * as fn from './fn.js';
console.log(fn, fn.a, fn.b);

// import * as tools from './tools.js';
// console.log(tools);

import val, {a as ta, b as tb} from './tools.js';
console.log(ta, tb, val);