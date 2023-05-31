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
        <div class="m-botton" onClick={()=>{click()}}>
          <span>{props.msg}</span>
        </div>
    )
  }
})
</script>

<style lang="less" scoped>
  .m-botton{
    display: inline-block;
    line-height: 1;
    white-space: nowrap;
    cursor: pointer;
    background: #fff;
    border: 1px solid #dcdfe6;
    -webkit-appearance: none;
    text-align: center;
    box-sizing: border-box;
    outline: none;
    margin: 0;
    transition: .1s;
    font-weight: 500;
    -moz-user-select: none;
    -webkit-user-select: none;
    padding: 7px 15px;
    border-radius: 3px;
    span{
      font-size: 12px;
      color: #606266;
    }
  }
</style>
