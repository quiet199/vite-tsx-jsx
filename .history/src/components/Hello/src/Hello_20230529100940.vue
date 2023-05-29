<script lang="tsx">
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'Hello',
  props:{
    msg:{
      type: String as PropType<string>,
      default: () => ''
    }
  }
})
</script>

<style lang="less" scoped>

</style>
