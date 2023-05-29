<script lang="tsx">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'Hello',
  props:{
    msg:{
      type: String as PropType<string>,
      default: () => ''
    }
  },
  emits: ['click'],
  setup(props, { emit }){

    const click = (): void=>{
      emit('click')
    }

    return () => (
      <div onClick={()=>{click()}}>{props.msg}</div>
    )
  }
})
</script>

<style lang="less" scoped>

</style>
