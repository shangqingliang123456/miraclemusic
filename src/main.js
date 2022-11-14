import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import App from './App.vue'
import App2 from './App2.vue'
import App3 from './App3.vue'
import App4 from './App4.vue'
import App5 from './App5.vue'
import App6 from './App6.vue'
import App7 from './App7.vue'
import App8 from './App8.vue'
import App9 from './App9.vue'
import App10 from './App10.vue'

const app = createApp(App)
const app2 = createApp(App2)
const app3 = createApp(App3)
const app4 = createApp(App4)
const app5 = createApp(App5)
const app6 = createApp(App6)
const app7 = createApp(App7)
const app8 = createApp(App8)
const app9 = createApp(App9)
const app10 = createApp(App10)

let routers=[
  {path:'/',component:App2},
  {path:'/App3',component:App3},
  {path:'/App4',component:App4},
  {path:'/App5',component:App5},
  {path:'/App6',component:App6},
  {path:'/App7',component:App7},
  {path:'/App8',component:App8},
  {path:'/App9',component:App9},
  {path:'/App10',component:App10}
]

let router=createRouter({routes:routers,history:createWebHistory()})

app.use(router)
app.use(ElementPlus)
app2.use(router)
app2.use(ElementPlus)
app3.use(router)
app3.use(ElementPlus)
app4.use(router)
app4.use(ElementPlus)
app5.use(router)
app5.use(ElementPlus)
app6.use(router)
app6.use(ElementPlus)
app7.use(router)
app7.use(ElementPlus)
app8.use(router)
app8.use(ElementPlus)
app9.use(router)
app9.use(ElementPlus)
app10.use(router)
app10.use(ElementPlus)

app.mount('#app')
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
