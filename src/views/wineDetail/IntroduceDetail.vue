<template>
  <el-row class="main">
    <el-scrollbar>
      <TwentyYears>
        <template #price>
          <span style="font-weight: bold;"> 零售价：</span>¥1988
        </template>
      </TwentyYears>
    </el-scrollbar>
  </el-row>
</template>

<script setup lang="ts">
import TwentyYears from '@/components/TwentyYears.vue'
</script>

<style scoped>
.main {
  margin: 20px;
  display: flex;
  justify-content: center;
}
</style>