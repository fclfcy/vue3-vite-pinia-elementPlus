import request from '@/utils/request'

//获取企业下的文书列表
export function getPaperworkList( cid, params ) {
    return request({
        url: `/company/${cid}/paperwork`,
        method: 'get',
        params
    })
}

//新增文书
export function newPaperwork( cid, type_id ) {
    return request({
        url: `/company/${cid}/paperwork/${type_id}`,
        method: 'post',
    })
}

//批量删除文书
export function deleteAllPaperwork( ids ) {
    return request({
        url: `/paperwork`,
        method: 'delete',
        data: ids
    })
}

//获取文书类型
export function getPaperworkTypes( ) {
    return request({
        url: `/paperwork-types`,
        method: 'get',
    })
}

//删除文书
export function deletePaperwork( pid ) {
    return request({
        url: `/paperwork/${pid}`,
        method: 'delete',
    })
}

//编辑文书保存
export function editPaperwork( pid, data ) {
    return request({
        url: `/paperwork/${pid}`,
        method: 'put',
        data
    })
}

//获取文书的内容items
export function getPaperworkInfo( pid ) {
    return request({
        url: `/paperwork/${pid}`,
        method: 'get',
    })
}






