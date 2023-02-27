<template>
    <div class="login">
        <div class="login-box">
            <div class="logo"></div>
            <h1>{{ title }}</h1>
            <el-form :model="ruleForm"
                     status-icon
                     ref="ruleFormRef"
                     :rules="rules"
                     label-width="80px"
                     class="demo-ruleForm">
                <el-form-item label="用户名"
                              prop="account">
                    <el-input v-model="ruleForm.account"
                              autocomplete="off"
                              v-focus
                              ref="usernameRef"></el-input>
                </el-form-item>
                <el-form-item label="密码"
                              prop="password">
                    <el-input  type="password"
                              v-model="ruleForm.password"
                              autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary"
                               class="login-btn"
                               v-loading="loading"
                               @click="login(ruleFormRef)">登录</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script setup>
import { useUserStore } from '@/store';
import { useRouter } from 'vue-router';
import { reactive, ref, onMounted, getCurrentInstance } from 'vue';
import { removeToken } from '@/utils/auth';
import { ElMessage } from 'element-plus';
// 定义router
const router = useRouter();

// 定义data
let loading = ref(false);
const ruleFormRef = ref('');
const usernameRef = ref('');
const title = getCurrentInstance().proxy.Setting.title;

// 定义登录form表单和校验
const ruleForm = reactive({
    account: '',
    password: ''
});
const rules = reactive({
    account: [
        {
            required: true,
            trigger: 'blur',
            validator: (rule, value, callback) => {
                if (!value.trim()) {
                    callback(new Error('请输入用户名！'));
                } else {
                    callback();
                }
            }
        },
    ],
    password: [
        {
            required: true,
            trigger: 'blur',
            validator: (rule, value, callback) => {
                if ( value.length < 6 ) {
                    callback(
                        new Error( '请输入密码！' )
                    );
                } else {
                    callback();
                }
            }
        },
    ],
});

// 登录功能
const login = async (formEl) => {
    if (!formEl) return
    await formEl.validate((valid, fields) => {
        if (valid) {
            loading = true;
            useUserStore().login( ruleForm )
                .then( async () => {
                    loading = false;
                    const { data } = await useUserStore().getUserInfo();
                    const time = await useUserStore().getUserPasswordTime();
                    if (data.password_is_default) {
                        ElMessage.warning('当前密码是初始化密码，请修改');
                        router.push( {
                            path: '/users-manage/account',
                        } );
                    } else {
                        time.data.forEach(item => {
                            if (item.types === 'passwdSafeUseDays') {
                                if (new Date().getTime() / 1000 - data.password_update_at > item.value * 24 * 3600) {
                                    message.warning(`该密码已使用超过最长使用期限：${item.value}天，请及时修改`);
                                    router.push( {
                                        path: '/users-manage/account',
                                    } );
                                } else {
                                    if ( data.role === 'admin' ) {
                                        router.push( {
                                            path: '/users-manage/users-manage',
                                        } );
                                    } else if ( data.role === 'auditor' ) {
                                        router.push( {
                                            path: '/log-management/log-management',
                                        } );
                                    } else {
                                        router.push( {
                                            path: '/system-state/index',
                                            query: '',
                                        } );
                                    }
                                }
                            }
                        });
                    }
                } )
                .catch( error => {
                    loading = false;
                } );
      } else {
        console.log('error submit!', fields)
      }
    })
}

// 进页面操作
onMounted(() => {
    removeToken();
    usernameRef.value.focus();
});

</script>

<style lang="less" scoped>
.login {
    position: relative;
    height: 100%;
    background: url('@/assets/images/login-bg.jpg');
    h1 {
        text-align: center;
    }
    .login-box {
        width: 30%;
        min-width: 400px;
        height: 40%;
        min-height: 370px;
        padding: 20px;
        position: absolute;
        top: 27%;
        right: 6.5%;
        background-color: #fff;
        border-radius: 10px;
        .logo {
            width: 158px;
            height: 43px;
            margin: 20px auto;
            background-size: 100% 100%;
            background: url('@/assets/images/logo-blue.png') no-repeat;
        }
        .title {
            text-align: center;
            color: rgb(22, 159, 223);
        }
        .el-form {
            margin-top: 20px;
        }
        .login-btn {
            margin-top: 15px;
            width: 100%;
        }
    }
}
</style>

