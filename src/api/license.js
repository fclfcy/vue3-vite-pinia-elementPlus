import request from '@/utils/request';

export function getLicenseApi (type, data) {
    return request({
        url: '/license',
        method: type,
        data
    });
}
export function downloadLicenseApi (params) {
    return request({
        url: '/license/apply',
        method: 'get',
        params,
        responseType: 'arraybuffer',
    });
}
