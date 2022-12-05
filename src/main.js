import { createApp } from 'vue'
import {createPinia} from 'pinia'
import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
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
import App11 from './App11.vue'
import App12 from './App12.vue'
import Vant from 'vant';
import 'vant/lib/index.css';



const app = createApp(App)
const pinia =createPinia()

let routers=[
  {path:'/App',component:App},
  {path:'/App2',component:App2},
  {path:'/App3',component:App3},
  {path:'/App4',component:App4},
  {path:'/',component:App5},
  {path:'/App6',component:App6},
  {path:'/App7',component:App7},
  {path:'/App8',component:App8},
  {path:'/App9',component:App9},
  {path:'/App10',component:App10},
  {path:'/App11',component:App11},
  {path:'/App12',component:App12}
]

let router=createRouter({routes:routers,history:createWebHashHistory()})

app.use(router)
app.use(ElementPlus)
app.use(pinia)
app.use(Vant);


app.mount('#app')
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
