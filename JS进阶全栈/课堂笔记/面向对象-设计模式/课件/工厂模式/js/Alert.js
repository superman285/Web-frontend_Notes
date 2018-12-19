const Alert = (() => {

    class Alert extends Modal {
    
    }

    let instance = null;

    return () => {
        if (instance === null) {
            instance = new Alert();
            instance.render();
        }
        return instance;
    };
})();