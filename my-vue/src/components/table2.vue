<template>
  <div class="list-box">
        <slot v-for="item in list" name="table2" :todo='item'></slot>
  </div>
</template>

<script>

  export default {
    name:'table2',
    props:{
        list : {
            type : Array,
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
@import url(../assets/css/common.less);
    .list-box{
        width: 100%;
        height: 100%;
         .ft(0);
        ul li{
            .pd(5px 0 3px 0);
            display: inline-block;
            vertical-align: bottom;
            width: 24%;
            .ft(14px);
            border-bottom: 1px solid @ceb;
            .c9{
                color: @c999;
            }
            .name{
                .ft(16px);
                .fw(900);
                color: @cblack;
            }
            p{
                .mg(10px 0);
            }
            .btn{

                color: @yellow;
            }
        }
        ul li:last-child{
            text-align: right;
            width: 28%;
        }
    }
</style>