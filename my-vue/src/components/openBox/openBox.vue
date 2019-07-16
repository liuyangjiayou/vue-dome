<template>
    <div v-if="isshow" class="zf-alert-box">
        <div class="zf-alert-bg"></div>
        <div class="zf-alert-container-box">
            <div class="zf-alert-title-box" v-html="title"></div>
            <div class="zf-alert-content-box">
                <slot></slot>
            </div>
            <div v-if="isBtn" class="zf-alert-btn-box">
                <zf-button @click.native="closeFn">{{closeBtn}}</zf-button>
                <zf-button @click.native="sucFn" state="success">{{subBtn}}</zf-button>
            </div>
        </div>
    </div>
</template>

<script>

  export default {
    name:'openBox',
    props:{
        isshow : {
            type : Boolean,//控制弹窗的显隐
            default : false,
        },
        isBtn : {
            type : Boolean,//控制弹窗的显隐
            default : true,
        },
        title : {
            default : "信息",
        },
        closeBtn : {
            type : String,
            default : "取消",
        },
        subBtn : {
            type : String,
            default : "确定",
        },
    },
    data () {
      return {
          
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
        closeFn(){
            this.$emit('update:isshow',!this.isshow)
        },
        sucFn(){
            this.$emit('sucFn')
        }
    },

    watch: {}

  }

</script>
<style lang='less' scoped>
.zf-alert-box{
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    text-align: center;
    display: inline-block;
}
.zf-alert-box:after{
    content: "";
    display: inline-block;
    height: 100%;
    vertical-align: middle;
    width: 0;
}
.zf-alert-bg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.6);
    z-index: -1;
}
.zf-alert-title-box{
    padding: 15px 15px 10px;
    border-bottom: 1px solid #ebebeb;
    font-size: 16px;
}
.zf-alert-container-box{
    display: inline-block;
    vertical-align: middle;
    padding-bottom: 10px;
    min-width: 400px;
    background: #fff;
    text-align: left;
}
.zf-alert-content-box{
    padding: 10px 15px;
    font-size: 14px;
}
.zf-alert-btn-box{
    /* border-top: 1px solid #ebebeb; */
    padding: 5px 15px 0;
    text-align: right;
}
</style>