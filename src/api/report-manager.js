import request from '@/utils/request';

export function generateReport ( sysId ) { //生成报告
    return request( {
        url: `/system/${sysId}/report`,
        method: 'post',
    } );
}

export function previewReport ( report_id ) { // 预览报告
    return `/v1/report/${report_id}/preview`;
    // return request({
    //     url: `/report/${report_id}/preview`,
    //     method: 'get'
    // })
}

export function deleteReport ( report_id ) { // delete report
    return request( {
        url: `/report/${report_id}`,
        method: 'delete'
    } );
}

export function getAllReportList ( sysId, page, per_page, order_by ) {   // get all report list
    return request( {
        url: `/system/${sysId}/reports?page=${page}&per_page=${per_page}&order_by=${order_by}`,
        method: 'get'
    } );
}

export function exportReport ( report_id, params ) { // 预览报告
    return request( {
        url: `/report/${report_id}/zip_export`,
        method: 'get',
        params,
        responseType: 'arraybuffer',
    } );
}
