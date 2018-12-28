class DecoratorDrag {

    constructor(obj) {
        this.obj = obj;

        this.obj.elements.header.onmousedown = e => {
            let x = e.clientX - this.obj.elements.container.offsetLeft;
            let y = e.clientY - this.obj.elements.container.offsetTop;

            document.onmousemove = e => {
                this.obj.elements.container.style.left = e.clientX - x + 'px';
                this.obj.elements.container.style.top = e.clientY - y + 'px';
            }

            document.onmouseup = () => {
                document.onmousemove = null;
            }

            return false;
        }
    }

    fire() {
        console.log('开火');
    }

    open() {
        this.obj.open();
    }

    close() {
        this.obj.close();
    }

}