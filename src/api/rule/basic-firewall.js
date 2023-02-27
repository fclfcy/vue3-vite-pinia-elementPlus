import request from '@/utils/request';
const baseUrl = '/api';

/* ---------------------基础防火墙----------------------*/

// 获取列表数据
export function getBasicFirewall ( data ) {
    return request( {
        url: `${baseUrl}/ShowACLRules`,
        method: 'post',
        data
    } )
}

// 批量启用&停用
export function changeBasicFirewallStatus ( data ) {
    return request( {
        url: `${baseUrl}/ChangeACLRulesStaus`,
        method: 'post',
        data
    } )
}

// 批量删除
export function deleteBasicFirewall ( data ) {
    return request( {
        url: `${baseUrl}/DelACLRules`,
        method: 'post',
        data
    } )
}

// 策略导出
export function exportBasicFirewall ( data ) {
    return request( {
        url: `${baseUrl}/ExportACLRules`,
        method: 'post',
        data
    } )
}

// 策略导入
export function importBasicFirewall ( formData ) {
    return request( {
        url: `${baseUrl}/ImportACLRules`,
        headers: { 'content-type': 'multipart/form-data' },
        method: 'post',
        data: formData
    } )
}

// 基础防火墙添加规则
export function createBasicFirewall ( data ) {
    return request( {
        url: `${baseUrl}/AddACLRule`,
        method: 'post',
        data
    } )
}

// 获取详情数据
export function getBasicFirewallDetail ( data ) {
    return request( {
        url: `${baseUrl}/ShowACLRulesDetail`,
        method: 'post',
        data
    } )
}

// 基础防火墙----弹窗编辑
export function editFiveTupleRule ( data ) {
    return request( {
        url: `${baseUrl}/EditACLRule`,
        method: 'post',
        data
    } )
}

/* ---------------------地址对象----------------------*/

// 获取列表数据
export function getLocationData ( query ) {
    return request( {
        url: `${baseUrl}/getall_object_addr`,
        method: 'get',
        params: query
    } )
}

// 批量删除
export function deleteLocation ( data ) {
    return request( {
        url: `${baseUrl}/delete_object_addr`,
        method: 'post',
        data
    } )
}

// 添加地址对象
export function createLocation ( data ) {
    return request( {
        url: `${baseUrl}/add_object_addr`,
        method: 'post',
        data
    } )
}

// 获取地址对象单条信息
export function getLocationDetail ( query ) {
    return request( {
        url: `${baseUrl}/getone_edit_object_addr`,
        method: 'get',
        params: query
    } )
}

// 编辑地址对象提交
export function editLocation ( data ) {
    return request( {
        url: `${baseUrl}/edit_object_addr`,
        method: 'post',
        data
    } )
}

/* ---------------------时间对象----------------------*/

// 获取列表数据
export function getTimeObject ( query ) {
    return request( {
        url: `${baseUrl}/get_object_schedtime`,
        method: 'get',
        params: query
    } )
}

// 批量删除
export function deleteTimeObject ( data ) {
    return request( {
        url: `${baseUrl}/del_object_schedtime`,
        method: 'post',
        data
    } )
}

// 添加时间对象
export function createTimeObject ( data ) {
    return request( {
        url: `${baseUrl}/add_object_schedtime`,
        method: 'post',
        data
    } )
}

// 获取编辑时间对象信息
export function getTimeObjectDetail ( query ) {
    return request( {
        url: `${baseUrl}/get_object_schedtime_detail`,
        method: 'get',
        params: query
    } )
}

// 提交更新时间对象
export function editTimeObject ( data ) {
    return request( {
        url: `${baseUrl}/edit_object_schedtime`,
        method: 'post',
        data
    } )
}

// 诊断数据统计
export function getDiagFlow ( params ) {
    return request( {
        url: `${baseUrl}/diag-flow-statistics`,
        method: 'get',
        params,
        timeout: 12000
    } )
}

// 流量统计
export function getFlowStatistics ( params ) {
    return request( {
        url: `${baseUrl}/traffic-type-statistics`,
        method: 'get',
        params,
    } )
}

// 报文长度分布
export function getPackageLength ( params ) {
    return request( {
        url: `${baseUrl}/package-length-statistics`,
        method: 'get',
        params,
    } )
}


