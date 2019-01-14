const path = require('path');

module.exports = {
    mode: "development",
    // 打包的模块入口文件
    entry: './js/main.js',
    // 打包后的文件存放目录
    output: {
        // __dirname：当前文件的绝对路径 E:\远程课\1810-JS进阶远程班-下\2019-1-14-模块化\课件\module-webpack
        path: path.resolve(__dirname, "dist"),
        // 基于path生成的文件
        filename: 'bundle.js'
    }
};