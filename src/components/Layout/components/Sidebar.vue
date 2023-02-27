<template>
    <div class="sidebar">
        <logo></logo>
        <div class="menu">
            <el-scrollbar>
                <el-menu
                  router
                  :default-active="activeMenu"
                  text-color="#181818"
                  active-text-color="#ffffff"
                  @select="select">
                  <sidebar-item
                        v-for="route in routes"
                        :key="route.path"
                        :item="route"
                        :basePath="route.path" />
                </el-menu>
            </el-scrollbar>
        </div>
        <div class="version">
            版本：V2.25.3
        </div>
    </div>
</template>

<script setup>
    import SidebarItem from './SidebarItem.vue';
    import { routes } from '@/router';
    import { useRoute } from 'vue-router';
    import logo from './logo.vue';
    import { ref } from 'vue';

    let activeMenu = ref('');
    
    const { meta, path } = useRoute();
    // if set path, the sidebar will highlight the path you set
    if ( meta.activeMenu ) {
        activeMenu = meta.activeMenu;
    }
    activeMenu = path;
</script>

<style lang="less" scoped>
    .menu {
        height: calc( 100vh - 152px );
        overflow: auto;
        padding: 20px 0;
        .el-menu {
            width: 80%;
            margin-left: 10%;
            overflow: hidden;
            border-right: none;
            /* text-align: center; */
            :deep(.is-active) {
                background-color: var(--vt-c-brand);
            }
            :deep(.is-opened) {
                background-color: var(--vt-c-dominant);
            }
            > div {
                margin: 10px 0;
                border-radius: 10px;
                overflow: hidden;
            }
            :deep(.nest-menu) {
                margin: 10px 0;
                border-radius: 10px;
                overflow: hidden;
            }
        }
    }
    .version {
        height: 50px;
        line-height: 50px;
        text-align: center;
        border-top: 1px solid var(--vt-c-bg-brand);
    }
</style>