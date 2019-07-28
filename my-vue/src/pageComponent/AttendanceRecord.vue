<template>
<!-- 档案详情 右侧上面的 组件 -->
    <div class="record-info">
        <p class="title">
            <span @click="spanClass=!spanClass" :class="{'active' : spanClass}">操作记录</span>
            <span @click="spanClass=!spanClass" :class="{'active' : !spanClass}">调动记录</span>
        </p>
        <div class="list-box">
            <ul>
                <li>
                    <p>07-08&nbsp;10:14&emsp;张玉娟</p>
                    <b>新华一区店</b>调至<b>新华二区店</b>
                </li>
                <li>
                    <p>07-08&nbsp;10:14&emsp;张玉娟</p>
                    <b>新华一区店</b>调至<b>新华二区店</b>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>

  export default {
    name:'',
    props:[''],
    data () {
      return {
          spanClass : true,
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
.record-info{
    position: relative;
    padding-top: 36px;
    .title{
        position: absolute;
        top: 0;
        left: -1px;
        span{
            display: inline-block;
            vertical-align: middle;
            margin-right: 16px;
            padding: 0 26px;
            line-height: 34px;
            cursor: pointer;
            border: 1px solid @ceb;
            background: #f7f7f7;
        }
        span.active{
            background: @white;
            border-bottom-color: #fff;
        }
    }
    .list-box{
        padding: 22px 0;
        background: @white;
    }
    ul{
        padding: 0 20px;
        width: 277px;
        line-height: 26px;
        font-size: 14px;
        height: 636px;
        max-height: 636px;
        overflow: auto;
    }
}
</style>