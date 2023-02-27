import request from '@/utils/request'
const baseUrl = '/api';

/**
 * 授权验证
 * @returns {AxiosPromise}
 */
export function doAuthentication () {
    return request( {
        url: `${baseUrl}/DoAuthentication`,
        method: 'post'
    } )
}

/**
 * 获取系统名称和版权信息
 * @returns {AxiosPromise}
 */
export function getSystemInfo () {
    return request( {
        url: `${baseUrl}/getSystemInfo`,
        method: 'get'
    } )
}

/**
 * 获取设备信息
 * @returns {AxiosPromise}
 */
export function getDeviceInfo () {
    return request( {
        url: `${baseUrl}/getDeviceInfo`,
        method: 'get'
    } )
}

/**
 * 获取事件信息&磁盘利用率
 * @returns {AxiosPromise}
 */
export function getPanelGroup () {
    return request( {
        url: `${baseUrl}/indexRefreshCount`,
        method: 'get'
    } )
}

/**
 * 安全域下拉列表
 * @returns {AxiosPromise}
 */
export function getZoneList () {
    return request( {
        url: `${baseUrl}/ShowNetworkZonenameList`,
        method: 'get'
    } )
}

/**
 * 地址对象下拉列表
 * @returns {AxiosPromise}
 */
export function getLocationList () {
    return request( {
        url: `${baseUrl}/getall_only_name`,
        method: 'get'
    } )
}

/**
 * 时间对象下拉列表
 * @returns {AxiosPromise}
 */
export function getTimeObjectList () {
    return request( {
        url: `${baseUrl}/get_object_schedtime_ids`,
        method: 'get'
    } )
}

/**
 * 设备流量TOP10
 * @returns {AxiosPromise}
 */
export function getTrafficDeviceTop10 ( query ) {
    return request( {
        url: `${baseUrl}/ShowTrafficDeviceTop10`,
        method: 'get',
        params: query
    } )
}

/**
 * 协议流量TOP10
 * @returns {AxiosPromise}
 */
export function getTrafficProtoTop10 ( query ) {
    return request( {
        url: `${baseUrl}/ShowTrafficProtoTop10`,
        method: 'get',
        params: query
    } )
}

/**
 * 手动清理磁盘占用
 * @returns {AxiosPromise}
 */
export function manuallyClearDisk ( query ) {
    return request( {
        url: `${baseUrl}/clearDiskSpace`,
        method: 'get',
        params: query
    } )
}
