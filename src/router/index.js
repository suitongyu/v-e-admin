import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../views/Home.vue'
// import About from '../views/About.vue'

// 路由懒加载
const Home = () => import( /* webpackChunkName: "Login_Home_Welcome" */ '../views/Home.vue')
const Login = () => import( /* webpackChunkName: "Login_Home_Welcome" */ '../views/login.vue')
const Send = () => import( /* webpackChunkName: "Login_Home_Welcome" */ '../views/homemodule/Send.vue')
const Management = () => import( /* webpackChunkName: "Login_Home_Welcome" */ '../views/homemodule/Management.vue')

const About = () => import( /* webpackChunkName: "Login_Home_Welcome" */ '../views/About.vue')

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    redirect: '/login' //初始化路由跳转
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: 'send',
        component: Send
      },
      {
        path: 'management',
        component: Management
      }

    ]
  },
 
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About

  },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router