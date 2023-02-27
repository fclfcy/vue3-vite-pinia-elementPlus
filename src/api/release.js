import request from '@/utils/request';

export function getRelease () {
    return request({
        url: '/release',
        method: 'get'
    });
}

export function uploadFileApi (data) {
    return request({
        url: '/file',
        method: 'post',
        data,
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
}
