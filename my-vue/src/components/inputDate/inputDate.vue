<template>
<!-- 封装的时间选择插件需要以下参数 
        type : '', 日历的类型
        placeholder : { //input的默认显示
            type : String,
            default : '请选择时间'
        },
        id : { //input的id这是必须传的且必须是唯一的
            type : String,
            required : true
        },
        format : { //这个是返回的时间格式
            type : String,
            default : 'yyyy-MM-dd',
        },
        h : '', //input的框的高度 默认是40
        w : '', //input的宽度 默认是 190
        m : '', //input的margin 支持组合的写法
        callback //当选择完成后的回调函数  会将返回的结果放置到参数中 

 -->
  <div :style="style" class="inputDate-box">
    <input type="text" :placeholder="placeholder" :id="id" v-model="model">
    <i></i>
  </div>
</template>

<script>

  export default {
    name:'',
    props:{
        value : {},
        type : '',
        placeholder : {
            type : String,
            default : '请选择时间'
        },
        id : {
            type : String,
            required : true
        },
        format : {
            type : String,
            default : 'yyyy-MM-dd',
        },
        h : '',
        w : '',
        m : '',
    },
    data () {
      return {
        style : {}
      };
    },

    components: {},

    computed: {
        model:{
            get(){
                return this.value;
            },
        }
    },

    beforeMount() {},
    created(){
      this.style.width = this.w ? this.w : '190px';   
      this.style.height = this.h ? this.h : '40px';
      this.style.margin = this.m ? this.m : '0';
    },
    mounted() {
      laydate.render({
        elem: '#'+this.id,
        type: this.type,
        theme: '#f90',
        format : this.format,
        done: value => {
            this.$emit('input',value);
            this.$emit('callback',value);
        }
      });
    },

    methods: {},

    watch: {}

  }

</script>
<style lang='less' scoped>
.inputDate-box{
    position: relative;
    display: inline-block;
    vertical-align: middle;
    padding: 0 36px 0 12px;
    box-sizing: border-box;
    width: 190px;
    height: 40px;
    cursor: pointer;
    input{
        position: absolute;
        top: 0;
        left: 0;
        padding: 0 36px 0 12px;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        margin: 0;
        border: 1px solid #ebebeb;
        outline: none;
        z-index: 1;
        background: transparent;
    } 
    input:focus{
     border-color: #f90;
    }
    i{
        position: absolute;
        top: 50%;
        right: 12px;
        margin-top: -6px;
        width: 13px;
        height: 12px;
        background: url(../../assets/icon.png) -104px -63px no-repeat;
    }
}
</style>