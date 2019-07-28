<template>
   <div class="record-info">
       <p class="title">奖惩记录</p>
        <div class="list-box">
            <ul>
                <li>
                    <p>07-08&nbsp;10:14&emsp;办公室张玉娟</p>
                    <p>这里是奖励原因，这里是奖励原因，这里是奖励原因。</p>
                </li>
                <li>
                    <p>07-08&nbsp;10:14&emsp;办公室张玉娟</p>
                    <p>这里是奖励原因，这里是奖励原因，这里是奖励原因。</p>
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
    margin-top: 12px;
    padding-top: 6px;
    background: @white;
    .title{
        line-height: 40px;
        padding: 0 20px;
    }
    ul{
        padding: 0 20px;
        width: 277px;
        line-height: 26px;
        font-size: 14px;
        height: 388px;
        max-height: 388px;
        overflow: auto;
    }
}
</style>