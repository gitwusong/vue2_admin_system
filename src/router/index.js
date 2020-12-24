import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}

import { menuList } from '@/router/menu'
const globalRouter = [
    {
        path:'/login',
        name:'login',
        components:{ globalView:() => import('@/views/common/login') },
        meta:{
            name:'登录',
            icon:'',
            icon_active:'',
            auth:false,
            menuId: '1',
            parentId: '0'
        }
    }, { path:'/', redirect:'/home', meta:{}, name:'home' }
]

const _loadView = view => resolve => require([`@/views/modules${view}/index.vue`], resolve)
const Header = resolve => require(['@/views/common/header.vue'], resolve)

function asyncRouters(menuList = [], baseUrl = '', routerAll = []) {
    if (menuList && Array.isArray(menuList)) {
        for (let i = 0; i < menuList.length; i++) {
            if (menuList[i].list && menuList[i].list.length) {
                routerAll.concat(asyncRouters(menuList[i].list, `${baseUrl + menuList[i].url}/`, routerAll))
            } else {
                routerAll.push({
                    path:`/${menuList[i].url}`,
                    name:menuList[i].url,
                    components:{
                        headerView: Header,
                        globalView : _loadView(baseUrl + menuList[i].url)
                    },
                    meta:{
                        name:menuList[i].name,
                        icon:menuList[i].icon,
                        icon_active:menuList[i].icon_active,
                        auth:menuList[i].auth,
                        menuId: menuList[i].menuId,
                        parentId: menuList[i].parentId
                    }
                })
            }
        }
        return routerAll
    }
}
const vueRouter = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes:asyncRouters(menuList, '/', globalRouter)
})

vueRouter.beforeEach(( to, from, next) => {
    document.title = to.meta.name
    const token = sessionStorage.getItem('robotUserName')
    if (token) {
        next()
    } else {
        to.path !== '/login' ? next('/login') : next()
    }
})
export default vueRouter
