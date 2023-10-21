import { createApp } from 'vue'
import App from './App.vue'
import router from './router.ts'
import DLCommon from '@xuanmo/dl-common'
import '@xuanmo/dl-common/dist/index.css'
import './app.css'

import TDesign from 'tdesign-vue-next'
import 'tdesign-vue-next/es/style/index.css'

createApp(App).use(router).use(DLCommon).use(TDesign).mount('#app')
