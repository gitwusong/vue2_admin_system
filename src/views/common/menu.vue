<template>
    <el-submenu
    :popper-append-to-body="false"
    :index="items.menuId"
    v-if="items.list && items.list.length > 0"
    >
        <template #title>
            <i :class="['iconfont', items.icon]" style="text-align:left;margin-right:5px;"></i>
            <span slot="title">{{items.name}}</span>
        </template>
        <template  v-for="(itm, idx) in items.list">
            <el-submenu
                :popper-append-to-body="false"
                :index="itm.menuId"
                :key="idx"
                v-if="itm.list && itm.list.length"
                >
                <template #title>
                    <i :class="['iconfont', itm.icon]" style="text-align:left;margin-right:5px;"></i>
                    <span slot="title">{{itm.name}}</span>
                </template>
                <el-menu-item
                v-for="(it, k) in itm.list"
                :index="it.menuId"
                :key="k"
                >
                    <i :class="['iconfont', it.icon]" style="text-align:left;margin-right:5px;"></i>
                    <span slot="title">{{it.name}}</span>
                </el-menu-item>
            </el-submenu>
            <el-menu-item
                v-else
                :index="itm.menuId"
                :key="idx"
                >
                <i :class="['iconfont', itm.icon]" style="text-align:left;margin-right:5px;"></i>
                <span slot="title">{{itm.name}}</span>
            </el-menu-item>
        </template>
    </el-submenu>

    <el-menu-item
        v-else
        :index="items.menuId"
        >
        <i :class="['iconfont', items.icon]" style="text-align:left;margin-right:5px;"></i>
        <span slot="title">{{items.name}}</span>
    </el-menu-item>
</template>

<script>
export default {
    name:'omMenu',
    props: {
        items:{}
    },
    components:{

    },
    methods:{
    }
}
</script>

<style lang='scss'>
@import '@/config.scss';
.el-menu--popup{
    min-width:60px !important;
}
// .el-menu-demo.el-menu--horizontal.el-menu{ // 初始 meun 背景色
//     background-color:$initMenuBackground;
// }
.el-menu-item>span, // 初始 item title(font) 颜色
.el-submenu>.el-submenu__title>span, // 初始 subitem title(font) 颜色
.el-submenu>.el-submenu__title>i, // 初始 subitem icon 颜色
.el-menu-item>i{ // 初始 item icon 颜色
    color:$initMenuColor;
}
.el-submenu.is-active>.el-submenu__title>.iconfont, // active subitem icon 颜色
.el-submenu.is-active>.el-submenu__title>.el-icon-arrow-down.el-submenu__icon-arrow, // active  menu 展开收起图标颜色
.el-submenu.is-active>.el-submenu__title>.el-submenu__icon-arrow.el-icon-arrow-right, // active subitem 展开收起图标颜色
.el-submenu.is-active>.el-submenu__title>.iconfont, // active subitem title(font) 颜色
.el-submenu.is-active>.el-submenu__title>span, // active subitem title(font) 颜色
.el-menu-item.is-active>.iconfont, // active item icon 颜色
.el-menu-item.is-active>span{ // active item title(font) 颜色
    color:$initMenuActiveColor;
}
.el-menu--horizontal>.el-menu-item.is-active, // active item 边框颜色
.el-menu--horizontal>.el-submenu.is-active .el-submenu__title{ // active subitem 边框颜色
    // border-color:$initMenuBackground;
    border-color:$initMenuActiveColor;
}
</style>