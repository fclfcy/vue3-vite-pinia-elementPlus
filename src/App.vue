<template>
  <el-config-provider>
    <RouterView :key="key" />
  </el-config-provider>
</template>

<script>
import { ref } from 'vue'
export default {
  setup() { 
    const key = ref(Math.random());
    return {
      key
    }
  }
}
</script>

<style lang="less" scoped>
</style>
