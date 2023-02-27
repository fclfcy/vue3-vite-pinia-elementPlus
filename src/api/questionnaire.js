import request from '@/utils/request';

/*
 * 合规性检查
 * */

export function getQuestionnaire ( id, params ) {
    return request( {
        url: `/compliance/questionnaire/${id}`,
        method: 'get',
        params
    } );
}

export function creatQuestionnaire ( data ) {
    return request( {
        url: `/compliance/questionnaire`,
        method: 'post',
        data
    } );
}

export function getDocs () {
    return request( {
        url: `/compliance/docs`,
        method: 'get'
    } );
}

export function deleteQuestionnaire ( id ) {
    return request( {
        url: `/compliance/questionnaire/${id}`,
        method: 'delete',
    } );
}

export function getDocTree ( qid, doc_id ) {
    return request( {
        url: `/compliance/${qid}/doc/${doc_id}/tree`,
        method: 'get'
    } );
}

export function getDocTreeSubject ( code, ques_id ) {
    return request( {
        url: `/compliance/doc/tree/${code}/${ques_id}`,
        method: 'get'
    } );
}

export function commit_answer ( data ) {
    return request( {
        url: `/compliance/answer`,
        method: 'post',
        data
    } );
}

export function analysisAnswer ( id ) {
    return request( {
        url: `/compliance/analysis/${id}`,
        method: 'get',
    } );
}

export function importComplanceApi (qid, data ) {
    return request( {
        url: `/compliance/${qid}/questionnaire/excel/import`,
        method: 'post',
        data
    } );
}

export function exportComplanceApi (qid, params ) {
    return request( {
        url: `/compliance/${qid}/questionnaire/excel/export`,
        method: 'get',
        params,
        responseType: 'arraybuffer'
    } );
}

export function exportComplanceNameApi (qid ) {
    return request( {
        url: `/compliance/${qid}/questionnaire/excel/file_name`,
        method: 'get',
    } );
}

