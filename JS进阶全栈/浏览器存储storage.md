##### localStorage和sessionStorage

- (同域)同源策略限制

  请求与相应的协议、域名、端口都相同 

  不同的域存储的内容不能互相访问(例如存在qq.com的不能访问存在baidu.com的)



- 存储的内容都是字符串格式，

  注意对象转字符串时可能会变object Object，所以要借助JSON.stringfy和parse方法，数组为了安全也借助JSON的方法。



- 存储的数据永久存在(其实在硬盘里)，刷新页面并不会丢失，除非你强制删除他们



- 有一个全局事件，storage事件，当storage数据发生改变的时候(增删改等)就会触发

  当前页面触发的storage事件只能由其他页面监听

  当前页面自己对storage进行操作不会触发storage事件，是一种广播特性事件

  用于实现页面间的一些通信或交互效果

