import request from '@/utils/request';

export function new_scan ( system_id, data ) {
    return request( {
        url: `/system/${system_id}/task`,
        method: 'post',
        data
    } );
}

export function scan_task ( system_id, theme ) {
    return request( {
        url: `/system/${system_id}/latest_masscan_task?theme=${theme}`,
        method: 'get',
    } );
}

export function execute_scan_task ( task_id, data ) {
    return request( {
        url: `/system/task/${task_id}/scan`,
        method: 'post',
        data
    } );
}

export function stopScan ( task_id ) { //停止扫描列表
    return request( {
        url: `system/task/${task_id}/scan`,
        method: 'delete',
    } );
}

export function get_media_list ( task_id, ip, page, per_page, order_by, params  ) {    //获取资产扫描设备列表
    return request( {
        url: `/system/task/${task_id}/assets/list?ip=${ip}&page=${page}&per_page=${per_page}&order_by=${order_by}`,
        method: 'get',
        params
    } );
}

export function get_assets_details ( device_id ) {  //获取资产扫描的单个设备和系统信息
    return request( {
        url: `/system/assets/device/${device_id}/detail`,
        method: 'get',
    } );
}

export function get_media_item ( device_id, page, per_page, order_by ) {  //获取任务的媒体列表
    return request( {
        url: `/device/${device_id}/medias?page=${page}&per_page=${per_page}`,
        method: 'get',
    } );
}

export function get_all_media ( system_id, page, per_page, order_by ) {  //获取总体媒体列表
    return request( {
        url: `${system_id}/medias?page=${page}&per_page=${per_page}`,
        method: 'get',
    } );
}

export function deleteMediaItem ( media_id, instance ) {
    return request( {
        url: `${media_id}/media/${instance}`,
        method: 'delete'
    } );
}

//白名单
export function getWhitelist ( system_id, page, per_page ) {
    return request( {
        url: `${system_id}/media/whitelists?page=${page}&per_page=${per_page}`,
        method: 'get'
    } );
}

export function addWhitelist ( data ) {
    return request( {
        url: `media/whitelist`,
        method: 'post',
        data
    } );
}

export function deleteWhitelist ( _id, type, params ) {
    //type 取值为 media 从 媒体列表移除   white 从白名单列表中移除
    return request( {
        url: `media/whitelist/${_id}?origin=${type}`,
        method: 'delete',
        params
    } );
}

export function modifyWhitelist ( _id, data ) {
    //type 取值为 media 从 媒体列表移除   white 从白名单列表中移除
    return request( {
        url: `/media/whitelist/${_id}`,
        method: 'put',
        data
    } );
}

export function importWhitelist ( system_id, data ) {
    return request( {
        url: `${system_id}/media/whitelists/import`,
        method: 'post',
        data
    } );
}
