# dynamicbutton

一个简单的倒计时组件，可以动态传入文字，颜色等等。。。

安装组件库
yarn add dynamicbutton / npm install dynamicbutton
全局导入
import DynamicbuttonUI from 'dynamicbutton'
引入样式
import "dynamicbutton/dist/dynamicbutton.css";

Vue.use(DynamicbuttonUI)

Attributes

参数 说明 类型 默认值
message 按钮文字 String 默认按钮
color 字体颜色 String #fff
backgroundColor 背景颜色 String #409eff
height 高度 Number 40
width 宽度 Number 125
fontSize 字体大小 Number 14
round 圆角按钮 Boolean false
time 倒计时时间 Number 10
dynamicText 倒计时期间的文字 String s 后重新发送
endingText 倒计时结束显示的文字 String 再次发送

Methods 说明
sendMessage 使用组件的时候传递过去的方法，在父组件写好事件逻辑之后，传递给按钮，点击的时候触发事件
