<script setup lang="ts">
import { Hello } from '@/components/Hello.vue'
</script>

<template>
    <div class="m-color">
        <p>123</p>
    </div>
    <Hello/>
</template>

<style lang="less" scoped>
    .m-color{
        width: 100px;
        p{
            color:red;
        }
    }
</style>
