<template>
  <el-row class="main">
    <el-scrollbar>
      <TenYears>
        <template #price>
          <span style="font-weight: bold;"> 零售价：</span>¥88
        </template>
      </TenYears>
    </el-scrollbar>
  </el-row>
</template>

<script setup lang="ts">
import TenYears from '@/components/TenYears.vue'
</script>

<style scoped>
.main {
  margin: 20px;
  display: flex;
  justify-content: center;
}
</style>