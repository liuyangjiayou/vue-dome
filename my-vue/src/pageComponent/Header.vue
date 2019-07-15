<template>
  <div class="header-box">
      <div class="header-min">
        <div class="logo">HR</div>
        <div>
            <router-link to="/home">员工</router-link>
            <router-link to="/record">档案</router-link>
            <router-link to="/attendance">考勤</router-link>
            <router-link to="/integral">积分</router-link>
            <router-link to="/test">测试</router-link>
            <router-link to="/invite">招聘</router-link>
            <router-link to="/thing">事物</router-link>
            <router-link to="/phone">副号</router-link>
        </div>
      </div>
  </div>
</template>

<script>

  export default {
    name:'',
    props:[''],
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
.header-box{
    width: 100%;
    background: @black;
    .height(52px);
    .header-min{
        min-width: 1200px;
        .marginAuto(1200px,0);
    }
    .logo{
        float: left;
        .mg(0 20px 0 0);
        .ft(26px);
        .fw(900);
        color: @white;
    }
    a{
        float: left;
        min-width: 80px;
        cursor: pointer;
        color: @ccc;
        text-align: @cter;
        &:hover{
            background: @yellow;
            color: @white;
        }
    }
    .router-link-active{
        background: @yellow;
        color: @white;
    }
}

</style>