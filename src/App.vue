<template>
  <div id="app">
    <div v-show="env">
      <p>
        <router-link to="/qrcode/wine/Introduce">1988</router-link>
      </p>
      <p>
        <router-link to="/qrcode/wine/Introduce01">988</router-link>
      </p>
    </div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
const env = import.meta.env.DEV
</script>

<style scoped></style>