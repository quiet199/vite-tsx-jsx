<script lang="tsx">
import { defineComponent } from 'vue'

export default defineComponent({
    name:'Transition',
    setup(){
        let tempNum: number = 0

        const fib = (n: number): number => n <= 1 ? n : fib(n - 1) + fib(n - 2)

        tempNum = fib(10)
        
        return ()=>(<div>{tempNum}</div>)
    }
})
</script>
<style lang="less" scoped>

</style>