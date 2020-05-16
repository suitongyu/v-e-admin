import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../views/Home.vue'
// import About from '../views/About.vue'

// 路由懒加载
const Home = () => import( /* webpackChunkName: "Login_Home_Welcome" */ '../views/Home.vue')
const Login = () => import( /* webpackChunkName: "Login_Home_Welcome" */ '../views/login.vue')
const Column = () => import( /* webpackChunkName: "Login_Home_Welcome" */ '../views/column/Column.vue')
const ColumnAdd = () => import( /* webpackChunkName: "Login_Home_Welcome" */ '../views/column/Add.vue')
const Article = () => import( /* webpackChunkName: "Login_Home_Welcome" */ '../views/article/Article.vue')
const ArticleAdd = () => import( /* webpackChunkName: "Login_Home_Welcome" */ '../views/article/Add.vue')



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
    path: '/',
    redirect: 'column',
    component: Home,
    children: [{
        path: 'column',
        component: Column
      },
      {
        path: 'column/add',
        component: ColumnAdd
      },
      {
        path: 'article',
        component: Article
      },
      {
        path: 'article/add',
        component: ArticleAdd
      },
      // {
      //   path: 'product',
      //   component: Product
      // },
      // {
      //   path: 'video',
      //   component: Video
      // },
      // {
      //   path: 'picture',
      //   component: Picture
      // },
      // {
      //   path: 'picture',
      //   component: Picture
      // },
      // {
      //   path: 'picture',
      //   component: Picture
      // },
      // {
      //   path: 'picture',
      //   component: Picture
      // }

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