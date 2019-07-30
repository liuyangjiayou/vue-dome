<template>
<div class="l_tree_container">
    <zf-menu :list="testdata" @callback="aaa"></zf-menu>
</div>
</template>

<script>
  export default {
    name:'',
    props:{
        menuList : Array,
        isShow : {
          default : 1,
        },
    },
    data () {
      return {
        active : true,
        testdata: [
                    {
                      name: "一级菜单",
                      children: [
                          {
                              name: '二级菜单',
                              children: [
                                  {
                                      name: '三级菜单'
                                  },
                                  {
                                      name: '三级菜单'
                                  }
                              ]
                          },
                          {
                              name: '二级菜单',
                              children: [
                                  {
                                      name: '三级菜单',
                                      children: [
                                          {
                                              name: '四级菜单'
                                          },
                                          {
                                              name: '四级菜单'
                                          },
                                          {
                                              name: '四级菜单'
                                          }
                                      ]
                                  },
                                  {
                                      name: '三级菜单',
                                      children: [
                                          {
                                              name: '四级菜单',
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              name: '二级菜单',
                              children: [
                                  {
                                      name: '三级菜单'
                                  },
                                  {
                                      name: '三级菜单'
                                  }
                              ]
                          }
                      ]
                  },
                  {
                      name: "一级菜单",
                      children: [
                          {
                              name: '二级菜单',
                              children: [
                                  {
                                      name: '三级菜单'
                                  },
                                  {
                                      name: '三级菜单'
                                  }
                              ]
                          },
                          {
                              name: '二级菜单',
                              children: [
                                  {
                                      name: '三级菜单',
                                      children: [
                                          {
                                              name: '四级菜单'
                                          },
                                          {
                                              name: '四级菜单'
                                          },
                                          {
                                              name: '四级菜单'
                                          }
                                      ]
                                  },
                                  {
                                      name: '三级菜单',
                                      children: [
                                          {
                                              name: '四级菜单',
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              name: '二级菜单',
                              children: [
                                  {
                                      name: '三级菜单'
                                  },
                                  {
                                      name: '三级菜单'
                                  }
                              ]
                          }
                      ]
                  }
              ]
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
      aaa(item){
        console.log(item);
      }
    },

    watch: {}

  }

</script>
<style lang='less' scoped>
 @import url(../assets/css/common.less);
    ul{
        .ft(14px);
        color: @c666;
        line-height: 42px;
        li{
            .pd(0 0 0 28px);
            cursor: pointer;
            .text:hover{
               color: @yellow;
            }
        }
    }
    .icon{
        .mg(0 14px 0 0);
        display: inline-block;
        width: 12px;
        height: 12px;
    }
    .icon1{
         background: url(../assets/icon.png)  -244px -4px no-repeat; 
    }
    .icon2{
         background: url(../assets/icon.png)  -262px -4px no-repeat; 
    }

</style>