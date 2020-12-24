<template>
    <div class="om_Header">
        <div class="logo">
            <div class="logo-img"><img :src="logoTitle.icon" alt=""></div>
            <div class="logo-name">{{logoTitle.title}}</div>
        </div>
        <div class="omMenu">
            <!--
                menu-trigger="click"
                active-text-color="#ead023"
                text-color="#fff"
                background-color="#1a62c6"
            -->
            <el-menu
            background-color="#1a62c6"
            :default-active="$store.state.tags.activeIndex"
            class="el-menu-demo"
            unique-opened
            mode="horizontal"
            @select="handleSelect"
            >
                <om-menu
                    v-for="(item,index) in menuList"
                    :key="index"
                    :items='item'
                    />
            </el-menu>
        </div>
        <div class="omHeaderUser">
        <el-dropdown @command="handleCommand" trigger="click">
            <span class="el-dropdown-link">
                <span class="title">{{robotUserName}}</span>
                <i class="icon"><img src="/images/user.png" alt=""></i>
            </span>
            <template #dropdown>
                <el-dropdown-menu>
                <el-dropdown-item command="editPassword">修改密码</el-dropdown-item>
                <el-dropdown-item command="SignoOut">退出登录</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
        </div>
    </div>
</template>
<script>
import omMenu from './menu'
import { menuList } from '@/router/menu.js'
import { logoTitle, loginOut } from '@/utils'
export default {
    components:{
        omMenu
    },
    data() {
        return {
            userName: '管理员账号',
            logoTitle,
            menuList
        }
    },
    computed: {
        robotUserName() {
            const robotUserName = sessionStorage.getItem('robotUserName')
            return robotUserName || this.userName
        }
    },
    methods: {
        handleCommand(command) {
            if (command === 'SignoOut') {
                loginOut()
            }
        },
        handleSelect(key) {
            this.$store.state.tags.activeIndex = key
            const arr = this.$router.options.routes
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].meta.menuId === key) {
                    this.$router.push(arr[i].path)
                }
            }
        }
    }
}
</script>
<style scoped lang="scss">
@import '@/config.scss';
.om_Header{
  width:100%;
  height:$initMenuHeight;
  display: flex;
  background: $initMenuBackground;
  color:$initMenuColor;
  .logo{
    height:100%;
    width:360px;
    line-height:$initMenuHeight;
    font-size:20px;
    font-weight: 100;
    // font-family:"楷书";
    display: flex;
    justify-content: space-around;
    .logo-img{
      width:80px;
      text-align:left;
      box-sizing:border-box;
      padding-top:10px;
      padding-left:10px;
      position: relative;
    }
    .logo-name{
      width:280px;
    }
  }
  .omMenu{
    flex:1;
  }
  .omHeaderUser {
    width:100px;
    height:100%;
  }
}
.el-dropdown{
  width:100%;
  height:$initMenuHeight;
  color:$initMenuColor;
  line-height:$initMenuHeight;
  outline: none;
  text-align: center;
  cursor: pointer;
}
.el-dropdown-menu{
  background: $initMenuBackground;
}
.el-dropdown-menu__item{
  color:$initMenuColor;
}
// .el-dropdown__popper[role=tooltip].is-light[role=tooltip] .el-popper__arrow::before{
//   border: 1px solid $initMenuBackground;
//   background-color:$initMenuBackground;
// }

.el-popper[x-placement^=bottom] .popper__arrow::after {
  border-bottom-color: $initMenuBackground;
}
// .el-dropdown-menu {
//   border-color:$initMenuBackground;
// }
.el-dropdown-link {
  width:100%;
  line-height:$initMenuHeight ;
  color:$initMenuColor;
  height:$initMenuHeight;
  outline: none;
  text-align: center;
  display: flex;
  cursor: pointer;
  .title{
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    width:50px;
  }
  .icon{
    flex:1;
    line-height:$initMenuHeight;
    text-align:left;
  }
}
</style>
