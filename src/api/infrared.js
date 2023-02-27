import request from '@/utils/request'

export function infraredTaskListApi(id, params) {
    return request({
        url: `/${id}/infrared/tasks`,
        method: 'get',
        params
    })
}

export function addInfraredTaskApi(data) {
    return request({
        url: '/infrared/tasks',
        method: 'post',
        data
    })
}

export function editInfraredTaskApi(id, data) {
    return request({
        url: `/infrared/tasks/${id}`,
        method: 'put',
        data
    })
}

export function deleteInfraredTaskApi(id) {
    return request({
        url: `/infrared/tasks/${id}`,
        method: 'post',
    })
}

export function executeInfraredTaskApi(id) {
    return request({
        url: `/infrared/tasks/${id}/record`,
        method: 'put',
    })
}

export function infraredTaskResultApi(id, params) {
    return request({
        url: `/infrared/tasks/${id}/result`,
        method: 'get',
        params
    })
}

export function stopInfraredTaskApi(id) {
    return request({
        url: `/infrared/tasks/${id}/stop`,
        method: 'put',
    })
}

export function replayInfraredTaskApi(id, data) {
    return request({
        url: `/infrared/tasks/${id}/replay`,
        method: 'put',
        data
    })
}
