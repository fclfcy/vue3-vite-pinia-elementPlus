/*
 * 指标库管理
 * */
import request from '@/utils/request';

const PREFIX = '/compliance';

//获取结果列表
export function getQuotaResultList ( qid ) {
    return request( {
        url: `${PREFIX}/${qid}/answer`,
        method: 'get',
    } );
}

//指标库复制
export function libraryCopy ( doc_id ) {
    return request( {
        url: `${PREFIX}/${doc_id}/library-copy`,
        method: 'post',
    } );
}

//指标库查看
export function libraryView ( doc_id ) {
    return request( {
        url: `${PREFIX}/${doc_id}/library`,
        method: 'get',
    } );
}
//编辑
export function checkLibrary ( leaf_id, flag ) {
    return request( {
        url: `/compliance/${leaf_id}/${flag}/edit`,
        method: 'put',
    } );
}

//自建指标库删除
export function customLibraryDelete ( doc_id ) {
    return request( {
        url: `${PREFIX}/${doc_id}/library`,
        method: 'delete',
    } );
}

//指标文档导出
export function libraryDocExport ( doc_id, params ) {
    return request({
        url: `${PREFIX}/${doc_id}/export`,
        method: 'get',
        params,
        responseType: 'arraybuffer'
    } );
}

//指标文档导入
export function libraryDocImport ( doc_id, data ) {
    return request( {
        url: `${PREFIX}/${doc_id}/import`,
        method: 'post',
        data
    } );
}

//获取检查结果列表
export function getResultQueryList ( qid, page, per_page, order_by, option ) {
    return request( {
        url: `${PREFIX}/${qid}/answer?page=${page}&per_page=${per_page}&order_by=${order_by}&option=${option}`,
        method: 'get',
    } );
}

// 审核结果获取
export function getResultVerify ( qid ) {
    return request( {
        url: `${PREFIX}/${qid}/verify`,
        method: 'get',
    } );
}

// 审核
export function verifyResult ( qid ) {
    return request( {
        url: `${PREFIX}/${qid}/verify`,
        method: 'post',
    } );
}

//预览
export function previewResult ( qid ) {
    return `/v1${PREFIX}/${qid}/preview`;
    // return request( {
    //     url: `${PREFIX}/${qid}/preview`,
    //     method: 'get',
    // } )
}

export function previewSummaryResults ( qid ) {
    return request( {
        url: `${PREFIX}/${qid}/preview`,
        method: 'get',
    } );
}

export function previewExportResults ( qid, params ) {
    return request( {
        url: `${PREFIX}/${qid}/export`,
        method: 'get',
        params,
        responseType: 'arraybuffer'
    } );
}
