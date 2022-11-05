import Vue from 'vue'
import App from './App.vue'
import './plugins/element'
import 'font-awesome/css/font-awesome.min.css'
import router from './router'
import service from './service'
// 导入画图包 第一种引入没有 init 方法
// import { echarts } from 'echarts'
import echarts from 'echarts';

// import ElementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUi)
// 挂载到原型上 全局注册
Vue.prototype.service = service
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

// 路由导航守卫
router.beforeEach((to,from,next)=>{
  if (!localStorage.getItem('username')) {
      if(to.path!=='/login'){
        next('/login')
      }next()
  }else next()
  
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
