<script setup lang="tsx">
const JsxComp = (<>
  <div class="flex-center mt-20px" onClick={()=>{click()}}>
    <span>Render By Jsx</span>
  </div>
</>
)

const click = ():void =>{
    alert('123')
}
</script>

<template>
  <JsxComp/>
  <div @click="click">1243</div>
</template>