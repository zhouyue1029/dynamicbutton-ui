# dynamicbutton

# 一个简单的倒计时组件，可以动态传入文字，颜色等等。。。\<br>

## 安装组件库\<br>

yarn add dynamicbutton / npm install dynamicbutton\<br>

## 全局导入\<br>

import DynamicbuttonUI from 'dynamicbutton'\<br>

## 引入样式\<br>

import "dynamicbutton/dist/dynamicbutton.css";\<br>

Vue.use(DynamicbuttonUI)\<br>

## Attributes\<br>

## 参数 说明 类型 默认值 \<br>

message 按钮文字 String 默认按钮\<br>
color 字体颜色 String #fff\<br>
backgroundColor 背景颜色 String #409eff\<br>
height 高度 Number 40\<br>
width 宽度 Number 125\<br>
fontSize 字体大小 Number 14\<br>
round 圆角按钮 Boolean false\<br>
time 倒计时时间 Number 10\<br>
dynamicText 倒计时期间的文字 String s 后重新发送\<br>
endingText 倒计时结束显示的文字 String 再次发送\<br>

## Methods 说明\<br>

sendMessage 使用组件的时候传递过去的方法，在父组件写好事件逻辑之后，传递给按钮，点击的时候触发事件
