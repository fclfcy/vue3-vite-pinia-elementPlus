/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal ( path ) {
    return /^(https?:|mailto:|tel:)/.test(path);
}

Date.prototype.format = function ( fmt ) {
    const o = {
        "M+": this.getMonth() + 1,                 //月份
        "d+": this.getDate(),                    //日
        "h+": this.getHours(),                   //小时
        "m+": this.getMinutes(),                 //分
        "s+": this.getSeconds(),                 //秒
        "q+": Math.floor( (this.getMonth() + 3) / 3 ), //季度
        "S": this.getMilliseconds()             //毫秒
    };
    if ( /(y+)/.test( fmt ) ) {
        fmt = fmt.replace( RegExp.$1, (this.getFullYear() + "").substr( 4 - RegExp.$1.length ) );
    }
    for ( let k in o ) {
        if ( new RegExp( "(" + k + ")" ).test( fmt ) ) {
            fmt = fmt.replace( RegExp.$1, (RegExp.$1.length === 1) ? (o[ k ]) : (("00" + o[ k ]).substr( ("" + o[ k ]).length )) );
        }
    }
    return fmt;
};

/**
 * @param {string} url
 * @returns {Boolean}
 */
export function validURL ( url ) {
    const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/;
    return reg.test(url);
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validLowerCase ( str ) {
    const reg = /^[a-z]+$/;
    return reg.test(str);
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUpperCase ( str ) {
    const reg = /^[A-Z]+$/;
    return reg.test(str);
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validAlphabets ( str ) {
    const reg = /^[A-Za-z]+$/;
    return reg.test(str);
}

/**
 * @param {string} email
 * @returns {Boolean}
 */
export function validEmail ( email ) {
    const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(email);
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function isString ( str ) {
    if ( typeof str === 'string' || str instanceof String ) {
        return true;
    }
    return false;
}

/**
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray ( arg ) {
    if ( typeof Array.isArray === 'undefined' ) {
        return Object.prototype.toString.call(arg) === '[object Array]';
    }
    return Array.isArray(arg);
}

/**
 * @description 用户名
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
    const regexPhone = new RegExp(/^[a-zA-Z]{1}[\w]{3,24}$/)
    return regexPhone.test(str)
}
export const regexPw = new RegExp(
    `^[a-zA-Z](?=.*\\d)(?=.*[a-z])(?=.*[!@#])[a-zA-Z0-9!@#]{5,15}$`
)
/**
 * @description 用户密码
 * @param {String} str
 * @param {Number} minValue
 * @returns {Boolean}
 */
export function validUserPw(str, minValue = 6) {
    const regexPw = new RegExp(
        `^[a-zA-Z](?=.*\\d)(?=.*[a-z])(?=.*[!@#])[a-zA-Z0-9!@#]{${minValue - 1},15}$`
    )
    return regexPw.test(str)
}

/**
 * @description IP
 * @param {string} str
 * @returns {Boolean}
 */
export function validIp(str) {
    const regexIp = new RegExp(
        /^(?:(?:^|,)(?:[0-9]|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])(?:\.(?:[0-9]|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])){3}){1,3}$/
    )
    return regexIp.test(str)
}

/**
 * @description NTP自动同步Ip限制
 * @param {string} str
 * @returns {Boolean}
 */
export function validNtpIp(str) {
    return validIp(str) && str !== '0.0.0.0' && str !== '255.255.255.255'
}

export const regexIp = new RegExp(
    /^(?:(?:^|,)(?:[0-9]|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])(?:\.(?:[0-9]|[1-9]\d|1\d{2}|2[0-4]\d|25[0-5])){3}){1,3}$/
)

export const regexMac = new RegExp(/^((([a-f0-9]{2}:){5})|(([a-f0-9]{2}-){5}))[a-f0-9]{2}$/i)

/**
 * 邮箱正则规则
 * 包含数字、字母、-和_以及@符，不超过50个字符
 */
export const regExpEmail = new RegExp(
    /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/
)
/**
 * 手机正则规则
 * 1开头的11位整数数字
 */
export const regExpMobile = new RegExp(/^1[0-9]{10}$/)
/**
 * 注册验证码
 * 仅允许字母、数字
 */
export const regExpRegisterCode = new RegExp(/^[a-zA-Z0-9]+$/)
/**
 * 名称
 * 允许中文、数字、字母、下划线、中划线、斜杠
 */
export const regExpName = new RegExp(/^[\u4e00-\u9fa5a-zA-Z0-9_\-]+$/)
/**
 * 子网掩码0~32
 */
// export const regExpSubMask = new RegExp(/^(?:[0-9]|1[0-9]|32)$/)
export const regExpSubMask = new RegExp(/^[0-9]$|^[0-2][0-9]$|^3[0-2]$/)
/**
 * 子网掩码IP格式正则
 */
export const regExpSubMaskIp = new RegExp(
    /^(254|252|248|240|224|192|128|0)\.0\.0\.0|255\.(254|252|248|240|224|192|128|0)\.0\.0|255\.255\.(254|252|248|240|224|192|128|0)\.0|255\.255\.255\.(255|254|252|248|240|224|192|128|0)$/
)
/**
 * 判断子网掩码
 */
export const regNetmask = new RegExp(/^((128|192)|2(24|4[08]|5[245]))(\.(0|(128|192)|2((24)|(4[08])|(5[245])))){3}$/)
/**
 * 自定义应用=>匹配值
 * 十六进制数据，每两位用空格隔开
 */
export const regMatchValue = new RegExp(/^(([0-9a-fA-F]{2}[ ])+?)?[0-9a-fA-F]{2}$/)
/**
 * 校验正整数
 */
export const regInteger = new RegExp(/^([1-9][0-9]*)$/)
/**
 * 域名正则
 */
export const regHost = new RegExp(/^(\w*[.]*)?(\w+[.])(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2})$/)

/**
 * @description:  判断两个对象是否===
 * @author:cheyongzhi
 * @date: 2019-07-30
 */
export const diffObj = (obj1, obj2) => {
    const o1 = obj1 instanceof Object
    const o2 = obj2 instanceof Object
    if (!o1 || !o2) {
        /*  判断不是对象  */
        return obj1 === obj2
    }

    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false
        // Object.keys() 返回一个由对象的自身可枚举属性(key值)组成的数组,例如：数组返回下表：let arr = ["a", "b", "c"];console.log(Object.keys(arr))->0,1,2;
    }

    for (const attr in obj1) {
        if (Object.prototype.hasOwnProperty.call(obj1, attr)) {
            const t1 = obj1[attr] instanceof Object
            const t2 = obj2[attr] instanceof Object
            if (t1 && t2) {
                return diffObj(obj1[attr], obj2[attr])
            } else if (obj1[attr] !== obj2[attr]) {
                return false
            }
        }
    }
    return true
}

/**
 * @description:  数字范围校验
 * @returns {Boolean}
 * @author: cheyongzhi
 * @date: 2021-11-19
 * @param value {Number|''} 判断目标值
 * @param startNum {Number} 起始范围
 * @param endNum {Number} 结束范围
 * @param required {Boolean} 是否不能为空
 */
export const numberRange = (value, startNum, endNum, required = false) => {
    const _value = parseInt(value)
    const _startNum = parseInt(startNum)
    const _endNum = parseInt(endNum)
    if (Number.isInteger(value) && _value >= _startNum && _value <= _endNum) {
        return true
    } else return typeof value !== 'number' && value === '' && !required
}

/**
 * @description:  端口校验,需要满足端口段如80-90,源端口小于目标端口
 * @author:cheyongzhi
 * @date: 2021-10-28
 */

export const multiplePort = (arrayPorts) => {
    let status = false
    const range = (port) => {
        return numberRange(+port, 1, 65535, true)
    }
    for (const itemValue of arrayPorts) {
        if (regInteger.test(itemValue) && range(itemValue)) {
            status = true
        } else if (/^\d+-\d+$/.test(itemValue)) {
            const arr = itemValue.split('-')
            if (+arr[0] < +arr[1] && range(arr[0]) && range(arr[1])) {
                status = true
            } else {
                status = false
                break
            }
        } else {
            status = false
            break
        }
    }
    return status
}

/**
 * @description:  校验是否是合格的IP4或IPV6
 * @author:binwu
 * @date: 2022-1-4
 */
export const regexIp4OrIpv6 = new RegExp(
    /^((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){6}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^::([\da-fA-F]{1,4}:){0,4}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:):([\da-fA-F]{1,4}:){0,3}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:):([\da-fA-F]{1,4}:){0,2}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){3}:([\da-fA-F]{1,4}:){0,1}((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){4}:((25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(25[0-5]|2[0-4]\d|[01]?\d\d?)$|^([\da-fA-F]{1,4}:){7}[\da-fA-F]{1,4}$|^:((:[\da-fA-F]{1,4}){1,6}|:)$|^[\da-fA-F]{1,4}:((:[\da-fA-F]{1,4}){1,5}|:)$|^([\da-fA-F]{1,4}:)((:[\da-fA-F]{1,4}){1,4}|:)$|^([\da-fA-F]{1,4}:){3}((:[\da-fA-F]{1,4}){1,3}|:)$|^([\da-fA-F]{1,4}:){4}((:[\da-fA-F]{1,4}){1,2}|:)$|^([\da-fA-F]{1,4}:){5}:([\da-fA-F]{1,4})?$|^([\da-fA-F]{1,4}:){6}:$/
)

/*
 @time(number): 时间值，单位s
 @return string: 表示过去了多少分、秒、小时、天
 */

export const formate = time => {
    let remainTime = 0; //剩余的时间
    if ( time < 60 ) {
        return `${time}秒`
    }

    let minute = Math.floor( time / 60 );
    remainTime = time - minute * 60;
    if ( minute < 60 ) {
        return `${minute}分` + formate( remainTime );
    }
    let hour = Math.floor( time / 3600 );
    remainTime = time - hour * 3600;
    if ( hour < 24 ) {
        return `${hour}小时` + formate( remainTime );
    }

    let day = Math.floor( time / 3600 / 24 );
    remainTime = time - day * 3600 * 24;
    return `${day}天` + formate( remainTime );
}

// form校验表单和选择框
export const inputFormCheck = { required: true, message: '必填项', trigger: 'blur' }
export const selectFormCheck = { required: true, message: '必填项', trigger: 'change' }
export const ipCheck = {
    required: true,
    pattern: /^((2[0-4]\d|25[0-5]|[01]?\d\d?)\.){3}(2[0-4]\d|25[0-5]|[01]?\d\d?)$/,
    message: '请输入合法IP地址!',
    trigger: 'blur'
}
