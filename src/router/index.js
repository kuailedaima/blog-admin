import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home.vue'
import Login from '../views/login/Login.vue'
import Register from '../views/login/Register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    redirect: '/login',
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})


//挂载路由导航守卫
router.beforeEach((to,from,next) =>{
  if(to.path === '/login') return next()
  //获取token
  const tokenStr = window.sessionStorage.getItem('token');
  if(!tokenStr) return next ('/login')
  next()
})

export default router
