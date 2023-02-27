<template>
    <div v-if="!item.hidden">
        <template
            v-if="hasOneShowingChild(item.children,item) && (!onlyOneChild.children||onlyOneChild.noShowingChildren)&&!item.alwaysShow">
            <el-menu-item :index="resolvePath(onlyOneChild.path)">
                <template #title>
                    <svg-icon v-if="nestMenu" :color="iconColor" name="drop"/>
                    <svg-icon v-else :color="iconColor" :name="item.meta.icon"/>
                    <span>{{ item.meta.title }}</span>
                </template>
                <!-- <item :icon="onlyOneChild.meta.icon||(item.meta&&item.meta.icon)" :title="onlyOneChild.meta.title" /> -->
            </el-menu-item>
        </template>

        <el-sub-menu v-else ref="subMenu" :index="resolvePath(item.path)" popper-append-to-body>
            <template #title>
                <svg-icon :color="iconColor" :name="item.meta.icon"/>
                <span>{{ item.meta.title }}</span>
            </template>
            <sidebar-item
                v-for="child in item.children"
                :key="child.path"
                :item="child"
                :basePath="resolvePath(child.path)"
                class="nest-menu" 
                :nestMenu="true"/>
        </el-sub-menu>
    </div>
</template>

<script setup>
    import svgIcon from '@/components/icons/index.vue'
    import path from 'path-browserify';
    import { isExternal } from '@/utils/validate';
    import { toRefs, ref } from 'vue';
    import { useRoute } from 'vue-router';
    
    const props = defineProps({
        item: Object,
        basePath: String,
        nestMenu: Boolean
    });
    const item = toRefs(props).item.value;
    const basePath = toRefs(props).basePath.value;
    const nestMenu = toRefs(props).nestMenu.value;

    let onlyOneChild = ref(null);
    const hasOneShowingChild = ( children = [], parent ) => {
        const showingChildren = children.filter( item => {
            if ( item.hidden ) {
                return false;
            } else {
                onlyOneChild.value = item;
                return true;
            }
        } );

        if ( showingChildren.length === 1 ) {
            return true;
        }

        if ( showingChildren.length === 0 ) {
            onlyOneChild.value = { ...parent, path: '', noShowingChildren: true };
            return true;
        }
        return false;
    }
    hasOneShowingChild(item.children, item)

    let iconColor = ref('');
    const resolvePath = (routePath) => {
        if ( isExternal( routePath ) ) {
            return routePath;
        }
        if ( isExternal( basePath ) ) {
            return basePath;
        }
        return path.resolve( basePath, routePath );
    }
    console.log(resolvePath(item.path));
    const setIconColor = () => {
        iconColor = useRoute().path === resolvePath(onlyOneChild.value.path) ? '#ffffff' : '#181818';
    }
</script>

<style lang="less" scoped>
.el-menu-item,
.el-sub-menu {
    span {
        margin-left: 15px;
    }
}

</style>