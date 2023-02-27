import request from '@/utils/request'

//执行脆弱性评估
export function excuteApi (sys_id) {
    return request( {
        url: `weakness/${sys_id}/evaluation`,
        method: 'post',
    } )
}

//获取脆弱性评估信息
export function getInfoApi (sys_id) {
    return request( {
        url: `weakness/${sys_id}/info`,
        method: 'get',
    } )
}

//获取脆弱性评估配置选项信息
export function getOptionApi (sys_id) {
    return request( {
        url: `weakness/${sys_id}/config`,
        method: 'get',
    } )
}

//提交脆弱性评估配置选项信息
export function postOptionApi (sys_id, data) {
    return request( {
        url: `weakness/${sys_id}/config`,
        method: 'post',
        data
    } )
}

// 选择特定配置
export function selectOptionApi (sys_id, data) {
    return request( {
        url: `weakness/${sys_id}/config/choose`,
        method: 'post',
        data
    } )
}

// 检查是否适用系统推荐配置
export function checkApi (sys_id) {
    return request( {
        url: `weakness/${sys_id}/evaluate/check`,
        method: 'get',
    } )
}

// 系统配置列表
export function systemOptionListApi () {
    return request( {
        url: `weakness/config/list`,
        method: 'get',
    } )
}