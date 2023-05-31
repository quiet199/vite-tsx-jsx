<script setup lang="tsx">
const JsxComp = (<>
  <div class="flex-center mt-20px">
    <span>Render By Jsx</span>
  </div>
</>
)

const click = ():void =>{
    alert('123')
}
</script>

<template>
  <JsxComp @click="click"/>
</template>