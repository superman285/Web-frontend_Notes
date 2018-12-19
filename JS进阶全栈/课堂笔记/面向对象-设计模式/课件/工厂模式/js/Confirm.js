const Confirm = (() => {
    class Confirm extends Modal {

        constructor(options) {
            // super表示就是父类构造函数
            // 重写父类方法
            // 当一个子类重写了构造函数，那么字类构造函数中必须通过super调用父类构造函数
            // 如果子类没有重写，则不需要调用
            super(options);
    
            // 继承了父类的特性以后，还可以加上子类自己的一些逻辑（属性、方法）
            this.elements.buttons.cancel = null;
        }
    
        render() {
            super.render();
    
            this.elements.buttons.cancel = document.createElement('button');
            this.elements.buttons.cancel.innerHTML = '取消';
            this.elements.buttons.cancel.onclick = this.close.bind(this);
    
            this.elements.footer.insertBefore(this.elements.buttons.cancel, this.elements.buttons.ok);
    
        }
    
    }

    let instance = null;

    return () => {
        if (instance === null) {
            instance = new Confirm();
            instance.render();
        }
        return instance;
    };
})();