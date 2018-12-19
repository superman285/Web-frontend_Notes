const ConfirmSingleton = (() => {

    let instance = null;

    return () => {
        if (instance === null) {
            instance = new Confirm();
            instance.render();
        }
        return instance;
    };
})();