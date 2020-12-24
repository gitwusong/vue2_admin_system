import Router from '../router'
import { Message } from 'element-ui'
export const logoTitle = {
    title:'上海欧秒机器人智能巡检系统',
    icon:'/images/logo.ico'
}

export function loginOut() {
    sessionStorage.removeItem('robotUserName')
    sessionStorage.removeItem('x-access-token')
    Router.replace('/login')
    Message({
        type:'success',
        message:'退出登录成功'
    })
}