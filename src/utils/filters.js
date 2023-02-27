/**
 * Show plural label if time is plural number
 * @param {number} time
 * @param {string} label
 * @return {string}
 */
function pluralize ( time, label ) {
    if ( time === 1 ) {
        return time + label;
    }
    return time + label + 's';
}

/**
 * @param {number} time
 */
export function timeAgo ( time ) {
    const between = Date.now() / 1000 - Number( time );
    if ( between < 3600 ) {
        return pluralize( ~~(between / 60), ' minute' );
    } else if ( between < 86400 ) {
        return pluralize( ~~(between / 3600), ' hour' );
    } else {
        return pluralize( ~~(between / 86400), ' day' );
    }
}
/*
 *  formatDate => 2021-04-06 15:26:54
 * */
export function formatDate ( temp ) {
    if ( !temp ) {
        return '- - -';
    }
    const date = new Date( temp * 1000 );
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    return `${year}-${isCover( month )}-${isCover( day )} ${isCover( hour )}:${isCover( minute )}:${isCover( second )}`;
}

export function formatDateSplice (temp1, temp2) {
    return formatDate(temp1) + ' 至 ' + formatDate(temp2);
}

function isCover ( num ) {
    return num >= 10 ? num : `0${num}`;
}

export function roleType ( value ) {
    let role = '';
    switch ( value ) {
        case 'admin':
            role = '管理员';
            break;
        case 'operator':
            role = '操作员';
            break;
        case 'auditor':
            role = '审计员';
            break;
        default:
    }
    return role;
}

export function selectType ( value ) {
    let select = '';
    switch ( value ) {
        case 'select':
            select = '选择型';
            break;
        case 'mix':
            select = '混合型';
            break;
        case 'input':
            select = '输入型';
            break;
        default:
    }
    return select;
}

/*
 * task status
 * @param {string} value
 * @return {string}
 * */
export function taskStatus ( value, btnTextObj = {} ) {
    let status = '';
    switch ( value ) {
        case 'processing':
            status = btnTextObj.processing || '扫描中';
            break;
        case 'cancelled':
            status = btnTextObj.cancelled || '已取消';
            break;
        case 'finished':
            status = btnTextObj.finished || '已完成';
            break;
        case 'failed':
            status = btnTextObj.failed || '失败';
            break;
        case null:
            status = btnTextObj.null || '执行';
            break;
        default:
    }
    return status;
}

/*
 * user role
 * @param {string} value
 * @return {string}
 * */
export function userRoleType ( value ) {
    let role = '';
    switch ( value ) {
        case 'admin':
            role = '管理员';
            break;
        case 'operator':
            role = '操作员';
            break;
        case 'auditor':
            role = '审计员';
            break;
        default:
            role = '- - -';
    }
    return role;
}

/**
 * Number formatting
 * like 10000 => 10k
 * @param {number} num
 * @param {number} digits
 */
export function numberFormatter ( num, digits ) {
    const si = [
        { value: 1E18, symbol: 'E' },
        { value: 1E15, symbol: 'P' },
        { value: 1E12, symbol: 'T' },
        { value: 1E9, symbol: 'G' },
        { value: 1E6, symbol: 'M' },
        { value: 1E3, symbol: 'k' },
    ];
    for ( let i = 0; i < si.length; i++ ) {
        if ( num >= si[ i ].value ) {
            return (num / si[ i ].value).toFixed( digits ).replace( /\.0+$|(\.[0-9]*[1-9])0+$/, '$1' ) + si[ i ].symbol;
        }
    }
    return num.toString();
}

/**
 * Number formatting
 * like 10000 => 10k
 * @param {number} num
 * @param {number} digits
 */
export function bytesToSize ( bytes ) {
    if ( bytes === 0 ) return '0 B';
    const k = 1024;
    const sizes = [ 'B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB' ];
    const i = Math.floor( Math.log( bytes ) / Math.log( k ) );
    return (bytes / Math.pow( k, i )).toPrecision( 3 ) + ' ' + sizes[ i ];
}

export function size_convert_readable ( val ) {
    if ( val / 8 / 1024 / 1024 / 1024 / 1024 >= 1 ) {
        return (val / 8 / 1024 / 1024 / 1024 / 1024).toFixed( 2 ) + ' TB'
    } else if ( val / 8 / 1024 / 1024 / 1024 >= 1 ) {
        return (val / 8 / 1024 / 1024 / 1024).toFixed( 2 ) + ' GB'
    } else if ( val / 8 / 1024 / 1024 >= 1 ) {
        return (val / 8 / 1024 / 1024).toFixed( 2 ) + ' MB'
    } else if ( val / 8 / 1024 >= 1 ) {
        return (val / 8 / 1024).toFixed( 2 ) + ' KB'
    }
    return val + 'B'
}

/**
 * 2131512132 => "0时0分0秒"
 * @param {number} num
 */
export function formateSeconds ( num ) {
    let theTime = parseInt( num );  // 秒
    let theTime1 = 0;   // 分
    let theTime2 = 0;   // 小时
    if ( theTime > 60 ) {   //如果秒数大于60，将秒数转换成整数
        theTime1 = parseInt( theTime / 60 );    //获取分钟，除以60取整数，得到整数分钟
        theTime = parseInt( theTime % 60 );     //获取秒数，秒数取佘，得到整数秒数
        if ( theTime1 > 60 ) {     //如果分钟大于60，将分钟转换成小时
            theTime2 = parseInt( theTime1 / 60 );   //获取小时，获取分钟除以60，得到整数小时
            theTime1 = parseInt( theTime1 % 60 );   //获取小时后取佘的分，获取分钟除以60取佘的分
        }
    }
    let result = '' + parseInt( theTime ) + '秒';
    if ( theTime1 > 0 ) {
        result = '' + parseInt( theTime1 ) + '分' + result;
    }
    if ( theTime2 > 0 ) {
        result = '' + parseInt( theTime2 ) + '时' + result;
    }
    if (num === null) {
        return 0 + '秒';
    }
    return result;
}

/**
 * 10000 => "10,000"
 * @param {number} num
 */
export function toThousandFilter ( num ) {
    return (+num || 0).toString().replace( /^-?\d+/g, m => m.replace( /(?=(?!\b)(\d{3})+$)/g, ',' ) );
}

/**
 * Upper case first char
 * @param {String} string
 */
export function uppercaseFirst ( string ) {
    return string.charAt( 0 ).toUpperCase() + string.slice( 1 );
}
