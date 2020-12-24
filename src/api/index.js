import request from './request'
import { uuid } from 'vue-uuid'
import moment from 'moment'
const ajaxUrl = '/ajax'

const ajax = {}
async function executeProcedure(name, json_paramset, url) {
    var user_token = ''
    var json_obj_request = {
        'id':uuid.v1(),
        'version':'1.0.0.0',
        'time':moment().format('yyyy-MM-DD hh:mm:ss.SSS'),
        'token':user_token,
        'digest':'',
        'type':'procedure',
        'procedure':{
            'name':name,
            'paramset':json_paramset || {}
        }
    }

    console.log('---------------------------------------------------------------------------------------------------------------------')
    //
    const json_obj_response = await request({
        url: url || ajaxUrl,
        method: 'post',
        data: json_obj_request
    })
    if (!json_obj_response) throw new Error('json_obj_response is null')
    // if (!json_obj_response.status) throw new Error('json_obj_response.status is null')
    // if (json_obj_response.status.code !== 200) throw new Error(`json_obj_response.status failed, code:${json_obj_response.status.code}, text:${json_obj_response.status.text}`)
    if (!json_obj_response.procedure) throw new Error('json_obj_response.procedure is null')
    if (!json_obj_response.procedure.dataset) throw new Error('json_obj_response.procedure.dataset is null')
    if (!Array.isArray(json_obj_response.procedure.dataset)) throw new Error('json_obj_response.procedure.dataset is not type of array')

    console.log('json_obj_response:', json_obj_response)
    console.log('---------------------------------------------------------------------------------------------------------------------')

    //
    const dataset = json_obj_response.procedure.dataset
    return dataset
}

ajax.p_user_login = async function(paramset) { // 登录
    return await executeProcedure('p_user_login', paramset, 'login')
}
ajax.p_task_node_query = async function(paramset) { // 任务节点查询
    return await executeProcedure('p_task_node_query', paramset)
}
ajax.p_task_list_query = async function(paramset) { // 任务列表查询
    return await executeProcedure('p_task_list_query', paramset)
}
export default ajax