const  EventEmitter = require(‘events’)

const emitter = new EventEmitter();

fn1(){console.log(‘fn1’)}

emitter.on(‘test’,fn1)

emitter.emit(‘test’)