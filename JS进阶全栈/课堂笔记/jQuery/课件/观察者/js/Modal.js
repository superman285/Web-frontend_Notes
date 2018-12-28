class Modal {
    constructor(options) {

        this.options = Object.assign({
            title: '标题',
            content: ''
        }, options);

        this.elements = {
            container: null,
            header: null,
            h4: null,
            content: null,
            footer: null,
            buttons:  {
                close: null,
                ok: null
            }
        }

        // 观察者列表 或 事件绑定的函数列表
        this.observers = {
            open: [],
            close: []
        }

        // 是否处理默认行为
        this.isDefault = true;
        // 事件对象
        this.events = {
            preventDefault: () => {
                this.isDefault = false;
            }
        };

        // this.render();
    }

    addEventListener(type, observer) {
        let observers = this.observers[type];
        if (Array.isArray(observers) && !observers.includes(observer)) {
            // 最好还要判断一下，当前添加的observer是否已经存在了
            observers.push(observer);
        }
    }

    emit(type, events) {
        let observers = this.observers[type];
        if (Array.isArray(observers)) {
            observers.forEach( observer => {
                Object.assign(this.events, events);
                // 调用传入的函数
                observer(this.events);
            } );
        }
    }

    render() {
        this.elements.container = document.createElement('div');
        this.elements.container.classList.add('modal');

        this.elements.header = document.createElement('div');
        this.elements.header.classList.add('header');

        this.elements.h4 = document.createElement('h4');
        this.elements.h4.innerHTML = this.options.title;

        this.elements.buttons.close = document.createElement('button');
        this.elements.buttons.close.innerHTML = 'X';
        this.elements.buttons.close.onclick = () => {
            this.close('cancel');
        };

        this.elements.content = document.createElement('div');
        this.elements.content.innerHTML = this.options.content;

        this.elements.footer = document.createElement('div');
        this.elements.footer.classList.add('footer');

        this.elements.buttons.ok = document.createElement('button');
        this.elements.buttons.ok.innerHTML = '确定';
        this.elements.buttons.ok.onclick = () => {
            this.close('ok');
        };

        document.body.appendChild(this.elements.container);
        this.elements.container.appendChild(this.elements.header);
        this.elements.header.appendChild(this.elements.h4);
        this.elements.header.appendChild(this.elements.buttons.close);
        this.elements.container.appendChild(this.elements.content);
        this.elements.container.appendChild(this.elements.footer);
        this.elements.footer.appendChild(this.elements.buttons.ok);

        this.close();
    }

    open() {
        this.elements.container.style.display = 'block';

        this.emit('open');
        
        // 给open添加一个默认的行为
        // 如果isDefault属性为true，后面的代码（默认的行为）才执行
        this.isDefault && (document.body.style.background = 'red');
        
    }

    close(type) {
        // this.elements.container.remove();

        this.elements.container.style.display = 'none';

        this.emit('close', {closeType: type});
    }
}