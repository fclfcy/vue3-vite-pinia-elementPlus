import request from '@/utils/request';

export function saveMediaFile ( data ) {
    return request( {
        url: `/screenrecord`,
        method: 'post',
        data
    } );
}
