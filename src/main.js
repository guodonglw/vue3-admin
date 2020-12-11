import { createApp } from 'vue'
import App from './App.vue'
import router from '/@/route/index.js'
import store from '/@/store/index.js'
import '/@/css/common.less'
import 'element3/lib/theme-chalk/index.css'
import '/@/css/elementFix.less'
import Element3 from 'element3'

const app = createApp(App)
app.use(Element3)
app.use(router)
app.use(store)

app.mount('#app')
