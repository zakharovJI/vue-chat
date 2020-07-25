import Vue from 'vue'
import App from './App.vue'
import router from './router'
import helper from './mixins/helpers'
import store from './store/index'
import './assets/styles/main.scss'

Vue.config.productionTip = false;
Vue.mixin(helper);

let requireComponent = require.context('../src', true, /Brand[A-Z]\w+\.vue$/)
requireComponent.keys().forEach(function (fileName) {
  let baseComponentConfig = requireComponent(fileName)
  baseComponentConfig = baseComponentConfig.default || baseComponentConfig
  let baseComponentName = baseComponentConfig.name || (
    fileName
      .replace(/^.+\//, '')
      .replace(/\.\w+$/, '')
  )
  Vue.component(baseComponentName, baseComponentConfig)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
