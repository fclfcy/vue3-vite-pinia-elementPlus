import request from '@/utils/request'


//获取企业列表
export function getCompaniesList ( name, order_by, page, per_page ) {
    return request( {
        url: `/companies?name=${name}&order_by=${order_by}&page=${page}&per_page=${per_page}`,
        method: 'get',
    } )
}

//编辑、新增企业
export function companyHandle ( method, id, data ) {
    return request( {
        url: method === 'post' ? `/company` : `/company/${id}`,
        method,
        data
    } )
}

//删除企业
export function deleteCompany ( id ) {
    return request( {
        url: `/company/${id}`,
        method: 'delete',
    } )
}

//所属行业列表
export function getIndustry () {
    return request( {
        url: `/industry`,
        method: 'get',
    } )
}
