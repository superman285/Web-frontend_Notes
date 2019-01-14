// console.log('main.js');

// 想要使用tools.js中的一些函数;
// AMD：依赖前置
// CMD：依赖后置，就近依赖

define(['./js2/tools.js'], function($) {
    console.log('main.js');
    console.log($);

    let eles = $('*');
    console.dir(eles);
});