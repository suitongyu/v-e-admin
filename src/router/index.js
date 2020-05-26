import Vue from 'vue'
import VueRouter from 'vue-router'

// import Home from '../views/Home.vue'
// import About from '../views/About.vue'

// 路由懒加载
const Home = () => import('../views/Home.vue')
const Login = () => import('../views/login.vue')
const Column = () => import('../views/column/Column.vue')
const ColumnAdd = () => import('../views/column/Add.vue')
const Article = () => import('../views/article/Article.vue')
const ArticleAdd = () => import('../views/article/Add.vue')
const Goods = () => import('../views/goods/Goods.vue')
const GoodsAdd = () => import('../views/goods/Add.vue')
const Picture = () => import('../views/picture/Picture.vue')
const PictureAdd = () => import('../views/picture/Add.vue')
const Video = () => import('../views/video/Video.vue')
const VideoAdd = () => import('../views/video/Add.vue')

const ManagementLink = () => import('../views/management/Link.vue')
const ManagementText = () => import('../views/management/Text.vue')
const ManagementTags = () => import('../views/management/Tags.vue')

const User = () => import('../views/user/User.vue')
const UserAdd = () => import('../views/user/Add.vue')





// const Send = () => import('../views/homemodule/Send.vue')
// const Management = () => import( '../views/homemodule/Management.vue')

const About = () => import('../views/About.vue')

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


// 导航守卫
// 使用 router.beforeEach 注册一个全局前置守卫，判断用户是否登陆
router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next();
  } else {
    let token = localStorage.getItem('Authorization');
    if (token === null || token === '') {
      next('/login');
    } else {
      next();
    }
  }
});

export default router