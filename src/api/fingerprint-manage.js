import request from '@/utils/request';

// 删除指纹
export function deleteFingerprintApi (data) {
    return request({
        url: '/finger/delete',
        method: 'delete',
        data
    });
}

// 获取指纹列表
export function getFingerprintListApi (id, params) {
    return request({
        // url: `/finger/${id}/list`,
        url: `/finger/0/list`,
        method: 'get',
        params
    });
}

// 上传指纹
export function uploadFingerprintApi (data) {
    return request({
        url: '/finger/upload',
        method: 'post',
        data
    });
}

// 编辑指纹
export function editFingerprintApi (id, data) {
    return request({
        url: `/finger/edit/${id}`,
        method: 'post',
        data
    });
}

// 下载模板
export function downloadTemplateApi (params) {
    return request({
        url: `/finger/template`,
        method: 'get',
        params,
        responseType: 'arraybuffer',
    });
}

// 指纹测试
export function testFingerprintApi (finger_id, data) {
    return request({
        url: `/finger/verify/${finger_id}`,
        method: 'post',
        data
    });
}

// 查看指纹测试进程
export function testPorcessApi () {
    return request({
        url: `/finger/verify/queue`,
        method: 'get',
    });
}

// 指纹停用
export function stopFingerprintApi (finger_id) {
    return request({
        url: `/finger/discard/${finger_id}`,
        method: 'post',
    });
}

// 指纹启用
export function startFingerprintApi (finger_id) {
    return request({
        url: `/finger/reopen/${finger_id}`,
        method: 'post',
    });
}

// 查看源码
export function viewSourceCodeApi (finger_id) {
    return request({
        url: `/finger/display/${finger_id}`,
        method: 'get',
    });
}

// 查看日志
export function viewLogApi (finger_id) {
    return request({
        url: `/finger/log/${finger_id}`,
        method: 'post',
    });
}

// 日志管理
export function logListApi (data) {
    return request({
        url: `/finger/log`,
        method: 'post',
        data
    });
}

// 显示文件
export function seeFilestApi (data) {
    return request({
        url: `/system/files/list`,
        method: 'post',
        data
    });
}

// 显示依赖
export function dependListApi (params) {
    return request({
        url: `/dev/dependent/info`,
        method: 'get',
        params
    });
}

// 新增依赖
export function addDependApi (data) {
    return request({
        url: `/finger/dependent/add`,
        method: 'post',
        data
    });
}

// 删除依赖
export function delDependApi (data) {
    return request({
        url: `/finger/dependent/del`,
        method: 'delete',
        data
    });
}

// 查看依赖py文件
export function seePyDependApi (data) {
    return request({
        url: `/system/file/read`,
        method: 'post',
        data
    });
}

// 导出脚本
export function exportDevApi (id, params) {
    return request({
        url: `/finger/export/${id}`,
        method: 'get',
        params
    });
}
