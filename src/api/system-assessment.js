import request from '@/utils/request';

export function getSystemList ( name, page, per_page, order_by ) {
    return request( {
        url: `/systems?name=${name}&page=${page}&per_page=${per_page}&order_by=${order_by}`,
        method: 'get',
    } );
}

export function creatOrEditSystem ( method, id, data ) {
    return request( {
        url: method === 'post' ? '/system' : `/system/${id}`,
        method,
        data
    } );
}

export function deleteSystem ( id ) {
    return request( {
        url: `/system/${id}`,
        method: 'delete'
    } );
}
