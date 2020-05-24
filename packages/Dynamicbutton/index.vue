<template>
  <button class="dynamicbutton" :style="style" @click="handleclick()">
    <span>{{ content }}</span>
  </button>
</template>

<script>
export default {
  name: 'dynamicbutton',
  props: {
    // 按钮文字
    message: {
      type: String,
      default: '默认按钮'
    },
    // 字体颜色
    color: {
      type: String,
      default: '#fff'
    },
    // 背景颜色
    backgroundColor: {
      type: String,
      default: '#409eff'
    },
    // 高度
    height: {
      type: Number,
      default: 40
    },
    // 宽度
    width: {
      type: Number,
      default: 125
    },
    // 字体
    fontSize: {
      type: Number,
      default: 14
    },
    // 圆角按钮
    round: {
      type: Boolean,
      default: false
    },
    // 倒计时间
    time: {
      type: Number,
      default: 10
    },
    // 倒计时期间的文字
    dynamicText: {
      type: String,
      default: 's后重新发送'
    },
    // 倒计时结束显示的文字
    endingText: {
      type: String,
      default: '再次发送'
    }
  },
  data() {
    return {
      isClick: true, // 是否可以点击
      content: this.message, // 按钮显示的文字
      countDownTime: this.time // 时间
    }
  },
  computed: {
    style() {
      return {
        color: this.color,
        fontSize: this.fontSize + 'px',
        height: this.height + 'px',
        width: this.width + 'px',
        lineHeight: this.height + 'px',
        backgroundColor: this.isClick ? this.backgroundColor : '#ccc',
        borderRadius: this.round ? this.height / 2 + 'px' : '4px'
      }
    }
  },
  methods: {
    // 倒计时
    countDown() {
      if (!this.isClick) return false // 节流，不可以重复点击
      this.isClick = false
      this.content = this.countDownTime + this.dynamicText
      let clock = window.setInterval(() => {
        this.countDownTime--
        this.content = this.countDownTime + this.dynamicText
        if (this.countDownTime < 0) {
          window.clearInterval(clock)
          this.content = this.endingText
          this.countDownTime = this.time
          this.isClick = true // 倒计时结束打开节流阀
        }
      }, 1000)
    },
    handleclick() {
      if (this.isClick) {
        this.$emit('sendMessage')
      }
      this.countDown()
    }
  }
}
</script>

<style lang="scss" scoped>
.dynamicbutton {
  text-align: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  padding: 0 20px;
}
</style>