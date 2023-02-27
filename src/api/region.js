import request from '@/utils/request'

export function getProvince (  ) {
    return request( {
        url: `/province`,
        method: 'get',
    } )
}

export function getCity ( code ) {
    return request( {
        url: `/city/${code}`,
        method: 'get',
    } )
}

export function getDistrict ( code ) {
    return request( {
        url: `/district/${code}`,
        method: 'get',
    } )
}
