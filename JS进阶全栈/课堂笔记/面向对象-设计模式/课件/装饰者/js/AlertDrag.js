class AlertDrag extends Alert {
    
    constructor() {
        super();
    }

    render() {
        super.render();

        this.elements.header.onmousedown = e => {
            let x = e.clientX - this.elements.container.offsetLeft;
            let y = e.clientY - this.elements.container.offsetTop;

            document.onmousemove = e => {
                this.elements.container.style.left = e.clientX - x + 'px';
                this.elements.container.style.top = e.clientY - y + 'px';
            }

            document.onmouseup = () => {
                document.onmousemove = null;
            }

            return false;
        }
    }

}