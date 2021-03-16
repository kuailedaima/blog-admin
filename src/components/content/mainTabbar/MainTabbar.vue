<template>
<el-menu
  :default-active="activeIndex2"
  class="el-menu-vertical-demo"
  @select="handleSelect"
  background-color= "#545c64"
  text-color="#fff"
  active-text-color="#ffd04b">
  <el-menu-item index="1">首页</el-menu-item>
  <el-menu-item index="2">文章管理</el-menu-item>
  <el-menu-item index="3">随笔管理</el-menu-item>
  <el-menu-item index="4">留言管理</el-menu-item>
  <el-menu-item index="5">用户管理</el-menu-item>
</el-menu>
</template>

<script>
import Vue from 'vue';
import {Menu,Submenu, MenuItem,MenuItemGroup} from 'element-ui';
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
export default {
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },

    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
        let index = Number(key);
        switch(index){
          case 1:
            console.log("首页");
            this.$router.push('/homepage').catch(()=>{})
            break;
          case 2:
            console.log("文章管理");
            this.$router.push('/technology').catch(()=>{})
            break;
          case 3:
            console.log("随笔管理");
            this.$router.push('/essay').catch(()=>{})
            break;
          case 4:
            console.log("留言管理");
            this.$router.push('/message').catch(()=>{})
            break;
        }
      },
      sign(){
        console.log('登陆');
        // this.$router.push('/login').catch(err => {
        //   console.log('输出报错',err)
        // });
        this.$parent.login();
      },
    }
};
</script>

<style scoped>

</style>
