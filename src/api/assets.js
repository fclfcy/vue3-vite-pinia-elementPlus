import request from '@/utils/request';

export function stopDeep (device_id) { //获取扫描列表详情
    return request({
        url: `/system/assets/device/${device_id}/exit`,
        method: 'delete',
    });
}

export function stopScan (task_id) { //停止扫描列表详情
    return request({
        url: `system/task/${task_id}/scan`,
        method: 'delete',
    });
}

export function getScanResultSummary (task_id, page, per_page, name) { //获取扫描列表详情
    return request({
        url: `/system/task/${task_id}/assets/list?page=${page}&per_page=${per_page}&ip=${name}`,
        method: 'get',
    });
}

export function getPortResult (device_id, params) { //获取扫描列表
    return request({
        url: `/system/assets/device/${device_id}/ports`,
        method: 'get',
        params
    });
}

export function deleteIP (device_id) { //删除IP
    return request({
        url: `/system/assets/device/${device_id}/del`,
        method: 'delete',
    });
}

export function batchDeleteApi (data) { //批量删除
    return request({
        url: `/system/assets/devices`,
        method: 'delete',
        data
    });
}

export function getTypesList (params) { //资产类型列表
    return request({
        url: `/asset/types`,
        method: 'get',
        params
    });
}

export function getVendorsList () { //资产类型列表
    return request({
        url: `/asset/vendors`,
        method: 'get',
    });
}

export function createScanAssets (task_id, data) { // 新增任务详情
    return request({
        url: `/system/task/${task_id}/assets/create`,
        method: 'post',
        data
    });
}

export function editScanAssets (id, data) { // 新增任务详情
    return request({
        url: `/system/assets/device/${id}/edit`,
        method: 'put',
        data
    });
}
export function getScanProgress (taskId) { //获取扫描进度
    return request({
        url: `/system/task/${taskId}/scan-progress`,
        method: 'get',
    });
}

export function newTask (id, data) { //新建任务
    return request({
        url: `/system/${id}/task`,
        method: 'post',
        data
    });
}

export function getUsbInfo () { //获取U盘信息
    return request({
        url: `/system/usb_info`,
        method: 'get',
    });
}

export function export_surface (export_path, time) { //导出
    return request({
        url: `/system/export_properties?path=${export_path}&t=${time}`,
        method: 'get',
        responseType: 'arraybuffer',
    });
}

export function import_surface (taskId, data) { //导入模板
    return request({
        url: `/system/task/${taskId}/upload_properties`,
        method: 'post',
        data
    });
}

export function getUsb_files () { //获取U盘文件列表
    return request({
        url: `/system/usb_files`,
        method: 'get',
    });
}

export function ejectUsb (fs, mount_point) { //U盘弹出
    return request({
        url: `/system/usb_umount?fs=${fs}&mount_point=${mount_point}`,
        method: 'post',
    });
}

export function repairUsb (data) { //U盘修复
    return request({
        url: `/system/mount/fix`,
        method: 'post',
        data
    });
}

//拓扑
export function topology (task_id) {
    return request({
        url: `/system/task/${task_id}/topology`,
        method: 'get',
    });
}

//统计拓扑
export function staticsTopo (sysId) {
    return request({
        url: `/system/${sysId}/topology`,
        method: 'get',
    });
}


// 单个设备信息
export function onceDeviceInfo (device_id) {
    return request({
        url: `/system/assets/device/${device_id}/detail`,
        method: 'get'
    });
}

// 自动分析
export function autoAnalysis (task_id) {
    return request({
        url: `/system/task/${task_id}/assets/analyse`,
        method: 'get'
    });
}

// 自动分析
export function staticsAutoAnalysis (sysId) {
    return request({
        url: `/system/${sysId}/assets/analyse`,
        method: 'get'
    });
}

// 深度分析
export function deepAnalysis (device_id, data) {
    return request({
        url: `/system/assets/device/${device_id}/deep_scan`,
        method: 'post',
        data
    });
}

// 深度分析进度
export function deepAnalysisProgress (device_id) {
    return request({
        url: `/system/assets/device/${device_id}/progress`,
        method: 'get'
    });
}

// 深度分析是否占用
export function isDeepAnalysis (task_id) {
    return request({
        url: `/system/task/${task_id}/assets/device/progress`,
        method: 'get'
    });
}

// 深度分析占用设备具体信息
export function onceDeepAnalysis (device_id) {
    return request({
        url: `/system/assets/device/${device_id}/progress`,
        method: 'get'
    });
}

// 执行一阶段扫描任务
export function performScanTasks (task_id) {
    return request({
        url: `/system/task/${task_id}/scan`,
        method: 'post'
    });
}

// 获取正在扫描的task_id
export function getScanTaskId (system_id) {
    return request({
        url: `/system/${system_id}/latest_masscan_task`,
        method: 'get'
    });
}

// 获取资产扫描漏洞信息
export function loopInfo (deviceId, params) {
    return request({
        url: `/system/assets/device/${deviceId}/exploit`,
        method: 'get',
        params
    });
}

// 获取资产类型
export function getAssetTypesApi () {
    return request({
        url: `/asset/types`,
        method: 'get',
    });
}

// 根据资产类型id获取关联的厂商
export function getModelsVendorApi (tid) {
    return request({
        url: `/asset/type/${tid}/vendor`,
        method: 'get',
    });
}

// 根据厂商id获取关联的型号
export function getVendorModelsApi (vid) {
    return request({
        url: `/asset/vendor/${vid}/model`,
        method: 'get',
    });
}

// 服务列表
export function getServiceListApi (params) {
    return request({
        url: `/system/assets/service/list`,
        method: 'get',
        params
    });
}

// 历史数据
export function historyListApi (sys_id, params) {
    return request({
        url: `/system/${sys_id}/tasks`,
        method: 'get',
        params
    });
}

// 历史数据详情
export function historyDetailListApi (sys_id, params) {
    return request({
        url: `/system/task/${sys_id}/assets/list`,
        method: 'get',
        params
    });
}

// 获取系统状态数据
export function systemStateApi () {
    return request({
        url: `/system/monitor/info`,
        method: 'get',
    });
}

// 
export function getPrimaryTypeListApi () {
    return request({
        url: `/asset/primary-types`,
        method: 'get',
    });
}
// 多扫描结果列表
export function getRecordsListApi (id, params) {
    return request({
        url: `/assets/${id}/records`,
        method: 'get',
        params
    });
}

//资产统计创建任务
export function staticCreateTaskApi (sysId, data) {
    return request({
        url: `/system/${sysId}/task`,
        method: 'post',
        data
    });
}

//资产统计删除
export function deleteStaticApi (sysId, data) {
    return request({
        url: `/assets/${sysId}/del`,
        method: 'delete',
        data
    });
}

//旁路识别合入
export function identifyCloseInApi (sysId) {
    return request({
        url: `/assets/${sysId}/merge`,
        method: 'post',
    });
}

// 查看任务
export function seeTaskApi (sysId) {
    return request({
        url: `/system/${sysId}/get_task_periodic`,
        method: 'get',
    });
}

// 删除任务
export function deleteTaskApi (id) {
    return request({
        url: `/system/${id}/task_periodic`,
        method: 'delete',
    });
}
