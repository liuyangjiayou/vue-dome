<template>
  <div class="menu-box">
      <p class="title">组织结构</p>
      <MenuList :menuList="list">
           <MenuList :menuList="list"></MenuList>
      </MenuList>
  </div>
</template>

<script>
    import MenuList from './MenuList';
  export default {
    name:'',
    props:[''],
    data () {
      return {
          list : [
            {
                title : '二手房业务部',
                id : 1,
            },
            {
                title : '技术部',
                id : 2,
            }
          ]
      };
    },

    components: {
        MenuList,
    },

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='less' scoped>
 @import url(../assets/css/common.less);
    .menu-box{
        width: 253px;
        border: 1px solid @ceb;
        height: 754px;
    }
    .title{
        .marginAuto(237px,0);
        .height(46px);
        .ft(16px);
        border-bottom: 1px solid @ceb;
        color: @c666;
    }
</style>