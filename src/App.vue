<template>
<div id="app">
  <router-view></router-view>
</div>
</template>

<script>
export default {
  name: 'app'
}
</script>
<style lang="scss">
html {
  height: 100%;
  width: 100%;
  font-size: 625%;
  background-color: #f7f7f7;
}

body, #app {
  height: 100%;
  margin: 0;
  font-size: .14rem;
}

.truncate {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>