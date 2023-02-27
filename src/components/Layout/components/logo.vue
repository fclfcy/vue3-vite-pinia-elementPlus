<template>
    <div class="logo">
        <img v-if="logo" :src="logo">
        <h1 class="title">{{ title }}</h1>
    </div>
</template>

<script setup>
    import logo from '@/assets/images/logo-blue.png';
    import { getCurrentInstance } from 'vue';
    const { proxy } = getCurrentInstance();
    const title = proxy.Setting.title;
</script>

<style lang="less" scoped>
.logo {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-around;
    height: 100px;
    border-bottom: 1px solid var(--vt-c-bg-brand);
    img {
        width: 100px;
    }
}
</style>