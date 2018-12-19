class Factory {

    getInstance(type) {
        switch(type) {
            case 'alert':
                return Alert();
            case 'confirm':
                return Confirm();
            default:
                throw new Error('不存在该类型的对话框');
        }
    }

}