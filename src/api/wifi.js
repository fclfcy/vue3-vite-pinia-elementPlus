import request from '@/utils/request';

export function getPasswordListApi ( params ) {
    return request( {
        url: '/wifi/pw_lib/list',
        method: 'get',
        params
    } );
}
export function getScanListApi ( id, params ) {
    return request( {
        url: `/wifi/${id}/list`,
        method: 'get',
        params
    } );
}
export function scanningApi ( id ) {
    return request( {
        url: `/wifi/${id}/scan`,
        method: 'post',
    } );
}
export function crackApi ( sysId, wifiId ) {
    return request( {
        url: `/wifi/${sysId}/crack/${wifiId}`,
        method: 'post',
    } );
}
export function crackQueueApi ( sysId ) {
    return request( {
        url: `/wifi/${sysId}/crack/queue`,
        method: 'get',
    } );
}
export function createPasswordApi ( data ) {
    return request( {
        url: '/wifi/pw_lib/create',
        method: 'post',
        data
    } );
}
export function updatePasswordApi ( data, id ) {
    return request( {
        url: `wifi/pw_lib/update/${id}`,
        method: 'put',
        data
    } );
}
export function deletePasswordApi ( data ) {
    return request( {
        url: '/wifi/pw_lib/delete',
        method: 'delete',
        data
    } );
}
export function deleteWifiApi ( data ) {
    return request( {
        url: '/wifi/delete',
        method: 'delete',
        data
    } );
}
// wifi连接列表
export function wifiStationApi ( params ) {
    return request( {
        url: '/wifi/station/list',
        method: 'get',
        params
    } );
}
