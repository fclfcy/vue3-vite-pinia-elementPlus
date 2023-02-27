import request from '@/utils/request';

export function getShellCodeList ( system_id, page, per_page, order_by ) { //获取扫描列表
    return request({
        url: `/system/${system_id}/clams?page=${page}&per_page=${per_page}&order_by=${order_by}`,
        method: 'get'
    });
}

export function getVirusesList ( clam_id, page, per_page, order_by ) { //获取病毒详情
    return request({
        url: `/clam/${clam_id}/viruses?page=${page}&per_page=${per_page}&order_by=${order_by}`,
        method: 'get'
    });
}

export function newOrCreatClam ( method, system_id, data, clam_id ) { //新建扫毒任务
    const url = method === 'post' ? `/system/${system_id}/clam` : `/clam/${clam_id}`;
    return request({
        url,
        method,
        data
    });
}

export function executeScan ( clam_id ) { //执行扫毒任务
    return request({
        url: `/clam/${clam_id}`,
        method: 'post',
    });
}

export function getVirusesProgress ( clam_id ) {  //获取扫毒任务
    return request({
        url: `/clam/${clam_id}/progress`,
        method: 'get',
    });
}

export function deleteViruses ( clam_id ) { //删除扫毒任务
    return request({
        url: `/clam/${clam_id}`,
        method: 'delete',
    });
}

export function revokeViruses ( clam_id ) { //取消扫毒任务
    return request({
        url: `/clam/${clam_id}/revoke`,
        method: 'post',
    });
}

export function getFileDirectory ( path ) {  //获取文件目录
    return request({
        url: `/ls?path=${path}`,
        method: 'get',
    });
}

export function uploadUdiskFile ( system_id,  data ) {  //上传扫描文件
    return request({
        url: `/system/${system_id}/clam/file`,
        method: 'post',
        data
    });
}

export function uploadOfflineAuditFile ( params, sysId ) {  //上传离线审计文件目录
    return request({
        url: `/pcaps/${sysId}/upload`,
        method: 'get',
        params
    });
}

export function addVirus ( clam_id, data ) {  //添加virus
    return request({
        url: `/clam/${clam_id}/virus`,
        method: 'post',
        data
    });
}

export function deleteVirus ( clamvirus_id ) {  //删除virus
    return request({
        url: `/clamvirus/${clamvirus_id}`,
        method: 'delete',
    });
}

export function creatShellCodeApi ( system_id, data ) {  //创建恶意代码任务
    return request({
        url: `/system/${system_id}/malice-code`,
        method: 'post',
        data,
        timeout: 30000
    });
}

export function getShellCodeApi ( system_id, params) {  //获取恶意代码任务
    return request({
        url: `/system/${system_id}/malice-codes`,
        method: 'get',
        params
    });
}

export function batchDeleteShellCodeApi ( data ) {  //删除恶意代码任务
    return request({
        url: `/malice-code`,
        method: 'delete',
        data
    });
}

export function deleteShellCodeApi ( id ) {  //删除恶意代码任务
    return request({
        url: `/malice-code/${id}`,
        method: 'delete',
    });
}

export function getDetailListApi ( id, params ) {  //获取恶意代码扫描详情列表
    return request({
        url: `/malice-code/${id}`,
        method: 'get',
        params,
        timeout: 600000
    });
}

export function creatDetailListApi ( id, data ) {  //增加详情页病毒
    return request({
        url: `/malice-code/${id}`,
        method: 'post',
        data
    });
}

export function deleteDetailListApi ( detail_id ) {  //删除恶意代码详情中的单条数据
    return request({
        url: `/malice-code/details/${detail_id}`,
        method: 'delete',
    });
}

export function  executeApi ( id ) {  //执行恶意代码检查
    return request({
        url: `/malice-code/${id}/task`,
        method: 'post',
    });
}

export function  executeStatusApi (id) {  //查询执行进度
    return request({
        url: `/malice-code/${id}/task`,
        method: 'get',
    });
}

export function  revokeExecuteApi ( id ) {  //撤销执行
    return request({
        url: `/malice-code/${id}/revoke`,
        method: 'post',
    });
}
