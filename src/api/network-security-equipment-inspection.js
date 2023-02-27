import request from '@/utils/request';

// 获取网络设备核查列表
export function getNetworkListApi (sid, params) {
    return request({
        url: `/system/${sid}/check/devices`,
        method: 'get',
        params
    });
}

// 点击检查，获取网络设备核查
export function getCheckListApi (cid, params) {
    return request({
        url: `/check/${cid}`,
        method: 'get',
        params,
    });
}

// 点击检查时接口
export function clickCheckApi (cid) { // 上传文件
    return request({
        url: `/check/${cid}`,
        method: 'post',
        timeout: 30000
    });
}

// 创建网络设备检查任务
export function createNetworkApi (data) {
    return request({
        url: `/check/device`,
        method: 'post',
        data,
        timeout: 30000
    });
}

// 提交修改检查
export function putCheckEditApi (cid, data) {
    return request({
        url: `/check/${cid}`,
        method: 'put',
        data
    });
}

// 删除网络设备核查任务
export function deleteNetworkApi (cid) {
    return request({
        url: `/check/device/${cid}`,
        method: 'delete',
    });
}

// 批量删除网络设备核查任务
export function batchDeleteNetworkApi (data) {
    return request({
        url: `/check/device`,
        method: 'delete',
        data
    });
}

// 下载网络设备核查离线工具
export function downloadOutlineTollApi (params) {
    return request({
        url: `/check/tools/download`,
        method: 'get',
        params,
        responseType: 'arraybuffer',
    });
}

// 离线上传
export function uploadOutlineApi (id, data) {
    return request({
        url: `/check/${id}/upload`,
        method: 'post',
        data: { ...data, model: 'NetDeviceCheck' }
    });
}

// 取消网络核查任务
export function cancleNetTaskApi () {
    return request({
        url: `/check/net_device`,
        method: 'delete',
    });
}

// 开始网络核查任务
export function startNetTaskApi (data) {
    return request({
        url: `/check/net_device`,
        method: 'post',
        data
    });
}

// 查询网络核查任务进度
export function netTaskProgressApi () {
    return request({
        url: `/check/net_device/progress`,
        method: 'get',
    });
}

// 查询厂商名称
export function getVendorApi () {
    return request({
        url: `/check/net_device/vendor`,
        method: 'get',
    });
}

// 查询资产类型名称
export function getAssetTypeApi (name) {
    return request({
        url: `/check/net_device/asset_type/${name}`,
        method: 'get',
    });
}

// 查询资产类型名称
export function editTaskApi (data) {
    return request({
        url: `/check/device`,
        method: 'put',
        data
    });
}