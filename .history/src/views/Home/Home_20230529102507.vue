<script setup lang="ts">
import { Hello } from '@/components/Hello'

let mmsg: string = "Hello"

const click = (): void =>{
    alert(mmsg)
}

</script>

<template>
    <div class="m-color">
        <p>1231</p>
    </div>
    <Hello :msg = "mmsg" @click="click"/>
</template>

<style lang="less" scoped>
    .m-color{
        width: 100px;
        p{
            color:red;
        }
    }
</style>
