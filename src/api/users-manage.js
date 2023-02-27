import request from '@/utils/request';

export function getUsersList (account, page, per_page) {
    return request({
        url: `/users?account=${account}&page=${page}&per_page=${per_page}`,
        method: 'get',
    });
}

export function getUserInfo () {
    return request({
        url: '/user',
        method: 'get',
    });
}

export function creatUser (method, data, url) {
    return request({
        url: url,
        method,
        data,
        timeout: 30000
    });
}

export function deleteUser (id) {
    return request({
        url: `/user/${id}`,
        method: 'delete',
    });
}

export function resetPassword (data, id) {
    return request({
        url: `/user/${id}/password`,
        method: 'put',
        data
    });
}

export function modifyPassword (data) {
    return request({
        url: '/password',
        method: 'put',
        data
    });
}

export function getConfigInfoApi () {
    return request({
        url: '/config',
        method: 'get',
    });
}

export function setConfigApi (id, data) {
    return request({
        url: `/config/${id}`,
        method: 'post',
        data
    });
}

// 强制下线
export function forceOfflineApi (id) {
    return request({
        url: `/user/session/${id}`,
        method: 'delete',
    });
}

// 会话列表
export function conversationListApi (params) {
    return request({
        url: `/session`,
        method: 'get',
        params
    });
}

// 会话下线
export function conversationOfflineApi (id) {
    return request({
        url: `/session/${id}`,
        method: 'delete',
    });
}

// 会话拉黑
export function conversationBlockApi (data) {
    return request({
        url: `/blacklist`,
        method: 'post',
        data
    });
}

// 黑名单列表
export function blacklistApi (params) {
    return request({
        url: `/blacklist`,
        method: 'get',
        params
    });
}

// 移除黑名单
export function removeBlacklistApi (data) {
    return request({
        url: `/blacklist`,
        method: 'delete',
        data
    });
}

// 新增黑名单
export function addBlacklistApi (data) {
    return request({
        url: `/blacklist`,
        method: 'post',
        data
    });
}
