import request from '@/utils/request';

export function login (data) {
    return request({
        url: '/login',
        method: 'post',
        data
    });
}

export function getUserInfo () {
    return request({
        url: '/user',
        method: 'get',
    });
}

export function logout () {
    return request({
        url: '/logout',
        method: 'post'
    });
}

export function sysRebootApi () {
    return request({
        url: '/reboot',
        method: 'get'
    });
}

export function sysShutdownApi () {
    return request({
        url: '/shutdown',
        method: 'get'
    });
}

export function getHelp () {
    return `/v1/instruction`;
}

export function getVersionApi () {
    return request({
        url: '/versions',
        method: 'get'
    });
}

export function proofPasswordApi (data) {
    return request({
        url: '/clear/verify',
        method: 'post',
        data
    });
}

export function traceRemovalApi () {
    return request({
        url: '/clear',
        method: 'post',
        timeout: 300000
    });
}

// 恢复出厂
export function restoreFactorySettingsApi () {
    return request({
        url: '/init',
        method: 'post',
        timeout: 300000
    });
}

// 获取出厂和擦除状态
export function getRestoreStatusApi (params) {
    return request({
        url: '/restore-wipe/status',
        method: 'get',
        params
    });
}

export function getBatteryApi () {
    return request({
        url: '/battery',
        method: 'get',
    });
}

// 查询是否有打印机
export function isPrintApi () {
    return request({
        url: '/printer-info',
        method: 'get',
    });
}

// 执行打印操作
export function printApi (data) {
    return request({
        url: '/print',
        method: 'post',
        data
    });
}

// 系统升级
export function sysUpgradeApi (data) {
    return request({
        url: '/upgrade',
        method: 'post',
        data,
        timeout: 30000
    });
}

// 获取ukey列表
export function getUKeyListApi () {
    return request({
        url: '/ukey',
        method: 'get',
    });
}

//用户绑定ukey
export function userboundUKeyApi (uid, data) {
    return request({
        url: `user/${uid}/ukey`,
        method: 'post',
        data
    });
}

//用户解绑ukey
export function userUnboundUKeyApi (uid, data) {
    return request({
        url: `user/${uid}/ukey`,
        method: 'delete',
        data
    });
}

// 机器解绑ukey
export function machineUnboundUKeyApi (data) {
    return request({
        url: '/machine-info/ukey',
        method: 'delete',
        data,
    });
}

// 机器绑定ukey
export function machineboundUKeyApi (id, data) {
    return request({
        url: `/machine-info/${id}/ukeys`,
        method: 'post',
        data,
    });
}

// 获取机器信息
export function machineInfoApi () {
    return request({
        url: '/machine-info',
        method: 'get',
    });
}

// 指定机器码
export function editMachinecodeApi (data) {
    return request({
        url: '/machine-info',
        method: 'post',
        data
    });
}

// 获取机器绑定得ukey
export function getMachineUKeyApi (id, params) {
    return request({
        url: `/machine-info/${id}/ukeys`,
        method: 'get',
        params
    });
}

// 获取系统信息
export function getSystemMessageApi () {
    return request({
        url: `/system/message`,
        method: 'get',
    });
}

// 获取检查工具
export function getInspectionToolApi (params) {
    return request({
        url: `/inspectiontool`,
        method: 'get',
        params
    });
}

// 检查工具升级
export function inspectionToolUpgradeApi (data) {
    return request({
        url: `/checktools/upgrade`,
        method: 'post',
        data,
        timeout: 30000
    });
}

// 密码过期时间
export function getUserPasswordTimeApi (params) {
    return request({
        url: `/config`,
        method: 'get',
        params,
    });
}

