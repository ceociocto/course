import Login from '@/views/login'
import Dashboard from '@/views/dashboard'
import Main from '@/views/main'
import VueRouter from 'vue-router';
const routes = [
  { path: '/login', name: 'Login', component: Login},
  { path: '/', name: 'Main', component: Main,
    children: [
      { path: 'dashboard', name: 'Dashboard', component: Dashboard},
      ]
  }
]

export default new VueRouter({
  routes,
  mode: 'history'
})