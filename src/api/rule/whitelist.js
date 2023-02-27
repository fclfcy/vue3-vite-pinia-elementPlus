import request from '@/utils/request';
const baseUrl = '/api';

/* ---------------------自学习 白名单----------------------*/

// 开始学习
export function whiteliststartstudy ( data ) {
    return request( {
        url: `${baseUrl}/whiteliststartstudy`,
        method: 'post',
        data
    } )
}

// 停止学习
export function whiteliststopstudy ( query ) {
    return request( {
        url: `${baseUrl}/whiteliststopstudy`,
        method: 'get',
        params: query
    } )
}

// 获取学习状态
export function whiteliststatus ( query ) {
    return request( {
        url: `${baseUrl}/whiteliststatus`,
        method: 'get',
        params: query
    } )
}

// 数据列表
export function whitelistRes ( data ) {
    return request( {
        url: `${baseUrl}/whitelistRes`,
        method: 'post',
        data
    } )
}

// 批量启用
export function whitelistDeploy ( data ) {
    return request( {
        url: `${baseUrl}/whitelistDeploy`,
        method: 'post',
        data
    } )
}

// 批量停用
export function whitelistCancelDeploy ( data ) {
    return request( {
        url: `${baseUrl}/whitelistCancelDeploy`,
        method: 'post',
        data
    } )
}

// 批量删除
export function whitelistDeleteRules ( data ) {
    return request( {
        url: `${baseUrl}/whitelistDeleteRules`,
        method: 'post',
        data
    } )
}

// 设置未匹配默认动作
export function whitelistSetDefaultAction ( data ) {
    return request( {
        url: `${baseUrl}/whitelistSetDefaultAction`,
        method: 'post',
        data
    } )
}

// 获取未匹配规则默认动作
export function whitelistGetDefaultAction ( query ) {
    return request( {
        url: `${baseUrl}/whitelistGetDefaultAction`,
        method: 'get',
        params: query
    } )
}

// 单条事件处理
export function whitelistUpdate ( data ) {
    return request( {
        url: `${baseUrl}/whitelistUpdate`,
        method: 'post',
        data
    } )
}

/* ---------------------自定义 白名单----------------------*/

// 自定义白名单 -数据列表
// 数据列表
export function whitelist_search_custom_rule ( data ) {
    return request( {
        url: `${baseUrl}/whitelist_search_custom_rule`,
        method: 'post',
        data
    } )
}

// 批量启用/批量停用
export function enable_custom_control ( data ) {
    return request( {
        url: `${baseUrl}/enable_custom_control`,
        method: 'post',
        data
    } )
}

// 批量删除
export function custom_del_control ( data ) {
    return request( {
        url: `${baseUrl}/custom_del_control`,
        method: 'post',
        data
    } )
}

// 添加数据
export function custom_add_control ( data ) {
    return request( {
        url: `${baseUrl}/custom_add_control`,
        method: 'post',
        data
    } )
}

// 编辑数据
export function custom_modify_control ( data ) {
    return request( {
        url: `${baseUrl}/custom_modify_control`,
        method: 'post',
        data
    } )
}

// 数据详情
export function whitelist_search_one_rule ( data ) {
    return request( {
        url: `${baseUrl}/whitelist_search_one_rule`,
        method: 'post',
        data
    } )
}

// 开始学习前的接口
export function startStudyOrigin (  ) {
    return request( {
        url: `/engine/start`,
        method: 'get',
    } )
}

// 开始学习后的接口
export function stopStudyOrigin (  ) {
    return request( {
        url: `/engine/stop`,
        method: 'get',
    } )
}
