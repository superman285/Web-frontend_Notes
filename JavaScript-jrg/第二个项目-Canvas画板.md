# Canvas画板项目



`<canvas>` 标签只有两个属性**——** `width`和`height`。这些都是可选的，并且同样利用 [DOM](https://developer.mozilla.org/en-US/docs/Glossary/DOM)[properties](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCanvasElement) 来设置。

如果你绘制出来的图像是扭曲的, 尝试用width和height属性为<canvas>明确规定宽高，而不是使用CSS。





fillStyle

fillRect



stroke为描边的意思



- fillRect 填充黑色矩形
- clearRect 清除fillRect黑色矩形中的黑色区域
- strokeRect 带边框矩形(有边框，不填充)
- 方法的4个属性都一样，left值、top值、width、height



> 浏览器通知js，并不是每时每刻都在通知，是有一点点间隔的。
>
> 所以用div画点如果速度快会导致点不连续，需要解决这个问题。(不用div改用canvas)



canvas是等比例缩放的，用css设置宽高可能会出现bug。类似image，设置了高度会等比调整宽度，不要使用css设置宽高。



点击的时候开关的技巧，不需要麻烦的if...else...判断，使用!运算即可。



var usingEraser = false;



function(){ usingEraser = !usingEraser;}