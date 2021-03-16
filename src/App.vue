<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <header>
      <header-bar class="headerbar"/>
    </header>
    <!-- <div>
      <header-bar/>
    </div> -->
    <main-tabbar class="maintabbar"/>
    <router-view/>
  </div>
</template>

<script>
import HeaderBar from './components/content/headerbar/HeaderBar'
import MainTabbar from './components/content/mainTabbar/MainTabbar'
export default {
  components:{
    MainTabbar,
    HeaderBar
  }
}
</script>
<style scoped>
* {
      margin: 0;
      padding: 0;
  }

#app {
  color: #2c3e50;
}

.headerbar {
  width: 100%;
  height: 10vh;
  position: fixed;
  left: 0;
  top:0;
}

.maintabbar {
  /* height: 100vh; */
  width: 17%;
  height: 100%;
  position: fixed;
  left: 0;
  top: 10vh;
}
</style>
