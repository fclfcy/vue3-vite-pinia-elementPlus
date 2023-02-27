import request from '@/utils/request'

export function threatListApi(params) {
    return request({
        url: '/signature-rules',
        method: 'get',
        params
    })
}