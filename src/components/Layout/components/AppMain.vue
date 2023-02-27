<template>
    <section class="app-main">
        <el-scrollbar>
            <router-view :key="key" v-slot="{ Component }">
                <keep-alive>
                    <component :is="Component"></component>
                </keep-alive>
            </router-view>
        </el-scrollbar>
    </section>
</template>

<script>
    export default {
        name: 'AppMain',
        computed: {
            key () {
                return this.$route.path;
            }
        }
    };
</script>

<style lang="less" scoped>
    .app-main {
        /* 100 = navbar  100  */
        min-height: calc(100vh - 100px);
        width: 100%;
        padding-bottom: 20px;
        position: relative;
        overflow: auto;
    }
</style>
