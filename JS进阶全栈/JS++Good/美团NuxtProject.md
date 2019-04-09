pages里头相当于页面组件

访问url时展示 对应的界面



新建page 会自动帮你配好路由



component里头存放功能组件



页面组件中可包含功能组件



npm run dev/start加上

--exec babel-node 才能在服务端js文件中使用import es6语法



安装

babel-preset-es2015 babel-cli babel-core

sass-loader node-sass



---



`<nuxt></nuxt>`相当于vue中的router-view 占位符



template作用

加了之后 如果不显示 就可不用渲染出来标签 如果用div还会渲染出div

如果用template 什么都不会渲染出来

