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

        // this.render();
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
        this.elements.buttons.close.onclick = this.close.bind(this);

        this.elements.content = document.createElement('div');
        this.elements.content.innerHTML = this.options.content;

        this.elements.footer = document.createElement('div');
        this.elements.footer.classList.add('footer');

        this.elements.buttons.ok = document.createElement('button');
        this.elements.buttons.ok.innerHTML = '确定';
        this.elements.buttons.ok.onclick = this.close.bind(this);

        document.body.appendChild(this.elements.container);
        this.elements.container.appendChild(this.elements.header);
        this.elements.header.appendChild(this.elements.h4);
        this.elements.header.appendChild(this.elements.buttons.close);
        this.elements.container.appendChild(this.elements.content);
        this.elements.container.appendChild(this.elements.footer);
        this.elements.footer.appendChild(this.elements.buttons.ok);
    }

    close() {
        this.elements.container.remove();
    }
}