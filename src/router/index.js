import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Detail = () => import('../views/detail/Detail')


const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}


// 1、安装插件
Vue.use(VueRouter)

const routes = [
  {
    path:'',
    redirect:'/home'
  },
  {
    path:'/home',
    component:Home,
    name:'home'
  },
  {
    path:'/category',
    component:Category,
    name:'category'
  },
  {
    path:'/cart',
    component:Cart,
    name:'cart'
  },
  {
    path:'/profile',
    component:Profile,
    name:'profile'
  },
  {
    path:'/detail/:id',
    component:Detail,
    name:'detail'
  }
]

const router = new VueRouter({
  routes,
  mode:'history'
})

export default router
