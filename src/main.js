import Vue from 'vue'
import App from './App'
import router from './router'
// 需要引入css
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap/dist/js/bootstrap.min';//使用bs的下拉
import 'bootstrap/dist/css/bootstrap.min.css';//使用bs的下拉

// element.ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI)



// 自定义全局过滤器
// 内容截取前五十个字符，并拼接 “...”
Vue.filter('format',(value)=>{ //表示 元素的字符串
  return value.slice(0,188) + "..."
})

Vue.filter('formatTitle',(value)=>{ //表示 元素的字符串
  return value.slice(0,66) + "..."
})

new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router
})
