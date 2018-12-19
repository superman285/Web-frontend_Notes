const AlertDragSingleton = (() => {
    let instance = null;

    return () => {
        if (instance === null) {
            instance = new AlertDrag();
            instance.render();
        }
        return instance;
    };
})();