五大核心：

- 入口 entry
- 出口 output
- loader
- 插件 plugins
- 模式 mode



浏览器不支持import语法 

1.可以用webpack来打包好 然后再在html中引入打包后的js

2.script标签加上type=“module”



./node_module/webpack/bin/webpack 完整命令

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



---

> 打包js/打包scss 方法

webpack.config.js配置好入口entry(一个文件) 输出output(path和filename)(一个文件)

path模块的使用 join不可省\__dirname resolve可省略__dirname



然后运行 npm run webpack(在package.json配置好) 或者 ./node_modules/webpack/bin/webpack



就将入口js打包到了 出口/xxx.js 一般是dist/bundle.js



如果要打包css|scss|sass|less文件 在entry入口js文件中引入css

import “xxxxx/yyyyy/style.scss”

在webpack.config.js中配置rules 配置好scss结尾正则使用的loader(sass-loader|css-loader|style-loader) 切记要npm i 安装好这些loader才可正常打包



然后再npm run webpack 随便改下入口js文件即可打包好



##### 配置全局插件

```javascript
plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        Web3: "web3",
    }),
]
```

前端中所有模块都可访问这些插件 不需要再require或者import了

注意这个全局插件 服务器端是无法访问到的 还是要require

服务器端无法import





##### 打包优化

---

打包优化用到的插件 可以直接npm i xxx安装 或者-D 安装 装到开发依赖 devDependencies



http://www.linbenjian.com/article-detail/5c0f7c59420f72223ab43517

vue-cli-service的环境设置



使用vue-cli3打包项目，通过配置不同的指令给项目设置不一样的配置。

npm run serve时会把process.env.NODE_ENV设置为‘development’；

npm run build 时会把process.env.NODE_ENV设置为‘production’；



优化打包webpack+vuecli3配置系列

https://blog.csdn.net/u014440483/article/details/87267160



打包优化精品文章:webpack4

https://blog.csdn.net/weixin_40817115/article/details/80992301



webpack-bundle-analyzer的使用



1.devtool sourcemap

2.代码压缩 optimization minimize:true terserplugin

3.分离css(从主js中)

4.cdn加载方式 减小包体

5.压缩成gzip compressionplugin



cdn加载方式

配置webpack的externals



vuecli3

gzip配置方法:



const CompressionPlugin = require("compression-webpack-plugin");



```javascript
devServer: {
    port: 3000,
    compress: true // 服务器返回浏览器的时候是否启动gzip压缩
},

configureWebpack: {
	plugins:[new CompressionPlugin(),] //直接开启压缩
}
```



webpack4 常见插件配置大全

https://my.oschina.net/susouth/blog/2877935