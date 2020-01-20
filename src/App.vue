<template>
  <div id="app">
    <Toolbar/>
    <router-view></router-view>
  </div>
</template>

<script>
import Toolbar from './components/Toolbar.vue'
export default {
  name: 'app',
  components :{
    Toolbar
  }
}
</script>

<style>
html, body{
  padding: 0;
  margin : 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
