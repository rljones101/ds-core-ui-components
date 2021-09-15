import Vue from 'vue'

// Vue Material: https://www.creative-tim.com/vuematerial/getting-started
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'

// VueCtkDateTimePicker: https://github.com/chronotruck/vue-ctk-date-time-picker
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'

import 'vue-code-highlight/themes/prism-okaidia.css'

import VueRouter from 'vue-router'

import router from '@/router'

import App from './App.vue'




// Registered vue plugins
Vue.use(VueMaterial)
Vue.use(VueRouter)

// Registered global components
Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
