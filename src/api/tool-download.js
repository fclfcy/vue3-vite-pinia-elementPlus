import request from '@/utils/request'

export function getEditionListApi() {
    return request({
        url: '/clamav/os_support',
        method: 'get',
    })
}
export function toolDownloadApi(params) {
    return request({
        url: '/clamav/app',
        method: 'get',
        params,
        timeout: 150000
    })
}