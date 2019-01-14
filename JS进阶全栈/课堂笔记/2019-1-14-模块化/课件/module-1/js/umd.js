/**
 * 这是一段umd规范的代码参考
 */


(function(root, factory){
    // console.log('这是具体的代码');
    // console.log(root, factory);
    if (typeof define === 'function' && define.amd) {
        // AMD
        define(factory);
    } else if (typeof exports === 'object') {
        // Node, CommonJS之类的
        module.exports = factory();
    } else {
        // 浏览器全局变量(root 即 window)
        root.returnExports = factory();
    }
}( this, function() {
    // 就是我们封装的模块或框架的具体代码，比如jquery的具体实现
    function $() {
        console.log('$');
    }

    return $;
} ));

// (function (root, factory) {

    // if (typeof define === 'function' && define.amd) {

    //     // AMD

    //     define(['jquery'], factory);

    // } else if (typeof exports === 'object') {

    //     // Node, CommonJS之类的

    //     module.exports = factory(require('jquery'));

    // } else {

    //     // 浏览器全局变量(root 即 window)

    //     root.returnExports = factory(root.jQuery);

    // }

// }(this, function ($) {

//     //    方法

//     function myFunc(){};

//     //    暴露公共方法

//     return myFunc;

// }));