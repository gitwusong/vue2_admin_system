<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :default-active="onRoutes"
            :collapse="collapse"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            unique-opened
            router
        >
            <template v-for="item in items">
                <template v-if="item.list && item.list.length">
                    <el-submenu 
                        :index="'/'+item.url" 
                        :key="item.menuId"
                        >
                        <template slot="title">
                            <img :src="item.icon" alt=""/>
                            <span slot="title">{{ item.name }}</span>
                        </template>
                        <template v-for="subItem in item.list">
                            <el-submenu
                                v-if="subItem.list"
                                :index="'/'+subItem.url"
                                :key="subItem.menuId"
                                >
                                <template slot="title">{{ subItem.name }}</template>
                                <el-menu-item
                                    v-for="threeItem in subItem.list"
                                    :key="threeItem.menuId"
                                    :index="'/'+threeItem.url"
                                >{{ threeItem.name }}</el-menu-item>
                            </el-submenu>
                            <el-menu-item
                                v-else
                                :index="'/'+subItem.url"
                                :key="subItem.menuId"
                            >{{ subItem.name }}</el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="'/'+item.url" :key="item.menuId">
                        <img :src="item.icon" alt=""/>
                        <span slot="title">{{ item.name }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import { cloneDeep } from 'loadsh'
import bus from '../common/bus';
import { menuList } from '@/router/menu';
export default {
    data() {
        return {
            collapse: false,
            items:[]
        };
    },
    computed: {
        onRoutes() {
            let activeRouter = this.$route.path.replace('/', '')
                activeRouter = "/"+ activeRouter
            return activeRouter;
        }
    },
    created() {
        this.items = cloneDeep(menuList)
        // 通过 Event Bus 进行组件间通信，来折叠侧边栏
        bus.$on('collapse', msg => {
            this.collapse = msg;
            bus.$emit('collapse-content', msg);
        });
    },
};
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
</style>
