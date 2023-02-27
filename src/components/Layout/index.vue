<template>
  <div class="app-wrapper">
    <el-row>
        <el-col :span="4">
            <!-- 侧边栏 -->
            <sidebar class="sidebar-container" />
        </el-col>
        <el-col :span="20">
            <!-- 导航栏 -->
            <navbar class="fixed-header" />
            <!-- 主界面 -->
            <app-main />
        </el-col>
    </el-row>
  </div>
</template>
  
<script setup>
import AppMain from './components/AppMain.vue'
import Navbar  from './components/Navbar.vue'
import Sidebar from './components/Sidebar.vue'
</script>

<style lang="less" scoped>
  .app-wrapper {
    position: relative;
    height: 100vh;
    width: 100%;
  }

  .el-row {
      height: 100%;
      .el-col {
          height: 100%;
          padding: 0 20px;
          &:nth-child(1) {
            background-color: var(--vt-c-dominant);
          }
          .right-setting {
              height: 100%;
          }
      }
  }
</style>