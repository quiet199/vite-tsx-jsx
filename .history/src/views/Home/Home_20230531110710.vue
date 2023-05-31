<script setup lang="ts">
import { Hello } from '@/components/Hello'
import { Fibonacci } from "@/components/Fibonacci"
import { Transitions } from "@/components/Transition"

let mmsg: string = "Hello"

const click = (): void =>{
    alert(mmsg)
}

</script>

<template>
    <div class="m-color">
        <p>123</p>
    </div>
    <Hello :msg = "mmsg" @click="click"/>
    <Fibonacci/>
    <Transitions/>
</template>

<style lang="less" scoped>
    .m-color{
        width: 100px;
        p{
            color:red;
        }
    }
</style>
