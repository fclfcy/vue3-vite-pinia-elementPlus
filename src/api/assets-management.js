import request from '@/utils/request';

// 获取厂商列表
export function getManufacturerListApi ( params ) {
    return request( {
        url: '/asset/vendors',
        method: 'get',
        params
    } );
}
// 新增厂商
export function addManufacturerApi ( data ) {
    return request( {
        url: `/asset/vendor`,
        method: 'post',
        data
    } );
}
// 修改厂商
export function editManufacturerApi ( data, vid ) {
    return request( {
        url: `/asset/vendor/${vid}`,
        method: 'put',
        data
    } );
}
// 删除厂商
export function deleteManufacturerApi ( vid ) {
    return request( {
        url: `/asset/vendor/${vid}`,
        method: 'delete'
    } );
}
// 批量删除厂商
export function bantchDeleteManufacturerApi ( data ) {
    return request( {
        url: `/asset/vendor`,
        method: 'delete',
        data
    } );
}
// 获取型号列表
export function getModelListApi ( params ) {
    return request( {
        url: '/asset/types',
        method: 'get',
        params
    } );
}
// 新增型号
export function addModelApi ( data ) {
    return request( {
        url: `/asset/model`,
        method: 'post',
        data
    } );
}
// 修改型号
export function editModelApi ( data, id ) {
    return request( {
        url: `/asset/model/${id}`,
        method: 'put',
        data
    } );
}
// 删除型号
export function deleteModelApi ( id ) {
    return request( {
        url: `/asset/model/lib/${id}`,
        method: 'delete'
    } );
}
// 批量删除型号
export function bantchDeleteModelApi ( data ) {
    return request( {
        url: `/asset/models`,
        method: 'delete',
        data
    } );
}
// 获取漏洞库列表
export function getvulnerabilityListApi ( params ) {
    return request( {
        url: '/exploits',
        method: 'get',
        params
    } );
}
export function vulTypesApi ( params ) {
    return request( {
        url: `/vultypes`,
        method: 'get',
        params
    } );
}
export function addvulnerabilityApi ( data ) {
    return request( {
        url: `/exploit`,
        method: 'post',
        data
    } );
}
export function vulnerabilityApi ( type, id, data ) {
    return request( {
        url: `/exploit/${id}`,
        method: type,
        data
    } );
}

// 获取资产型号
export function getAllAssetModelsApi ( params ) {
    return request( {
        url: `/asset/models`,
        method: 'get',
        params
    } );
}
