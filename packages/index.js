import Dynamicbutton from "./Dynamicbutton/index.vue";

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function(Vue) {
  // 注册全局组件
  Vue.component("Dynamicbutton", Dynamicbutton);
};

// 判断是否是直接引入文件,如果是，就不用调用 Vue.use()
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install
};
