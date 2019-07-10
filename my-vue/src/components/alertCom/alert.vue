<template>
<!-- 封装的alert弹窗
    参数title弹窗的 title
        msg 弹窗的内容
        closeFn 关弹窗的回调函数
        sucFn 点击确定按钮后的回调函数
        这面这个两个回调函数会将当前的组件VUE实例返还回去
        subBtn : 确定按钮的文字内容,
        closeBtn : 取消按钮的文字内容,
-->
    <div v-if="isshow" class="zf-alert-box">
        <div class="zf-alert-bg"></div>
        <div class="zf-alert-container-box">
            <div class="zf-alert-title-box" v-html="title"></div>
            <div class="zf-alert-content-box" v-html="msg"></div>
            <div class="zf-alert-btn-box">
                <zf-button @click.native="closeFn">{{closeBtn}}</zf-button>
                <zf-button @click.native="sucFn" state="success">{{subBtn}}</zf-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'toast',
        data () {
            return {
                isshow: true, //控制弹窗的显隐
                msg : '我是默认的内容',
                title : '信息', //这个是默认的信息
                closeBtn : '取消',
                subBtn : '确定',
            }
        },
        mounted () {
        },
        methods: {
            closeFn(){
                this.$emit('closeFn')
            },
            sucFn(){
                this.$emit('sucFn')
            }
        },
        watch: {

        }
    }
</script>

<style scoped>
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
    width: 400px;
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