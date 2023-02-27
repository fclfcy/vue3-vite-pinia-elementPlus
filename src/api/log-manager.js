import request from '@/utils/request'


export function getLogList (page, per_page, order_by, start, end) {
    return request({
        url: `/journals?page=${page}&per_page=${per_page}&order_by=${order_by}&start=${start}&end=${end}`,
        method: 'get',
    })
}

export function uploadLog (start, end, path) {
    return request({
        url: `/journals/export?start=${start}&end=${end}&path=${path}`,
        method: 'get',
    })
}
