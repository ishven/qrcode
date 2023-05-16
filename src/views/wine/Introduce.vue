<template>
  <el-container direction="vertical">
    <el-main class="main">
      <el-scrollbar>
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span style="font-weight: bold;">产品介绍</span>
            </div>
          </template>
          <div class=" text">
            <span style="font-weight: bold;">主要成分：</span>
          </div>
          <div class="text item">鹿茸.鹿鞭.鹿筋.鹿尾.人参等等……</div>
          <div class="text">
            <span style="font-weight: bold;">功效：</span>
          </div>
          <div class="text item">滋阴壮肾阳、益精血，归肾、肝经，温能补肾阳，甘咸能滋养精血，可以用于辅助治疗肾阳不足、精血亏虚引起的阳痿滑精、宫冷不孕、身体虚弱、精神疲乏、畏寒、眩晕、耳鸣耳聋、腰脊冷痛等症。</div>
          <div class="text ">
            <span style="font-weight: bold;"> 用法与用量：</span>每晚10～20ml
          </div>
          <div class="text item">
            <span style="font-weight: bold;"> 零售价：</span>¥1988.00元
          </div>
        </el-card>
      </el-scrollbar>
    </el-main>
  </el-container>
</template>

<script setup lang="ts">

</script>

<style scoped>
.main {
  display: flex;
  justify-content: center;
}

.box-card {
  width: 480px;
}

.card-header {
  display: flex;
  justify-content: center;
  font-size: 20px;
}

.text {
  font-size: 16px;
}

.item {
  margin-bottom: 18px;
}
</style>