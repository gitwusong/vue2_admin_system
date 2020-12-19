import Vue from 'vue';
import VueRouter from 'vue-router';
import { menuList } from './menu'
Vue.use(VueRouter);
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

const gloabelRoutes = [
    { path: '/login',name:'login', component:() => import( '@/views/common/Login.vue'), meta: { title: '登录' }}
]
const mainRoutes = [{
    path: '/',
    component:() => import('@/views/common/Home.vue'),
    meta: { title: '主入口' },
    name:'main',
    redirect:'/home',
    children: fnAddDynamicMenuRoutes(menuList,[
        { path: '403',name:'403', component:() => import( '@/views/modules/403'), meta: { title: '403' }},
        { path: '404', name:'404',component:() => import( '@/views/modules/404'), meta: { title: '404' }},
    ],'/')
}]      

function fnAddDynamicMenuRoutes(menuList, route = [], baseUrl = '/') {
    if (!Array.isArray(menuList) && !Array.isArray(route)) throw new Error('menuList 必须是一个数组')
    for (let index = 0; index < menuList.length; index++) {
        if ( menuList[index].list && menuList[index].list.length > 0) {
            route.concat(fnAddDynamicMenuRoutes(menuList[index].list, route, baseUrl + menuList[index].url + '/'))
        } else {
            route.push({
                path:menuList[index].url,
                name:menuList[index].url,
                component: resolve => require([`@/views/modules${baseUrl + menuList[index].url}/index.vue`], resolve),
                meta:{
                    title:menuList[index].name,
                    menuId: menuList[index].menuId,
                    isDynamic: true,
                    permission:menuList[index].permission,
                    isTab: true,
                    iframeUrl: ''
                }
            })
        }
    }
    return route
}
const routes = gloabelRoutes.concat(mainRoutes)
const router =  new VueRouter({
    routes
})

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    document.title = to.meta.title || 'vue-manage-system';
    const token = localStorage.getItem('ms_username');
    if (!token && to.path !== '/login'){ 
        next('/login')
        return 
    }
    if (to.meta.permission){  // 如果是管理员权限则可进入，这里只是简单的模拟管理员权限而已
        token === 'admin' ? next() : next('/403');
        return 
    }
    // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
    if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
        Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
            confirmButtonText: '确定'
        });
        return 
    } 
    next();
})
export default  router
