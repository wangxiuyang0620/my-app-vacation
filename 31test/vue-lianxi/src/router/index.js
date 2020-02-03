import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import Login from '../views/login'
import Class from '../views/class'
import Detail from '../views/detail'
Vue.use(VueRouter)
const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home',
    name: 'home',
    component:Home,
    meta:{
      isLogin:true
    }
  },{
    path:"/class",
    name:"class",
    component:Class,
    meta:{
      isLogin:true
    }
  },{
    path:"/detail",
    name:'detail',
    component:Detail,
    meta:{
      isLogin:true
    }
  },{
    path:'/',
    redirect:'/login'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>{

  //需要做登录拦截的路由
 if(to.meta.isLogin){
    if(localStorage.getItem('token')!==null){
        next()
        return
    }
    next('/login')
    return
 }

 //不需要登录拦截
  next()
})
export default router
