import Vue from 'vue'

import DsCoreUiComponents from 'ds-core-ui-components'
Vue.use(DsCoreUiComponents)

import router from '@/router'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
