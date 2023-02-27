import request from '@/utils/request'

export function offlineListApi( id, params ) {
    return request({
        url: `check/hostoffline/${id}/plan`,
        method: 'get',
        params
    })
}

export function addOfflineApi( id, data ) {
    return request({
        url: `check/hostoffline/${id}/plan`,
        method: 'post',
        data
    })
}

export function editOfflineApi( id, data ) {
    return request({
        url: `check/hostoffline/${id}/plan`,
        method: 'put',
        data
    })
}

export function delOfflineApi( id ) {
    return request({
        url: `check/hostoffline/${id}/plan`,
        method: 'delete'
    })
}

export function importOfflineApi( id ) {
    return request({
        url: `check/hostoffline/${id}/import`,
        method: 'post'
    })
}

export function exportOfflineApi( id ) {
    return request({
        url: `check/hostoffline/${id}/export`,
        method: 'post'
    })
}

export function offlineDetailApi( id ) {
    return request({
        url: `check/hostoffline/${id}/detail`,
        method: 'get'
    })
}

export function offlineProgressApi( id ) {
    return request({
        url: `check/hostoffline/${id}/progress`,
        method: 'get'
    })
}

