import axios from 'axios';
import { useUserStore } from '@/store';
import { getToken } from '@/utils/auth';
import { ElMessage } from 'element-plus';
import router from '@/router';

// 创建请求实例
const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  // 指定请求超时的毫秒数
  timeout: 1000,
  // 表示跨域请求时是否需要使用凭证
  withCredentials: false,
});

// 前置拦截器（发起请求之前的拦截）
instance.interceptors.request.use(
  (config) => {
    /**
     * 在这里一般会携带前台的参数发送给后台，比如下面这段代码：
     * const token = getToken()
     * if (token) {
     *  config.headers.token = token
     * }
     */
    if (useUserStore().token) {
        // let each request carry token
        // ['X-Token'] is a custom headers key
        // please modify it according to the actual situation
        config.headers['X-Token'] = getToken();
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

// 后置拦截器（获取到响应时的拦截）
instance.interceptors.response.use(
  response => {
    /**
     * 根据你的项目实际情况来对 response 和 error 做处理
     * 这里对 response 和 error 不做任何处理，直接返回
     */
    const res = response.data;
    if (res.code === 10000) {
        // ElMessage ({
        //     message: res.message || 'Error',
        //     type: 'error',
        //     duration: 5 * 1000
        // });
        ElMessage.error(res.message || 'Error')
        return Promise.reject(new Error(res.message || 'Error'));
    } else {
        return res;
    }
  },
  (error) => {
    if (error.response && error.response.status) {
      if (error.response.status === 401) {
          ElMessage({
              dangerouslyUseHTMLString: true,
              message: error.response.data.message,
              type: 'error',
              duration: 5 * 1000
          });
          router.push({
              path: `/login`
          });
      } else if (error.response.status === 409) {
          ElMessage({
              dangerouslyUseHTMLString: true,
              message: error.response.data.message,
              type: 'error',
              duration: 5 * 1000
          })
      } else {
          ElMessage({
              dangerouslyUseHTMLString: true,
              message:
                  typeof error.response.data.errors === 'string' ? `${error.response.data.errors}` : error.response.data.errors && `${error.response.data.errors[Object.keys(error.response.data.errors)[0]] || error.response.data.errors}` || error.response.data.message && `${error.response.data.message}` || error.response.data.errors && `${error.response.data.errors}` || `连接错误，请检查后重试!`,
              type: 'error',
              duration: 5 * 1000
          });
      }
  }
    return Promise.reject(error);
  },
);

// 导出常用函数

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export const post = (url, data = {}, params = {}) => {
  return instance({
    method: 'post',
    url,
    data,
    params,
  });
};

/**
 * @param {string} url
 * @param {object} params
 */
export const get = (url, params = {}) => {
  return instance({
    method: 'get',
    url,
    params,
  });
};

/**
 * @param {string} url
 * @param {object} data
 * @param {object} params
 */
export const put = (url, data = {}, params = {}) => {
  return instance({
    method: 'put',
    url,
    params,
    data,
  });
};

/**
 * @param {string} url
 * @param {object} params
 */
export const _delete = (url, params = {}) => {
  return instance({
    method: 'delete',
    url,
    params,
  });
};

export default instance;
