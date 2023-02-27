import request from '@/utils/request';

// 获取系统设备核查列表
export function getSysCheckListApi ( sid, params ) {
    return request( {
        url: `/system/${sid}/sys-devices`,
        method: 'get',
        params
    } );
}

// 增加系统设备核查
export function createSysCheckApi ( sid, data ) {
    return request( {
        url: `/system/${sid}/sys-device`,
        method: 'post',
        data,
        timeout: 30000
    } );
}

// 上传文件
export function importFileApi ( cid, data ) {
    return request( {
        url: `/sys-device/${cid}/import`,
        method: 'post',
        data
    } );
}

// 删除系统设备核查列表
export function deleteSysCheckApi ( cid ) {
    return request( {
        url: `/sys-device/${cid}`,
        method: 'delete'
    } );
}

// 批量删除系统设备核查列表
export function batchDeleteSysCheckApi ( data ) {
    return request( {
        url: `/sys-devices`,
        method: 'delete',
        data
    } );
}

// 点击检查
export function clickCheckApi ( cid ) {
    return request( {
        url: `/sys-device/${cid}`,
        method: 'post',
        timeout: 50000
    } );
}

// 获取检查后的数据
export function getCheckedApi ( cid, params ) {
    return request( {
        url: `/sys-device/${cid}/result`,
        method: 'get',
        params
    } );
}

// 失去焦点修改
export function blurPustApi ( cid, rid, data ) {
    return request( {
        url: `/sys-device/${cid}/result/${rid}`,
        method: 'put',
        data
    } );
}

// 分页增加
export function changePagePostApi ( sid, data ) {
    return request( {
        url: `/sys-device/${sid}/result`,
        method: 'post',
        data
    } );
}

// 删除分页结果
export function changePageDeleteApi ( rid, data ) {
    return request( {
        url: `/sys-device/result/${rid}`,
        method: 'delete',
        data
    } );
}

// os详情
export function osResultApi (id, params ) {
    return request( {
        url: `/os_device/${id}/result`,
        method: 'get',
        params
    } );
}

// 网络核查支持的操作系统
export function osTypeApi ( params ) {
    return request( {
        url: `/check/os_device/os`,
        method: 'get',
        params
    } );
}

// 网络核查支持的操作系统版本
export function osTypeVersionApi ( os ) {
    return request( {
        url: `/check/os_device/version/${os}`,
        method: 'get',
    } );
}

// 修改操作系统详情
export function editOsDetailApi (id, data ) {
    return request( {
        url: `/device/check_item/value/${id}`,
        method: 'put',
        data
    } );
}

// 获取数据库检查项
export function getOsCheckOptionApi (id, params ) {
    return request( {
        url: `/os_device/check_item/${id}`,
        method: 'get',
        params
    } );
}

// 网络核查进度
export function networkCheckProgressApi ( params ) {
    return request( {
        url: `/check/os_device/progress`,
        method: 'get',
        params
    } );
}
// 任务详情
export function dataBaseDetailApi ( id, params ) {
    return request( {
        url: `/db-device/${id}/result`,
        method: 'get',
        params
    } );
}

// 获取核查任务列表
export function getCheckTaskApi (sid, type, params) {
    return request( {
        url: `/check/${sid}/${type}`,
        method: 'get',
        params
    } );
}

// 新增配置核查任务
export function addCheckTaskApi (sid, type, data) {
    return request( {
        url: `/check/${sid}/${type}`,
        method: 'post',
        data
    } );
}

// 更新配置核查任务
export function editCheckTaskApi (type, data) {
    return request( {
        url: `/check/${type}`,
        method: 'put',
        data
    } );
}

// 删除配置核查任务
export function deleteCheckTaskApi (cid, type) {
    return request( {
        url: `/check/${type}/${cid}`,
        method: 'delete',
    } );
}

// 检查操作
export function handleCheckApi (type, data) {
    return request( {
        url: `/check/${type}`,
        method: 'post',
        data
    } );
}

// 检查进度
export function checkProgressApi (type, params) {
    return request( {
        url: `/check/${type}/progress`,
        method: 'get',
        params
    } );
}

// 取消检查
export function cancleCheckApi (type, params) {
    return request( {
        url: `/check/${type}`,
        method: 'delete',
        params
    } );
}

// 查看任务详情（网络设备核查）
export function getNetCheckDetailsApi (type, cid, params) {
    return request( {
        url: `/${type}/${cid}/result`,
        method: 'get',
        params
    } );
}

// 修改任务详情（网络设备核查）
export function editNetCheckDetailskApi (type, nid, rid, data) {
    return request( {
        url: `/${type}/${nid}/result/${rid}`,
        method: 'put',
        data
    } );
}

// 获取设备检查项结果
export function getCheckDetailApi (id, device_type, params ) {
    return request( {
        url: `/device/check_item/value/${id}/${device_type}`,
        method: 'get',
        params
    } );
}

// 修改数据库详情
export function editCheckDetailApi ( id, data ) {
    return request( {
        url: `/device/check_item/value/${id}`,
        method: 'put',
        data
    } );
}

// 获取设备检查项
export function getCheckOptionApi (type, cid, params) {
    return request( {
        url: `/${type}/check_item/${cid}`,
        method: 'get',
        params
    } );
}

// 添加设备检查项
export function addCheckOptionApi (id, type, data ) {
    return request( {
        url: `/device/check_item/add/${id}/${type}`,
        method: 'post',
        data
    } );
}

// 设备厂商/类型
export function deviceTypeApi (type) {
    return request( {
        url: `/check/${type}/list`,
        method: 'get',
    } );
}

// 设备版本
export function deviceVersionApi (type, name) {
    return request( {
        url: `/check/${type}/version/${name}`,
        method: 'get',
    } );
}
