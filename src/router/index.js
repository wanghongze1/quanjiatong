import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import Iview from 'iview'
import 'iview/dist/styles/iview.css'

Vue.use(Iview);
Vue.use(Router);

export default new Router({
  mode:'history',
  routes: [
    { path: '/', name: 'Home', component: Home },
    
  ]
})
