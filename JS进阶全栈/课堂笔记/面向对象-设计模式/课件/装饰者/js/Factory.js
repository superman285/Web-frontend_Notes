class Factory {

    getInstance(type) {
        switch(type) {
            case 'alert':
                return AlertSingleton();
            case 'alertDrag':
                return AlertDragSingleton();
            case 'confirm':
                return ConfirmSingleton();
            default:
                throw new Error('不存在该类型的对话框');
        }
    }

}