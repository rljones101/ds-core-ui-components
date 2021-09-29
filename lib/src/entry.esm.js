import './styles/app-theme.scss';

// Import vue components
import * as components from '@/lib-components/index';
import VueCtkDateTimePicker from 'vue-ctk-date-time-picker'
import 'vue-ctk-date-time-picker/dist/vue-ctk-date-time-picker.css'

import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import {
  MdButton,
  MdCheckbox,
  MdIcon,
  MdList,
  MdMenu,
  MdProgress,
  MdSnackbar,
  MdSwitch
} from 'vue-material/dist/components'

import { AgGridVue } from 'ag-grid-vue'
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

// install function executed by Vue.use()
const install = function installDsCoreUiComponents(Vue) {
  Object.entries(components).forEach(([componentName, component]) => {
    Vue.component(componentName, component);
  });

  // VueCtkDateTimePicker: https://github.com/chronotruck/vue-ctk-date-time-picker
  Vue.component('VueCtkDateTimePicker', VueCtkDateTimePicker)

  Vue.use(MdButton)
  Vue.use(MdMenu)
  Vue.use(MdProgress)
  Vue.use(MdCheckbox)
  Vue.use(MdSnackbar)
  Vue.use(MdIcon)
  Vue.use(MdSwitch)
  Vue.use(MdList)

  Vue.component('ag-grid-vue', AgGridVue)
};

// Create module definition for Vue.use()
export default install;

// To allow individual component use, export components
// each can be registered via Vue.component()
export * from '@/lib-components/index';
