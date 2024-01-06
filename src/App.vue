<template>
  <div id="app">
    <div class="btn" v-show="env">
      <div>
        <router-link to="/qrcode/wine/Introduce">1988</router-link>
      </div>
      <div>
        <router-link to="/qrcode/wine/Introduce01">988</router-link>
      </div>
      <div>
        <router-link to="/qrcode/wine/Introduce02">3988</router-link>
      </div>
      <div>
        <router-link to="/qrcode/wine/Introduce03">88</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
const env = import.meta.env.DEV
</script>

<style scoped>
.btn {
  display: flex;
  justify-content: space-between;
}
</style>