/**
 * 给jquery类的原型对象上添加一些新的方法
 * jquery提供了一个专门用户扩展原型的方法
 * $.fn.extend({
 *  // 对象，对象中的每一项都会被添加到jquery原型上
 * })
 */
// $.fn => $.prototype
$.fn.extend({
    // a() {
    //     console.log('aaaaa');
    // },
    // b() {

    // },

    drag() {
        // this => drag谁调用指向谁 $('.box').drag => this就是$('.box')

        this.on('mousedown', function(e) {
            
            // this: 因为当前事件函数不是箭头函数，所以this是指向当前触发mousedown
            // 的原生元素

            let x = e.clientX - this.offsetLeft;
            let y = e.clientY - this.offsetTop;

            $(document).on('mousemove.drag', e => {
                $(this).css({
                    left: e.clientX - x,
                    top: e.clientY - y
                });
            });

            $(document).on('mouseup.drag', e => {
                // removeEventListener
                $(document).off('mousemove.drag mouseup.drag');
            });

            return false;

        });

    }
});