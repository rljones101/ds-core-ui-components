import Vue from 'vue';
import Dev from './serve.vue';
// To register individual components where they are used (serve.vue) instead of using the
// library as a whole, comment/remove this import and it's corresponding "Vue.use" call
import DsCoreUiComponents from '@/entry.esm';
Vue.use(DsCoreUiComponents);

// Vue Material: https://www.creative-tim.com/vuematerial/getting-started
import { MdButton, MdMenu, MdProgress, MdCheckbox, MdSnackbar, MdIcon, MdSwitch, MdList } from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.use(MdButton)
Vue.use(MdMenu)
Vue.use(MdProgress)
Vue.use(MdCheckbox)
Vue.use(MdSnackbar)
Vue.use(MdIcon)
Vue.use(MdSwitch)
Vue.use(MdList)

// VueCtkDateTimePicker: https://github.com/chronotruck/vue-ctk-date-time-picker
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'
Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker)

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Dev),
}).$mount('#app');
