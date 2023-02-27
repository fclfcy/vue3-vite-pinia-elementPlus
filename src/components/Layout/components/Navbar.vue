<template>
    <div class="navbar">
        <div class="nav-left">
            <h1>您好，{{ userRole }}</h1>
        </div>
        <div class="nav-right">
            <div class="electricity">
                <span class="progress-after"></span>
                <el-progress
                        :text-inside="true"
                        :key="batterykey"
                        :stroke-width="20"
                        :percentage="batteryPercent"
                        :status="batteryStatus">
                </el-progress>
            </div>
            <div class="svg-box">
                <el-badge is-dot class="item" :hidden="!count">
                    <svg-icon name="message" @click="messageNotification"></svg-icon>
                </el-badge>
            </div>
            <el-dropdown class="avatar-container right-menu-item hover-effect"
                         trigger="click">
                <div class="avatar-wrapper">
                    <svg-icon name="menu"></svg-icon>
                </div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item @click="version">
                            <span>版本信息</span>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
            <el-dropdown class="avatar-container right-menu-item hover-effect"
                         trigger="click">
                <div class="avatar-wrapper">
                    <svg-icon name="setting"></svg-icon>
                </div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <!-- <el-dropdown-item @click="helpCenter">
                            <span style="display:block;">帮助中心</span>
                        </el-dropdown-item> -->
                        <router-link to="/users-manage/account">
                            <el-dropdown-item>修改密码</el-dropdown-item>
                        </router-link>
                        <el-dropdown-item @click="sysUpgrade" v-if="userRole === 'admin'">
                            <span style="display:block;">系统升级</span>
                        </el-dropdown-item>
                        <el-dropdown-item @click="sysReboot">
                            <span style="display:block;">系统重启</span>
                        </el-dropdown-item>
                        <el-dropdown-item @click="sysShutdown">
                            <span style="display:block;">系统关机</span>
                        </el-dropdown-item>
                        <el-dropdown-item @click="openPasswordDialog('traceRemoval')">
                            <span style="display:block;">痕迹清除</span>
                        </el-dropdown-item>
                        <el-dropdown-item @click="openPasswordDialog('restoreFactorySettings')" v-if="userRole === 'operator'">
                            <span style="display:block;">恢复出厂设置</span>
                        </el-dropdown-item>
                        <el-dropdown-item divided
                                          @click="logout">
                            <span style="display:block;">退出登录</span>
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
    <el-dialog
       v-model="versionDialogVisible"
       title="版本信息"
       width="40%">
       <div class="version">
            <img src="@/assets/images/logo-blue.png" alt="">
            <h1>{{ proxy.Setting.title }}</h1>
            <div>版本：{{ versionData.version }}</div>
            <div>liense有效期至{{ versionData.release_date }}</div>
       </div>
       <template #footer>
         <span class="dialog-footer">
           <el-button type="primary" @click="versionDialogVisible = false">OK</el-button>
         </span>
       </template>
     </el-dialog>
</template>

<script setup>
import {
    sysRebootApi,
    sysShutdownApi,
    getVersionApi,
    proofPasswordApi,
    traceRemovalApi,
    restoreFactorySettingsApi,
    getBatteryApi,
    sysUpgradeApi,
    getRestoreStatusApi
} from '@/api/user';
import { getSystemMessageApi } from '@/api/user';
import { useUserStore } from '@/store';
import { ref, getCurrentInstance, onMounted, onUnmounted, reactive, watch } from 'vue';
import { ElMessage, ElMessageBox, ElNotification } from 'element-plus'
import SvgIcon from '@/components/icons/index.vue'

const userRole = useUserStore().role;

function sysUpgrade () {}
function openPasswordDialog () {}
function accountManagement () {}
function journalManagement () {}
const logout = async () => {
    await useUserStore().logout();
}

const { proxy } = getCurrentInstance();

onMounted(() => {
    batteryHttp();
    proxy.$addSockets(sockets, proxy);
});
onUnmounted(() => {
    proxy.$removeSockets(sockets, proxy);
});

let message = ref('');
let count = ref(0);
function messageNotification () {
    getSystemMessageApi().then(res => {
        if(res.data) {
            res.data.forEach(item => {
                message.value += item.desc;
            });
        }
        if (message.value.length) {
            message.value = `<ul>${message.value}</ul>`
        } else {
            message.value = '暂无消息';
        }
        ElNotification.closeAll();
        ElNotification({
          title: '消息通知',
          dangerouslyUseHTMLString: true,
          message: message.value,
          position: 'bottom-right',
          duration: 0,
        })
    });
};

let versionDialogVisible = ref(false);
let versionData = reactive({});
// 版本信息
function version () {
    getVersionApi().then(res => {
        versionData = res;
        versionDialogVisible.value = true;
    });
}

let batteryPercent = ref(0);
let batterykey = ref(0);
let batteryPlugged = ref(false);
let batteryStatus = ref('success');
// 需要监听的socket
const sockets = {
    power(res) {
        battery( JSON.parse(res).percent, JSON.parse(res).power_plugged);
    },
    message(res) {
        count.value = JSON.parse(res).count;
    }
};
// 电量接口请求
function batteryHttp (){
    getBatteryApi().then( res => {
        battery( res.percent, res.power_plugged );
    } );
}
// 电量
function battery ( percent, power_plugged ) {
    const progressInput = document.getElementsByClassName( 'el-progress-bar__innerText' )[ 0 ];
    batteryPercent.value = parseInt(percent);
    batteryStatus.value = 'success';
    batteryPlugged.value = power_plugged;
    if ( power_plugged ) {
        progressInput.style.textAlign = 'center';
    } else {
        if ( batteryPercent < 20 ) {
            batteryStatus.value = 'exception';
        }
    }
}

// 系统重启
function sysReboot () {
    ElMessageBox.confirm(
        '确定要进行系统重启吗?',
        '系统重启',
        {
            confirmButtonText: 'OK',
            cancelButtonText: '取消',
            type: 'warning',
        }
    ).then(() => {
        sysRebootApi().then(() => {
            ElMessage.success('正在重启，请稍等...');
            logout();
        });
    });
}
// 系统关机
function sysShutdown () {
    ElMessageBox.confirm(
        '确定要进行系统关机吗?',
        '系统关机',
        {
            confirmButtonText: 'OK',
            cancelButtonText: '取消',
            type: 'warning',
        }
    ).then(() => {
        sysShutdownApi();
    });
}

watch(batteryPlugged, () => {
    batterykey.value ++
});
</script>

<style lang="less" scoped>
.navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100px;
    border-bottom: var(--vt-c-bg-brand) 1px solid;
    .nav-right {
        display: flex;
        align-items: center;
        .el-dropdown {
            width: 60px;
            >div {
                margin: 0 auto;
            }
        }
        .electricity {
            display: flex;
            align-items: center;
            margin-right: 30px;
            :deep(.el-progress-bar) {
                width: 38px;
                font-size: 12px;
                .el-progress-bar__outer {
                    border-radius: 3px;
                    background: #b0b3b9;
                    .el-progress-bar__inner {
                        border-radius: 3px 0 0 3px;
                    }
                }
            }
            :deep(.el-progress-bar__innerText) {
                margin: 0 2px;
            }
            .progress-after {
                display: inline-block;
                width: 2px;
                height: 10px;
                margin-right: 2px;
                background: #b0b3b9;
            }
        }
    }
    .svg-box {
        width: 60px;
        > div {
            display: block;
            margin: 0 auto;
        }
    }
    span {
        margin-right: 1rem;
    }
}
.version {
    display: flex;
    flex-flow: column;
    align-items: center;
    > h1 {
        margin: 15px;
    }
    > div {
        margin: 10px;
        font-size: 18px;
    }
}
svg {
    cursor: pointer;
}
</style>