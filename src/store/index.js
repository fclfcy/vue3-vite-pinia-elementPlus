import { createPinia, defineStore } from 'pinia';
import { ElMessage  } from 'element-plus';
import router from '@/router';

// 引入api
import { modifyPassword } from '@/api/users-manage';
import { login, logout, getUserInfo, getUserPasswordTimeApi } from '@/api/user';

// 引入方法
import { getToken, setToken, removeToken, removeLocalStorage } from '@/utils/auth';
import { sm3 } from 'sm-crypto';
const store = createPinia();


const useUserStore = defineStore('user', {
  state: () => { 
    return {
         token: getToken(),
         name: '',
         avatar: '',
         introduction: '',
         role: '',
         is_builtin: false,
         roles: []
     }
  },
  actions: {
        // user login
        login (userInfo ) {
            const { account, password } = userInfo;
            return new Promise((resolve, reject) => {
                login( { account: account.trim(), password: sm3(password) } )
                    .then( res => {
                        this.token = 'admin-token';
                        setToken( 'admin-token' );
                        resolve();
                        if (res.message) {
                            ElMessage({
                                message: res.message,
                                type: 'success'
                            });
                        }
                    } )
                    .catch( error => {
                        reject( error );
                    } );
            } );
        },
        // get user info role
        getUserInfo (){
            return new Promise( ( resolve ) => {
                getUserInfo()
                    .then( res => {
                        const { role, is_builtin } = res.data;
                        this.role = role;
                        this.is_builtin = is_builtin;
                        resolve( res );
                    } );
            } );
        },
        // get user password time
        getUserPasswordTime (){
            return new Promise( ( resolve ) => {
                getUserPasswordTimeApi()
                    .then( res => {
                        resolve( res );
                    } );
            } );
        },
        // user logout
        logout () {
            return new Promise( ( resolve, reject ) => {
                logout()
                    .then( () => {
                        this.token = '';;
                        this.roles = [];
                        removeToken();
                        // reset visited views and cached views
                        // to fixed https://github.com/PanJiaChen/vue-element-admin/issues/2485
                        router.push( `/login` );
                        removeLocalStorage( 'SET_USER_INFO' );
                        resolve();
                    } )
                    .catch( error => {
                        console.info( error );
                        reject( error );
                    } );
            } );
        },
        modifyPassword(form) {
            modifyPassword({ password: sm3(form.password), new_password: sm3(form.new_password), repassword: sm3(form.repassword) }).then(() => {
                ElMessage({
                    type: 'success',
                    message: '重置密码成功'
                });
                logout();
            });
        }
    }
});

export { useUserStore }
export default store;