#### 04章: ES6的export导出



```javascript
// 导出“（声明的）名字”
export <let/const/var> x ...;
export function x() ...
export class x ...
export {x, y, z, ...};


// 导出“（重命名的）名字”
export { x as y, ...};
export { x as default, ... };


// 导出“（其它模块的）名字”
export ... from ...;


// 导出“值”
export default <expression>
```



default 方便import的时候随意起名字



说白了export就是将代码导出，并没有执行表达式。js中执行需要加()