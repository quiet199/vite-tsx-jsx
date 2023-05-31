<script setup lang="tsx">

const JsxComp = (<>
  <div class="flex-center mt-20px" onClick={()=>{click()}}>
    <span>Render By Jsx</span>
  </div>
</>
)

const TsxComp = (<div>
    123
</div>)

const click = ():void =>{
    alert('123')
}
</script>

<template>
  <JsxComp/>
  <TsxComp/>
</template>