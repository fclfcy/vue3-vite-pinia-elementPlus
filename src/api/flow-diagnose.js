import request from '@/utils/request';
const baseUrl = '/api';

export function getCapsDataList ( system_id, params ) {   //获取系统下的所有流量包列表
    return request({
        url: `/system/${system_id}/caps`,
        method: 'get',
        params
    });
}

export function statistics ( system_id, params ) {    // 分析统计
    return request({
        url: `/system/${system_id}/statistics`,
        method: 'get',
        params
    });
}

export function capsDetails ( system_id, pcap_id = 0, params ) {    //获取扫描细节
    return request({
        url: `/system/${system_id}/${pcap_id}/cap/details`,
        method: 'get',
        params
    });
}

export function grapCaps ( system_id, data ) {    //截取
    return request({
        url: `/system/${system_id}/cap`,
        method: 'post',
        data,
        timeout: 30000
    });
}

export function deletePcap ( pcap_id ) {
    return request({
        url: `/pcap/${pcap_id}`,
        method: 'delete',
    });
}

// 批量删除
export function batchDeletePacps ( data ) {
    return request({
        url: `/pcaps`,
        method: 'delete',
        data
    });
}

//上传
export function uploadPacps ( system_id, data ) {
    return request({
        url: `/pcaps/${system_id}/upload`,
        method: 'post',
        data
    });
}

export function downloadPcap ( pcap_id, params ) {
    return request({
        url: `/pcap/${pcap_id}/download-pcap`,
        params,
        method: 'get',
        responseType: 'arraybuffer',
        timeout: 30000
    });
}

export function stopCaps ( system_id ) {    //停止截取
    return request({
        url: `/system/${system_id}/cap`,
        method: 'delete',
        timeout: 600000
    });
}

export function pacpDetails ( pcap_id, offset, limit ) {    //pcap包详情
    return request({
        url: `/pcap/${pcap_id}?offset=${offset}&limit=${limit}`,
        method: 'get',
    });
}

export function getNicsList (  ) {
    return request({
        url: `/nics`,
        method: 'get',
    });
}

export function batchDeleteApi ( data ) {
    return request({
        url: `/pcaps`,
        method: 'delete',
        data
    });
}

export function incidentsApi ( id, params ) {
    return request({
        url: `/pcap/${id}/incidents`,
        method: 'get',
        params
    });
}

export function attackProtectionApi ( id, params ) {
    return request({
        url: `/pcap/${id}/attack`,
        method: 'get',
        params
    });
}

export function blacklistApi ( id, params ) {
    return request({
        url: `/pcap/${id}/black`,
        method: 'get',
        params
    });
}

export function protocolAlarmEventApi ( id, params ) {
    return request({
        url: `/pcap/${id}/illegal`,
        method: 'get',
        params
    });
}

export function protocolDataApi ( id, params ) {
    return request({
        url: `/pcap/${id}/protocol`,
        method: 'get',
        params
    });
}

export function incidentsTop10Api ( id, params ) {
    return request({
        url: `/${id}/incidents-top10`,
        method: 'get',
        params
    });
}

export function attackTop10Api ( id, params ) {
    return request({
        url: `/${id}/attack-top10`,
        method: 'get',
        params
    });
}

export function blackTop10Api ( id, params ) {
    return request({
        url: `/${id}/black-top10`,
        method: 'get',
        params
    });
}

export function diagFlowApi ( id, params ) {
    return request({
        url: `/system/${id}/diag-flow`,
        method: 'get',
        params,
        timeout: 30000
    });
}

export function flowTypesApi ( id, params ) {
    return request({
        url: `/system/${id}/flow-types`,
        method: 'get',
        params
    });
}

export function illegalDetailApi ( id, params ) {
    return request({
        url: `/system/${id}/illegal-detail`,
        method: 'get',
        params
    });
}

export function industryProtocolApi ( id, params ) {
    return request({
        url: `/system/${id}/industry-protocol`,
        method: 'get',
        params
    });
}

export function ipTop10Api ( id, params ) {
    return request({
        url: `/system/${id}/ip-top10`,
        method: 'get',
        params
    });
}

export function legalFlowApi ( id, params ) {
    return request({
        url: `/system/${id}/legal-flow`,
        method: 'get',
        params
    });
}

export function packetLengthApi ( id, params ) {
    return request({
        url: `/system/${id}/packet-length`,
        method: 'get',
        params
    });
}

export function packetTimeDetailsApi ( id, params ) {
    return request({
        url: `/pcap/${id}/packet-time-details`,
        method: 'get',
        params,
        timeout: 300000
    });
}

export function protocolDetailsApi ( id, params ) {
    return request({
        url: `/system/${id}/protocol-detail`,
        method: 'get',
        params
    });
}

export function dataCountApi ( id, params ) {
    return request({
        url: `/system/${id}/statistics-data-count`,
        method: 'get',
        params
    });
}

export function illegalCountApi ( id, params ) {
    return request({
        url: `/system/${id}/statistics-illegal-count`,
        method: 'get',
        params
    });
}

export function ipCountApi ( id, params ) {
    return request({
        url: `/system/${id}/statistics-ip-count`,
        method: 'get',
        params
    });
}

export function protoCountApi ( id, params ) {
    return request({
        url: `/system/${id}/statistics-proto-count`,
        method: 'get',
        params
    });
}

export function vulDetailsApi ( id, params ) {
    return request({
        url: `/${id}/vul-details`,
        method: 'get',
        params
    });
}

//获取分析统计时间范围
export function getTimeFrame ( sysId ) {
    return request({
        url: `/system/${sysId}/statistics-time-range`,
        method: 'get',
    });
}

// IP 的流量统计
export function getIpStatistics ( params ) {
    return request({
        url: `${baseUrl}/ip-traffic-statistics`,
        method: 'get',
        params
    });
}

//协议流量
export function getProtoStatistics ( params ) {
    return request({
        url: `${baseUrl}/proto-traffic-statistics`,
        method: 'get',
        params
    });
}

//协议流量
export function getFlowSistribution ( params ) {
    return request({
        url: `${baseUrl}/show-traffic`,
        method: 'get',
        params
    });
}

// 任务
export function mediaProtocolApi (id) {
    return request({
        url: `/system/${id}/media_proto_stats`,
        method: 'get',
    });
}

//攻击数据统计
export function attackTrafficApi (params) {
    return request({
        url: `${baseUrl}/attack-traffic-statistics`,
        method: 'get',
        params
    });
}