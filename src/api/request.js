import axios from 'axios'
// import { MessageBox } from 'element-ui'
import { loginOut } from '@/utils'
const service = axios.create({
    // process.env.NODE_ENV === 'development' 来判断是否开发环境
    // easy-mock服务挂了，暂时不使用了
    // baseURL: 'https://www.easy-mock.com/mock/592501a391470c0ac1fab128',
    timeout: 5000,
    headers: {
        'Content-type': 'application/json;charset=UTF-8'
    }
})
service.interceptors.request.use(
    config => {
        // console.log('config', config)
        config.headers['x-access-token'] = sessionStorage.getItem('x-access-token') || ''
        return config
    },
    error => {
        console.log(error)
        return Promise.reject()
    }
)
service.interceptors.response.use(
    response => {
        if (response.status === 200) {
            return response.data
        } else {
            // MessageBox.alert(`请重新登录,${response.status}`, '提示', {
            //     confirmButtonText: '确定',
            //     callback: () => {
            //         loginOut()
            //     }
            // })

            // const status = confirm('服务器异常或者是token验证失败,请重新登录')
            // if (status) {
            //     loginOut()
            // }
            loginOut()
            Promise.reject(response)
        }
    },
    error => {
        // MessageBox.alert(`请重新登录,${error}`, '提示', {
        //     confirmButtonText: '确定',
        //     callback: () => {
        //         loginOut()
        //     }
        // })
        return Promise.reject(error)
    }
)

export default service
