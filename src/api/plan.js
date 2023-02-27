import request from '@/utils/request';

export function getPlanListApi (params) {
    return request({
        url: `/plans`,
        method: 'get',
        params
    })
}
// 获取单位下的系统
export function getCompanySystemListApi (id) {
    return request({
        url: `/company/${id}/systems`,
        method: 'get',
    })
}

export function getunitsListApi (params) {
    return request({
        url: `/units`,
        method: 'get',
        params
    })
}

export function getcheckMenListApi () {
    return request({
        url: `/check-men`,
        method: 'get',
    })
}

export function exportPlanApi (pid, params) {
    return request({
        url: `/plan/${pid}/export`,
        method: 'get',
        params,
        responseType: 'arraybuffer'
    })
}

export function getSystemApi (id) {
    return request({
        url: `/company/${id}/systems`,
        method: 'get'
    })
}

export function createPlanApi (data) {
    return request({
        url: `/plan`,
        method: 'post',
        data
    })
}

export function editPlanApi (id, data) {
    return request({
        url: `/plan/${id}`,
        method: 'put',
        data
    })
}

export function deletePlanApi (id) {
    return request({
        url: `/plan/${id}`,
        method: 'delete',
    })
}

export function batchDeleteApi (data) {
    return request({
        url: `/plan`,
        method: 'delete',
        data
    })
}

export function exportTemplateApi (params) {
    return request({
        url: `/plan/template`,
        method: 'get',
        params
    })
}

export function uploadPlanApi (data) {
    return request({
        url: `/plan/import`,
        method: 'post',
        data
    })
}
// 获取检察人员
export function getPersonnelApi (params) {
    return request({
        url: `/personnels`,
        method: 'get',
        params
    })
}
// 创建检察人员
export function createPersonnelApi (data) {
    return request({
        url: `/personnel`,
        method: 'post',
        data
    })
}
// 修改检察人员
export function editPersonnelApi (id, data) {
    return request({
        url: `/personnel/${id}`,
        method: 'put',
        data
    })
}
// 删除检察人员
export function deletePersonnelApi (id) {
    return request({
        url: `/personnel/${id}`,
        method: 'delete',
    })
}
// 批量删除检察人员
export function batchDeletePersonnelApi (data) {
    return request({
        url: `/personnels`,
        method: 'delete',
        data
    })
}
