import request from '@/utils/request';

// 镜像信息
export function mirrorImageListApi (id, params) {
    return request({
        url: `/images/${id}`,
        method: 'get',
        params
    });
}

// 新增镜像信息
export function addMirrorImageApi (data) {
    return request({
        url: `/images`,
        method: 'post',
        data
    });
}

// 删除镜像信息
export function deleteMirrorImageApi (id) {
    return request({
        url: `/images/${id}`,
        method: 'delete',
    });
}

// 镜像信息可信任
export function trustedMirrorImageApi (id) {
    return request({
        url: `/images/${id}/trusted`,
        method: 'put',
    });
}

// 镜像信息不可信任
export function unTrustedMirrorImageApi (id) {
    return request({
        url: `/images/${id}/untrusted`,
        method: 'put',
    });
}

// 下载镜像
export function downloadMirrorImageApi (id, params) {
    return request({
        url: `/images/${id}/download`,
        method: 'get',
        params
    });
}

// 镜像任务列表
export function mirrorImageTaskListApi (id, params) {
    return request({
        url: `/images/${id}/tasks`,
        method: 'get',
        params
    });
}
// 镜像任务列表
export function addmirrorImageTaskApi (data) {
    return request({
        url: `/images/tasks`,
        method: 'post',
        data
    });
}

// 删除镜像任务
export function deleteMirrorImageTaskApi (id) {
    return request({
        url: `/images/tasks/${id}`,
        method: 'delete',
    });
}

// 编辑镜像任务
export function editMirrorImageTaskApi (id, data) {
    return request({
        url: `/images/tasks/${id}`,
        method: 'put',
        data
    });
}

// 执行镜像任务
export function executeMirrorImageTaskApi (id) {
    return request({
        url: `/images/tasks/${id}/execute`,
        method: 'put',
    });
}

// 撤销镜像任务
export function revokeMirrorImageTaskApi (id) {
    return request({
        url: `/images/tasks/${id}/revoke`,
        method: 'put',
        data
    });
}

// 镜像摘要
export function abstractMirrorImageApi (id) {
    return request({
        url: `/images/tasks/${id}/abstract`,
        method: 'get',
    });
}

// 镜像配置信息
export function configMirrorImageApi (id) {
    return request({
        url: `/images/tasks/${id}/config`,
        method: 'get',
    });
}

// 镜像历史数据
export function historyMirrorImageApi (id, params) {
    return request({
        url: `/images/tasks/${id}/history`,
        method: 'get',
        params
    });
}

// 镜像已安装软件信息
export function packageMirrorImageApi (id, params) {
    return request({
        url: `/images/tasks/${id}/packages`,
        method: 'get',
        params
    });
}

// 镜像包含得密钥信息
export function secretMirrorImageApi (id, params) {
    return request({
        url: `/images/tasks/${id}/secrets`,
        method: 'get',
        params
    });
}

// 镜像漏洞信息
export function vulMirrorImageApi (id, params) {
    return request({
        url: `/images/tasks/${id}/vulnerabilities`,
        method: 'get',
        params
    });
}

// 查询镜像扫描规则
export function mirrorRuleApi (id, params) {
    return request({
        url: `/images/${id}/imagescan/rules`,
        method: 'get',
        params
    });
}

// 添加镜像扫描规则
export function addMirrorRuleApi (data) {
    return request({
        url: `/images/imagescan/rules`,
        method: 'post',
        data
    });
}

// 删除镜像扫描规则
export function deleteMirrorRuleApi (id) {
    return request({
        url: `/images/imagescan/rules/${id}`,
        method: 'delete',
    });
}

// 镜像不安全历史命令
export function mirrorInstructionApi (id, params) {
    return request({
        url: `/images/tasks/${id}/abnormal_instruction`,
        method: 'get',
        params
    });
}

// 镜像敏感信息
export function mirrorSensitivesApi (id, params) {
    return request({
        url: `/images/tasks/${id}/sensitives`,
        method: 'get',
        params
    });
}

// 镜像病毒木马
export function mirrorVirusApi (id, params) {
    return request({
        url: `/images/tasks/${id}/virus_files`,
        method: 'get',
        params
    });
}

// 镜像病毒概述
export function mirrorVirusSummaryApi (id, params) {
    return request({
        url: `/images/tasks/${id}/virus_summary`,
        method: 'get',
        params
    });
}

// 下载手感染的文件
export function mirrorVirusDownloadApi (id, params) {
    return request({
        url: `/images/virus_files/${id}/download`,
        method: 'get',
        params,
        responseType: "arraybuffer"
    });
}
