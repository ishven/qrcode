<template>
    <el-row>
        <el-col>
            <el-card :body-style="{ padding: '0px' }">
                <img src="@/assets/鹿鞭酒1988.jpg" class="image" />
                <div style="padding: 14px">
                    <span>鹿鞭酒</span>
                    <div class="bottom">
                        <span class="time">零售价：¥1988</span>
                        <el-button text class="button" @click="showDetail">查看详情</el-button>
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
const router = useRouter()
function showDetail() {
    router.push({ name: "IntroduceDetail" });
}
</script>

<style scoped>
.time {
    font-size: 12px;
    color: #999;
}

.bottom {
    margin-top: 13px;
    line-height: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.button {
    padding: 0;
    min-height: auto;
}

.image {
    width: 100%;
    height: 450px;
    display: block;
}
</style>