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
const Goods = () => import( /* webpackChunkName: "Login_Home_Welcome" */ '../views/goods/Goods.vue')
const GoodsAdd = () => import( /* webpackChunkName: "Login_Home_Welcome" */ '../views/goods/Add.vue')
const Picture = () => import( /* webpackChunkName: "Login_Home_Welcome" */ '../views/picture/Picture.vue')
const PictureAdd = () => import( /* webpackChunkName: "Login_Home_Welcome" */ '../views/picture/Add.vue')
const Video = () => import( /* webpackChunkName: "Login_Home_Welcome" */ '../views/video/Video.vue')
const VideoAdd = () => import( /* webpackChunkName: "Login_Home_Welcome" */ '../views/video/Add.vue')

const ManagementLink = () => import( /* webpackChunkName: "Login_Home_Welcome" */ '../views/management/Link.vue')
const ManagementText = () => import( /* webpackChunkName: "Login_Home_Welcome" */ '../views/management/Text.vue')
const ManagementTags = () => import( /* webpackChunkName: "Login_Home_Welcome" */ '../views/management/Tags.vue')

const User = () => import( /* webpackChunkName: "Login_Home_Welcome" */ '../views/user/User.vue')
const UserAdd = () => import( /* webpackChunkName: "Login_Home_Welcome" */ '../views/user/Add.vue')





// const Send = () => import( /* webpackChunkName: "Login_Home_Welcome" */ '../views/homemodule/Send.vue')
// const Management = () => import( /* webpackChunkName: "Login_Home_Welcome" */ '../views/homemodule/Management.vue')

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
      {
        path: 'goods',
        component: Goods
      },
      {
        path: 'goods/add',
        component: GoodsAdd
      },

      {
        path: 'picture',
        component: Picture
      },
      {
        path: 'picture/add',
        component: PictureAdd
      },
      {
        path: 'video',
        component: Video
      },
      {
        path: 'video/add',
        component: VideoAdd
      },
      {
        path: 'management/link',
        component: ManagementLink
      },
      {
        path: 'management/text',
        component: ManagementText
      },
      {
        path: 'management/tags',
        component: ManagementTags
      },
      {
        path: 'user',
        component: User
      },
      {
        path: 'user/add',
        component: UserAdd
      },
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