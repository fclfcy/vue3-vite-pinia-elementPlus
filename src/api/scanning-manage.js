import request from '@/utils/request';

export function taskList (sys_id, params ) { // 任务列表
    return request( {
        url: `/vul_scan/${sys_id}/task/list`,
        method: 'get',
        params
    } );
}

export function portDetail (id, params) { // 基础-任务端口详情
    return request( {
        url: `/vul_scan/${id}/port/detail`,
        method: 'get',
        params
    } );
}

export function updateProgress () { // 任务列表
    return request( {
        url: `/vul_scan/upgrade/status`,
        method: 'get',
    } );
}

export function createTask (sys_id, data) { // 新建任务
    return request( {
        url: `/vul_scan/${sys_id}/task`,
        method: 'post',
        data
    } );
}

export function editTask (task_id, data) { // 编辑任务
    return request( {
        url: `/vul_scan/task/${task_id}`,
        method: 'put',
        data
    } );
}

export function deleteTask (data) { // 删除任务
    return request( {
        url: `/vul_scan/task/delete`,
        method: 'delete',
        data
    } );
}

export function deleteTaskDetails (id) { // 删除任务详情
    return request( {
        url: `/vul_scan/history/${id}/del`,
        method: 'delete',
    } );
}

export function taskDetail (id, params) { // 任务详情
    return request( {
        url: `/vul_scan/${id}/detail`,
        method: 'get',
        params
    } );
}

export function generateReportApi (id, data, history_id = 0) { // 生成报告
    return request( {
        url: `/vul_scan/history/${id}/${history_id}/report`,
        method: 'post',
        data
    } );
}


export function startUpTask (id) { // 启动任务
    return request( {
        url: `/vul_scan/${id}/execute`,
        method: 'post',
        timeout: 20000
    } );
}

export function revokeTask (id) { // 撤销任务
    return request( {
        url: `/vul_scan/${id}/revoke`,
        method: 'post',
    } );
}

export function redentialsList (params) { // 凭证钥匙列表
    return request( {
        url: `/redentials/manager`,
        method: 'get',
        params
    } );
}

export function addRedentials (data) { // 新增凭证钥匙
    return request( {
        url: `/redentials/manager`,
        method: 'post',
        data
    } );
}

export function deleteRedentials (data) { // 删除凭证钥匙
    return request( {
        url: `/redentials/manager/delete`,
        method: 'delete',
        data
    } );
}

export function editRedentials (key_id, data) { // 编辑凭证钥匙
    return request( {
        url: `/redentials/manager/${key_id}`,
        method: 'put',
        data
    } );
}

export function vulTypeList (params) { // 漏洞分类列表
    return request( {
        url: `/plugins/cate/list`,
        method: 'get',
        params
    } );
}

export function resetVulType (data) { // 还原漏洞分类
    return request( {
        url: `/plugins/cate/recover`,
        method: 'put',
        data
    } );
}

export function editVulType (data) { // 编辑漏洞分类
    return request( {
        url: `/plugins/cate/edit`,
        method: 'put',
        data
    } );
}

export function vulUnitList (params) { // 漏洞插件列表
    return request( {
        url: `/plugins/manager`,
        method: 'get',
        params
    } );
}

export function connectionCkeck () { // 断线检查
    return request( {
        url: `/connection/check`,
        method: 'put',
    } );
}

export function webList (params) { // 网站列表
    return request( {
        url: `/websites`,
        method: 'get',
        params
    } );
}

export function creatWeb (data) { // 创建网站列表
    return request( {
        url: `/website`,
        method: 'post',
        data
    } );
}

export function deleteWeb (id) { // 删除列表
    return request( {
        url: `/website/${id}`,
        method: 'delete',
    } );
}

export function editWeb (id, data) { // 修改列表
    return request( {
        url: `/website/${id}`,
        method: 'put',
        data
    } );
}

export function pauseWebTask (id) { // 暂停web任务
    return request( {
        url: `/webtask/${id}/pause`,
        method: 'post',
    } );
}

export function resumeWebTask (id) { // 恢复web任务
    return request( {
        url: `/webtask/${id}/resume`,
        method: 'post',
    } );
}

export function webDetail (id) { // 详情列表
    return request( {
        url: `/website/${id}`,
        method: 'get',
    } );
}

export function webTaskList (sys_id, params) { // web扫描任务列表
    return request( {
        url: `/${sys_id}/webtasks`,
        method: 'get',
        params
    } );
}

export function creatWebTask (data) { // 创建web扫描任务
    return request( {
        url: `/webtask`,
        method: 'post',
        data
    } );
}

export function deleteWebTask (id) { // 删除web扫描任务
    return request( {
        url: `/webtask/${id}`,
        method: 'delete',
    } );
}

export function editWebTask (id, data) { // 修改web扫描任务
    return request( {
        url: `/webtask/${id}`,
        method: 'put',
        data
    } );
}

export function executeWebTask (id, data) { // 执行网站扫描任务
    return request( {
        url: `/webtask/${id}/execute`,
        method: 'post',
        data
    } );
}

export function webTaskDetail (id, params) { // 获取网站扫描任务详情
    return request( {
        url: `/webtask/${id}/result`,
        method: 'get',
        params
    } );
}

export function webTaskStatus () { // 获取网站扫描任务详情进度和状态
    return request( {
        url: `/webtask/status`,
        method: 'get',
    } );
}

export function getWebPlugin (params) {
    return request( {
        url: `/webplugin`,
        method: 'get',
        params
    } );
}

export function addWebPlugin (data) {
    return request( {
        url: `/webplugin`,
        method: 'post',
        data
    } );
}

export function editWebPlugin (id, data) {
    return request( {
        url: `/webplugin/${id}`,
        method: 'put',
        data
    } );
}

export function getWebPluginTypes (type) {
    return request( {
        url: `/webplugin/${type}`,
        method: 'get',
    } );
}

export function deleteWebPlugin (id) {
    return request( {
        url: `/webplugin/${id}`,
        method: 'delete',
    } );
}

export function downloadWebPlugin (id, params) {
    return request( {
        url: `/webplugin/${id}`,
        method: 'get',
        params,
        responseType: 'arraybuffer'
    } );
}

export function stopWebTask (id) { // 终止网站扫描任务详情
    return request( {
        url: `/webtask/${id}/cancel`,
        method: 'post',
    } );
}

export function addWebType (data) { // 新增web类型
    return request( {
        url: `/webplugin/category`,
        method: 'post',
        data
    } );
}

export function deleteWebType (id) { // 新增web类型
    return request( {
        url: `/webplugin/category/${id}`,
        method: 'delete',
    } );
}

export function getEngineList () { // 获取web引擎
    return request( {
        url: `/webscan/engines`,
        method: 'get',
    } );
}

export function getWebDetailVulList (id, params) { // 获取web引擎
    return request( {
        url: `/webtask/${id}/vulnerabilities`,
        method: 'get',
        params
    } );
}

export function getWebGenerateReport (id, data) { // 获取web报告
    return request( {
        url: `/webtask/${id}/report`,
        method: 'post',
        data
    } );
}

export function unitUpgrade () { // 插件库升级
    return request( {
        url: `/pulgin/upgrade`,
        method: 'post',
    } );
}

export function payloadsList (params) { // 字典列表
    return request( {
        url: `/weak_password/payloads`,
        method: 'get',
        params
    } );
}

export function uploadWeakPasswork (data) { // 上传弱密码文件
    return request( {
        url: `/weak_password/payloads`,
        method: 'post',
        data
    } );
}

export function deleteUploadWeakPasswork (id) { // 删除上传弱密码文件
    return request( {
        url: `/weak_password/payloads/${id}`,
        method: 'delete',
    } );
}

export function weakPassworkList (sys_id, params) { // 弱密码任务列表
    return request( {
        url: `/${sys_id}/weak_password/tasks`,
        method: 'get',
        params
    } );
}

export function createWeakPasswork (data) { // 新增弱密码列表
    return request( {
        url: `/weak_password/tasks`,
        method: 'post',
        data
    } );
}

export function editWeakPasswork (id, data) { // 修改弱密码列表
    return request( {
        url: `/weak_password/tasks/${id}`,
        method: 'put',
        data
    } );
}

export function deleteWeakPasswork (id) { // 删除弱密码列表
    return request( {
        url: `/weak_password/tasks/${id}`,
        method: 'delete',
    } );
}

export function executeWeakPasswordTask (id) { // 执行弱密码任务
    return request( {
        url: `/weak_password/tasks/${id}/execute`,
        method: 'post',
    } );
}

export function weakPasswordTaskSummary (id) { // 弱密码任务任务汇总
    return request( {
        url: `/weak_password/tasks/${id}/summary`,
        method: 'get',
    } );
}

export function weakPasswordTaskResults (id, params) { // 任务结果
    return request( {
        url: `/weak_password/tasks/${id}/results`,
        method: 'get',
        params
    } );
}

export function weakPasswordTaskDetail (id) { // 查询单个任务详情
    return request( {
        url: `/weak_password/tasks/${id}`,
        method: 'get',
    } );
}

export function suspendPasswordTask (id) { // 暂停任务
    return request( {
        url: `/weak_password/tasks/${id}/pause`,
        method: 'put',
    } );
}

export function recoveryPasswordTask (id) { // 恢复任务
    return request( {
        url: `/weak_password/tasks/${id}/resume`,
        method: 'put',
    } );
}

export function revokePasswordTask (id) { // 恢复任务
    return request( {
        url: `/weak_password/tasks/${id}/stop`,
        method: 'put',
    } );
}

export function downloadPayload (id, params) { // 下载字典表
    return request( {
        url: `/weak_password/payloads/${id}`,
        method: 'get',
        params,
        responseType: 'arraybuffer',
    } );
}

export function getPluginsApi (params) { // 查看弱密码扫描所有插件
    return request( {
        url: `/weak_password/plugins`,
        method: 'get',
        params
    } );
}

export function createPluginsApi (data) { // 新增弱密码扫描所有插件
    return request( {
        url: `/weak_password/plugins`,
        method: 'post',
        data
    } );
}

export function deletePluginsApi (id) { // 删除弱密码扫描所有插件
    return request( {
        url: `/weak_password/plugins/${id}`,
        method: 'delete'
    } );
}

export function downloadPluginsApi (id, params) { // 下载弱密码扫描所有插件
    return request( {
        url: `/weak_password/plugins/${id}`,
        method: 'get',
        params,
        responseType: 'arraybuffer',
    } );
}

export function startPluginsApi (id) { // 启用弱密码扫描插件
    return request( {
        url: `/weak_password/plugins/${id}/enable`,
        method: 'put'
    } );
}

export function stopPluginsApi (id) { // 停止弱密码扫描插件
    return request( {
        url: `/weak_password/plugins/${id}/disable`,
        method: 'put'
    } );
}

export function getDependentApi (params) { // 获取弱密码依赖
    return request( {
        url: `/weak_password/packages`,
        method: 'get',
        params
    } );
}

export function deleteDependentApi (id) { // 获取弱密码依赖
    return request( {
        url: `/weak_password/packages/${id}`,
        method: 'delete'
    } );
}

export function addDependentApi (data) { // 新增弱密码依赖
    return request( {
        url: `/weak_password/packages`,
        method: 'post',
        data
    } );
}

export function modifyPlugin (pid, data) { // 设置弱密码插件
    return request( {
        url: `/weak_password/plugins/${pid}`,
        method: 'put',
        data
    } );
}

export function firmwareInstallInfo () { // 激活安装信息
    return request( {
        url: `/firmware/install_info`,
        method: 'get',
    } );
}

export function firmwareStatus () { // 激活状态
    return request( {
        url: `/firmware/active/status`,
        method: 'get',
        timeout: 60000
    } );
}

export function firmwareActive (data) { // 激活固件
    return request( {
        url: `/firmware/active`,
        method: 'post',
        data
    } );
}

export function firmwareListApi () { // 固件信息列表
    return request( {
        url: `/firmwares`,
        method: 'get',
    } );
}

export function addFirmwareApi (data) { // 新增固件信息
    return request( {
        url: `/firmwares`,
        method: 'post',
        data
    } );
}

export function deleteFirmwareApi (id) { // 删除固件信息
    return request( {
        url: `/firmwares/${id}`,
        method: 'delete',
    } );
}

export function cancelFirmwareApi (id) { // 删除固件信息
    return request( {
        url: `/firmware/tasks/${id}/cancel`,
        method: 'put',
    } );
}

export function addFirmwareTaskApi (data) { // 添加固件任务
    return request( {
        url: `/firmware/tasks`,
        method: 'post',
        data
    } );
}

export function getFirmwareTaskListApi (id, params) { // 固件任务列表
    return request( {
        url: `/firmware/${id}/tasks`,
        method: 'get',
        params
    } );
}

export function executeFirmwareTaskApi (id) { // 执行固件任务
    return request( {
        url: `/firmware/tasks/${id}/execute`,
        method: 'post',
    } );
}

export function getFirmwareTaskStatusApi (sys_id) { // 固件任务状态
    return request( {
        url: `/firmware/${sys_id}/tasks/status`,
        method: 'get',
    } );
}

export function getFirmwareTaskResultApi (id) { // 固件任务状态
    return request( {
        url: `/firmware/tasks/${id}/result`,
        method: 'get',
    } );
}

export function getFirmwareTaskSystemApi (id) { // 固件系统摘要
    return request( {
        url: `/firmware/tasks/${id}/filesystem_abstract`,
        method: 'get',
    } );
}

export function getFirmwareTaskAbstractApi (id) { // 固件系统摘要
    return request( {
        url: `/firmware/tasks/${id}/abstract`,
        method: 'get',
    } );
}

export function getFirmwareTaskSystemServiceApi (id, params) { // 固件系统摘要
    return request( {
        url: `/firmware/tasks/${id}/system_service`,
        method: 'get',
        params
    } );
}

export function getFirmwareTaskSoftwareApi (id, params) { // 固件系统摘要
    return request( {
        url: `/firmware/tasks/${id}/all_software`,
        method: 'get',
        params
    } );
}

export function getFirmwareTaskPasswordApi (id, params) { // 固件系统摘要
    return request( {
        url: `/firmware/tasks/${id}/all_passwd`,
        method: 'get',
        params
    } );
}

export function getFirmwareTaskEncryptionAuthenticationApi (id, params) { // 固件系统摘要
    return request( {
        url: `/firmware/tasks/${id}/all_encryption`,
        method: 'get',
        params
    } );
}

export function getFirmwareTaskCveApi (id, params) { // 固件系统摘要
    return request( {
        url: `/firmware/tasks/${id}/all_cve`,
        method: 'get',
        params
    } );
}

export function getFirmwareTaskSensitiveApi (id, params) { // 固件系统摘要
    return request( {
        url: `/firmware/tasks/${id}/all_sensitive`,
        method: 'get',
        params
    } );
}

export function getFirmwareTaskCodeWeaknessApi (id, params) { // 固件系统摘要
    return request( {
        url: `/firmware/tasks/${id}/all_code_weakness`,
        method: 'get',
        params
    } );
}

export function getFirmwareTaskCcpsApi (id, params) { // 固件系统摘要
    return request( {
        url: `/firmware/tasks/${id}/ccps`,
        method: 'get',
        params
    } );
}

export function getAppInformationApi (id, params) { // 固件系统摘要
    return request( {
        url: `/firmware/tasks/${id}/app_info`,
        method: 'get',
        params
    } );
}

export function getAppActivityApi (id, params) { // 固件系统摘要
    return request( {
        url: `/firmware/tasks/${id}/app_component_activity`,
        method: 'get',
        params
    } );
}

export function getAppProviderApi (id, params) { // 固件系统摘要
    return request( {
        url: `/firmware/tasks/${id}/app_component_provider`,
        method: 'get',
        params
    } );
}

export function getAppServiceApi (id, params) { // 固件系统摘要
    return request( {
        url: `/firmware/tasks/${id}/app_component_service`,
        method: 'get',
        params
    } );
}

export function getAppReceiverApi (id, params) { // 固件系统摘要
    return request( {
        url: `/firmware/tasks/${id}/app_component_receiver`,
        method: 'get',
        params
    } );
}

export function getAppSecurityApi (id, params) { // 固件系统摘要
    return request( {
        url: `/firmware/tasks/${id}/app_security_info`,
        method: 'get',
        params
    } );
}

export function getAppActApi (id, params) { // 固件系统摘要
    return request( {
        url: `/firmware/tasks/${id}/app_privacy_act`,
        method: 'get',
        params
    } );
}

export function getAppPermissionApi (id, params) { // 固件系统摘要
    return request( {
        url: `/firmware/tasks/${id}/app_privacy_permissions`,
        method: 'get',
        params
    } );
}

export function deleteFirmwareTaskApi (id) { // 固件系统摘要
    return request( {
        url: `/firmware/tasks/${id}`,
        method: 'delete',
    } );
}

// 获取执行历史记录
export function getTaskHistoryApi( id, params ){
    return request({
        url: `/vul_scan/${id}/history/list`,
        method: 'get',
        params
    })
}

// 基础漏扫详情
export function getAppResultApi( id, params ){
    return request({
        url: `/vul_scan/history/${id}/app/list`,
        method: 'get',
        params
    })
}

export function getCertResultApi( id, params ){
    return request({
        url: `/vul_scan/history/${id}/cert/list`,
        method: 'get',
        params
    })
}

export function getHostResultApi( id, params ){
    return request({
        url: `/vul_scan/history/${id}/host/list`,
        method: 'get',
        params
    })
}

export function getPortResultApi( id, params ){
    return request({
        url: `/vul_scan/history/${id}/port/list`,
        method: 'get',
        params
    })
}

export function getVulResultApi( id, params ){
    return request({
        url: `/vul_scan/history/${id}/vul/list`,
        method: 'get',
        params
    })
}

export function getCveResultApi( id, params ){
    return request({
        url: `/vul_scan/history/${id}/cve/list`,
        method: 'get',
        params
    })
}

// 总览charts
export function getChartsApi( id, params ){
    return request({
        url: `/vul_scan/history/${id}/summary`,
        method: 'get',
        params
    })
}

// 对比两次任务新增漏洞
export function addVulApi( id, params ){
    return request({
        url: `/vul_scan/${id}/vul/compare/add`,
        method: 'get',
        params
    })
}

// 对比两次任务减少漏洞
export function reduceVulApi( id, params ){
    return request({
        url: `/vul_scan/${id}/vul/compare/dec`,
        method: 'get',
        params
    })
}

// 对比两次任务新增主机
export function addHostApi( id, params ){
    return request({
        url: `/vul_scan/${id}/host/compare/add`,
        method: 'get',
        params
    })
}

// 对比两次任务减少主机
export function reduceHostApi( id, params ){
    return request({
        url: `/vul_scan/${id}/host/compare/dec`,
        method: 'get',
        params
    })
}

// 主机结果概览
export function hostDetailsApi( id, params ){
    return request({
        url: `/vul_scan/history/${id}/host/summary`,
        method: 'get',
        params
    })
}

// 报告列表
export function reportListApi( sys_id, params ){
    return request({
        url: `/system/${sys_id}/report`,
        method: 'get',
        params
    })
}

// 下载报告
export function downloadReportApi( id, params ){
    return request({
        url: `/report/${id}/export`,
        method: 'get',
        params,
        responseType: 'arraybuffer'
    })
}

// 删除报告
export function deleteReportApi( id ){
    return request({
        url: `/report/${id}`,
        method: 'delete',
    })
}
