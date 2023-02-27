import request from '@/utils/request';

export function get_conf_check_task ( system_id, params ) { //创建核查任务
    return request( {
        url: `/system/${system_id}/conf_check_tasks`,
        method: 'get',
        params
    } );
}

export function get_conf_check_progress ( task_id ) { //查看进度
    return request( {
        url: `/conf_check_task/${task_id}/progress`,
        method: 'get',
    } );
}

export function conf_check_task ( system_id, data ) { //获取 配置核查列表
    return request( {
        url: `/system/${system_id}/conf_check_task`,
        method: 'post',
        data
    } );
}

export function revoke ( task_id ) { //撤销配置核查任务
    return request( {
        url: `conf_check_task/${task_id}/revoke`,
        method: 'post',
    } );
}

export function conf_detail ( task_id ) { //获取配置核查详情
    return request( {
        url: `conf_check_task/${task_id}/detail`,
        method: 'get',
    } );
}

export function handle_check_task ( method, task_id, data ) { //修改/执行/删除 配置核查任务
    return request( {
        url: `/conf_check_task/${task_id}`,
        method: method,
        data
    } );
}

//第三方脚本
export function handle_delete_script ( data ) { //删除
    return request( {
        url: `/conf_check/dev`,
        method: 'delete',
        data
    } );
}

export function handle_export_demo ( data ) { //导出案例
    return request( {
        url: `/conf_check/dev/demo`,
        method: 'post',
        data
    } );
}

export function get_script_list ( params ) { //列表
    return request( {
        url: `/conf_check/dev/list`,
        method: 'get',
        params
    } );
}

export function upload_script ( data ) { //上传
    return request( {
        url: `/conf_check/dev/upload`,
        method: 'post',
        data
    } );
}

export function modify_script ( dev_id, data ) { //修改
    return request( {
        url: `/conf_check/dev/${dev_id}`,
        method: 'put',
        data
    } );
}

export function deleteReportApi ( id ) { //删除报表
    return request( {
        url: `/conf_check/report/${id}`,
        method: 'delete',
    } );
}

export function exportReportApi ( id, params ) { //导出报表
    return request( {
        url: `/conf_check/report/${id}/export`,
        method: 'get',
        params,
        responseType: 'arraybuffer'
    } );
}

export function generateReportApi ( sys_id ) { //生成报表
    return request( {
        url: `/conf_check/${sys_id}/report`,
        method: 'post',
    } );
}

export function reportListApi ( sys_id, params ) { //报表列表
    return request( {
        url: `/conf_check/${sys_id}/report/list`,
        method: 'get',
        params
    } );
}

export function seeReportApi ( id ) { // 预览报告
    return `/v1/conf_check/report/${id}/preview`;
    // return request({
    //     url: `/report/${report_id}/preview`,
    //     method: 'get'
    // })
}

// 查看依赖py文件
export function seePyDependApi (data) {
    return request({
        url: `/system/file/read`,
        method: 'post',
        data
    });
}

// 查看依赖py文件
export function exportDevApi (id, params) {
    return request({
        url: `/conf_check/dev/export/${id}`,
        method: 'get',
        params
    });
}

export function downloadTemplateApi (params) {
    return request({
        url: `/conf_check/dev/demo`,
        method: 'get',
        params,
        responseType: 'arraybuffer',
    });
}

export function exportPublicKeyApi (params) { // 导出公钥
    return request({
        url: `/system/public_key/export`,
        method: 'get',
        params,
        responseType: 'arraybuffer',
    });
}

export function stopconfingCheckApi (id, data) { // 停止第三方配置
    return request({
        url: `/conf_check/dev/${id}/inactive`,
        method: 'put',
        data,
    });
}

export function startconfingCheckApi (id, data) { // 启用第三方配置
    return request({
        url: `/conf_check/dev/${id}/active`,
        method: 'put',
        data,
    });
}

export function remoteConfigurationListApi (params) { // 远程配置列表
    return request({
        url: `/conf-list`,
        method: 'get',
        params,
        timeout: '30000'
    });
}

export function seeFileApi (conf_id, params) { // 查看配置文件
    return request({
        url: `/conf/${conf_id}`,
        method: 'get',
        params,
    });
}

export function uploadCodeApi (sys_id, conf_id, data) { // 查看配置文件
    return request({
        url: `/conf_check/${sys_id}/config/${conf_id}/confirm`,
        method: 'post',
        data,
    });
}

export function networkStatusListApi (id, params) { // 网络状态
    return request({
        url: `/check-list/${id}`,
        method: 'get',
        params,
    });
}

export function downTemplateApi (params) { // 导出模板
    return request({
        url: `conf_check/semantic/export`,
        method: 'get',
        params,
    });
}

export function appListApi () { // 导出模板
    return request({
        url: `conf_check/semantic/dev/list`,
        method: 'get',
    });
}

export function uploadSemanticApi (data) { // 导出模板
    return request({
        url: `conf_check/semantic/import `,
        method: 'post',
        data
    });
}
