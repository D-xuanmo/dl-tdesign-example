import { createApp } from 'vue'
import App from './App.vue'
import { DForm, DGridLayout, DButton, DSpace, validator } from '@xuanmo/dl-common'
import zhCN from '@xuanmo/validator/locale/zh-CN.json'
import '@xuanmo/dl-common/dist/index.css'

import TDesign from 'tdesign-vue-next'
import 'tdesign-vue-next/es/style/index.css'

validator.localize(zhCN)

createApp(App)
  .use(DForm)
  .use(DGridLayout)
  .use(DButton)
  .use(DSpace)
  .use(TDesign)
  .mount('#app')
