import Vue from 'vue'

// Vue Material: https://www.creative-tim.com/vuematerial/getting-started
import { MdButton, MdMenu, MdProgress, MdCheckbox, MdSnackbar, MdIcon, MdSwitch } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.use(MdButton)
Vue.use(MdMenu)
Vue.use(MdProgress)
Vue.use(MdCheckbox)
Vue.use(MdSnackbar)
Vue.use(MdIcon)
Vue.use(MdSwitch)


// VueCtkDateTimePicker: https://github.com/chronotruck/vue-ctk-date-time-picker
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'
Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker)

import router from '@/router'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
