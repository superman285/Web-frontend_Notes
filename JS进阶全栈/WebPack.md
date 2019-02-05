五大核心：

- 入口 entry
- 出口 output
- loader
- 插件 plugins
- 模式 mode



loader帮助webpack处理非js的其他文件 例如css样式文件 sass-loader css-loader style-loader



webpack 按照模块化方式引入 

css也用import方式引入



webpack 模块化方式进行打包



配置文件 webpack.config.js



```javascript
module.exports = {
    mode: 'development', //开发环境 就不会压缩js
	entry: './main.js',
    output: {
        //
        path: path.resolve(__dirname,"dist") //__dirname是内部对象 node自己赋值了
        //基于path打包生成的文件
        filename: 'bundle.js'
    }

}
```



然后再把加载的script的src 由js/main.js 改成 dist/bundle.js 

浏览器就可以正常运行import export语法了



babel是将es新版本 或者其他语言 解析为 js的es5版本