<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import router from './router';
router.push({ name: "Introduce" })
</script>

<style scoped></style>