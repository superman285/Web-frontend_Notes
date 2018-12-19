const AlertSingleton = (() => {
    let instance = null;

    return () => {
        if (instance === null) {
            instance = new Alert();
            instance.render();
        }
        return instance;
    };
})();