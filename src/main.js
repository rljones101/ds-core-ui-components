import Vue from 'vue'

import DsCoreUiComponents from 'ds-core-ui-components'
import 'ds-core-ui-components/dist/ds-core-ui-components.min.css'
Vue.use(DsCoreUiComponents)

import router from '@/router'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
