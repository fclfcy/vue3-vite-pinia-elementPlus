import request from '@/utils/request';

export function getEnclosureListApi (params) { //附件管理列表详情
    return request({
        url: `/system/attachments`,
        method: 'get',
        params
    })
}

export function uploadEnclosureApi (data) { // 上传文件
    return request({
        url: `/attachment`,
        method: 'post',
        data,
        timeout: 180000
    })
}

export function deleteEnclosureApi (id) { // 删除附件
    return request({
        url: `/attachment/${id}`,
        method: 'delete',
    })
}

export function batchDeleteEnclosureApi (data) { // 批量删除
    return request({
        url: `/attachments`,
        method: 'delete',
        data
    })
}

export function editEnclosureApi (id, data) { // 批量删除
    return request({
        url: `/attachment/${id}`,
        method: 'put',
        data
    })
}

export function downloadEnclosureApi (id, params) { // 下载
    return request({
        url: `/attachment/${id}`,
        method: 'get',
        params
    })
}
