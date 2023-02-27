import request from '@/utils/request'
const baseUrl = '/api';

/* ---------------------自定义协议----------------------*/

// 获取列表数据
export function get_all_custom_Pmatch ( data ) {
    return request( {
        url: `${baseUrl}/get_all_custom_Pmatch`,
        method: 'post',
        data
    } )
}

// 批量启用&批量停用
export function change_state_custom_Pmatch ( data ) {
    return request( {
        url: `${baseUrl}/change_state_custom_Pmatch`,
        method: 'post',
        data
    } )
}

// 批量删除
export function del_custom_Pmatch ( data ) {
    return request( {
        url: `${baseUrl}/del_custom_Pmatch`,
        method: 'post',
        data
    } )
}

// 添加数据
export function add_custom_Pmatch ( data ) {
    return request( {
        url: `${baseUrl}/add_custom_Pmatch`,
        method: 'post',
        data
    } )
}

// 编辑数据
export function edit_custom_Pmatch ( data ) {
    return request( {
        url: `${baseUrl}/edit_custom_Pmatch`,
        method: 'post',
        data
    } )
}

// 详情
export function get_detail_custom_Pmatch ( data ) {
    return request( {
        url: `${baseUrl}/get_detail_custom_Pmatch?ruleID=${data}`,
        method: 'post'
    } )
}
