<template>
<!-- 
  封装的简单功能的table框
  thlist是表头的数据  
  tdlist是表单的数据 
  todo会将每一条数据在还回去 父级组件模板slot-scope="slotProps"去接收
  这样不用限制用户的自由用户可以自由的发挥 （目前只是自适应没有处理最大最小的宽度）
  -->
  <div>
    <table cellpadding="0" cellspacing="0" >
        <thead>
            <slot v-for="item in thlist" name="th" :todo="item"></slot>
        </thead>
        <tbody>
            <slot v-for="item in tdlist" name="td" :todo="item"></slot>
        </tbody>
    </table>
  </div>
</template>

<script>

  export default {
    name:'table1',
    props:{
        thlist : {
            type : Array
        },
        tdlist : {
            type : Array
        }
    },
    data () {
      return {

      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='less' scoped>
    table{
        box-sizing: border-box;
        border-collapse: collapse;
        width: 100%;
        thead{
            line-height: 48px;
            background: #fafafa;
            border-bottom: 1px solid #ebebeb;
            tr{
              
            }
        }
        tbody{
            text-align: center;
            line-height: 48px;
            tr{
              border-bottom: 1px solid #ebebeb;
            }
        }
    }
    
</style>