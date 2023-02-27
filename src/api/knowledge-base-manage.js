import request from '@/utils/request'

// 新增动态生成表数据
export function addTableDataApi(knowledge_manager_id, data) {
    return request({
        url: `/knowledge_manager/add/dynamic/table/data/${knowledge_manager_id}`,
        method: 'post',
        data
    })
}

// 查看动态生成表数据
export function seeTableDataApi(knowledge_manager_id, params) {
    return request({
        url: `/knowledge_manager/query/dynamic/table/${knowledge_manager_id}`,
        method: 'get',
        params
    })
}

// 更新动态生成表数据
export function editTableDataApi(knowledge_manager_id, data) {
    return request({
        url: `/knowledge_manager/update/dynamic/table/data/${knowledge_manager_id}`,
        method: 'put',
        data
    })
}

// 删除动态生成表数据
export function deleteTableDataApi(knowledge_manager_id, data) {
    return request({
        url: `/knowledge_manager/delete/dynamic/table/data/${knowledge_manager_id}`,
        method: 'delete',
        data
    })
}

// 拷贝新知识库表
export function copyDataApi(knowledge_manager_id, data) {
    return request({
        url: `/knowledge_manager/copy/new/table/${knowledge_manager_id}`,
        method: 'post',
        data
    })
}

// 创建新知识库表
export function addKnowledgeBaseApi(data) {
    return request({
        url: `/knowledge_manager/create/new/table`,
        method: 'post',
        data
    })
}

// 删除新知识库表
export function deleteKnowledgeBaseApi(id) {
    return request({
        url: `/knowledge_manager/delete/table/${id}`,
        method: 'delete',
    })
}

// 知识库列表
export function knowledgeListApi(params) {
    return request({
        url: `/knowledge_manager/query/list`,
        method: 'get',
        params
    })
}