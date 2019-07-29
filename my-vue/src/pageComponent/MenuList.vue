<template>
  <div class="menu-box-list">
      <ul>
        <li v-for="(item,index) in menuList" :key="index">
            <router-link :to="{path : '/home',query : {id : item.id}}" tag="div"> 
                <span class="icon icon1">
                </span><span class="text">{{item.title}}</span>
            </router-link>
            <slot></slot>
        </li>
      </ul>
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