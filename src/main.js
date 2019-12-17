// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import './assets/bootstrap/css/bootstrap.css'
import './assets/bootstrap/js/bootstrap.min'

Vue.config.productionTip = false

// 全局过滤器定义语法 {{ name | "过滤器名称"}} Vue.filter("过滤器名称", function(){});
Vue.filter("msgFormat", function(msg, arg, arg2){
  // replace方法 第一个参数 除了可以写一个字符串之外 还可以写一个正则
  // return msg.replace(/单纯/g, "邪恶");
  return msg.replace(/单纯/g, arg + arg2);
});

Vue.filter("test", function (msg) {
  return msg + "====";
});

Vue.filter("dateFormat", function(dateStr, pattern=""){
  var dt = new Date(dateStr);
  var y = dt.getFullYear();
  var m = dt.getMonth() + 1;
  var d = dt.getDate();
  if (pattern.toLowerCase() === "yyyy-mm-dd"){
    return `${y}-${m}-${d}`;
  }else{
    var hh = dt.getHours();
    var mm = dt.getMinutes();
    var ss = dt.getSeconds();
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
  }
});

// 定义全局按键修饰符
Vue.config.keyCodes.f2 = 113;

// 自定义全局指令 第一个参数是 指令名 命名时不加v- 调用是需 v-focus 第二个参数是一个对象 对象身上有钩子函数
Vue.directive("focus", {
  // 第一个参数永远都是el 表示被绑定了的那个元素 这个el元素 是一个原生的JS对象
  // 每当指令绑定到元素上的时候 会执行这个bind函数 只执行一次
  bind: function (el) {
    // 在元素刚绑定指令时 元素还没有插入到DOM中去 这时候调用focus方法没有作用
    // 一个元素只有插入DOM后 才能回去焦点
    // el.focus();
  },
  // inserted表示元素插入DOM中会执行该函数 只执行一次
  inserted: function (el) {
    el.focus();
  },
  // 当Vnode更新时 会触发updated函数 可能触发多次
  updated: function (el) {

  }
})

Vue.directive("color", {
  bind: function(el,binding){
    // console.log(binding.name);
    // console.log(binding.expression);
    el.style.color = binding.value;
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
