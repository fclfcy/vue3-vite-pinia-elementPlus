import request from '@/utils/request'

export function getNetworkList(  ) {
    return request({
        url: '/network',
        method: 'get',
    })
}

export function operatorNetwork( data ) {
    return request({
        url: '/network',
        method: 'post',
        data
    })
}

export function testConnect( ip ) {
    return request({
        url: `/connect/test?ip=${ip}`,
        method: 'get'
    })
}

