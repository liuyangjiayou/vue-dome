<template>
<!-- 
    封装的select插件
    此插件 v-model=""是绑定的数据
    :values=""是循环的options数据 
    placeholder是默认的显示内容 
    callback是回调函数会将点击当前的元素返回来
    -->
  <div class="select-box" @click="toggle">
    <div :class="[
        'select-title',
        {'fouse' : isShow},
        {'active' : defText}
    ]">
        {{text}}
        <i></i>
    </div>
    <ul v-show="isShow" ref="sel">
        <li v-for="(item,index) in values" :val="item.id" :key="index" :class="[
            'ell',
            {'active' : value== item.id}
        ]">
            {{item.title}}
        </li>
    </ul>
  </div>
</template>

<script>
import {closeSelect} from '../../minxin/entter'
  export default {
    name:'',
    props:{
        values : {
            type : Array,
            default(){
                return []
            }
        },
        placeholder : {},
        value : {
            
        },
    },
    // mixins : [closeSelect],
    data () {
      return {
        isShow : false,
        defText : false,
      };
    },
    components: {
        
    },
    created(){
       
    },
    computed: {
        text : {
            get(){
                var obj = this.values.find(item=>item.id == this.value);
                this.defText = obj;
                return obj ? obj.title : this.placeholder;
            }
        }
    },

    beforeMount() {},

    mounted() {

    },
    methods: {
        // changeFn(val){
        //     this.optionTitle = val.title;
        //     this.optionID = val.id;
        //     this.isShow = false;
        // },
        setVal(item){
            this.$emit('input',item);
        },
        showSel(){
            this.isShow = true;
            document.addEventListener('click',this.hideSel,true);
        },
        hideSel(e){
            this.isShow = false;
            if(this.$refs.sel && this.$refs.sel.contains(e.target)){
                e.stopPropagation();
                // this.value.title = e.target.innerText;
                this.setVal(e.target.getAttribute('val'));
                this.$emit('callback',e.target);
            }
            document.removeEventListener('click',this.hideSel,true);
            
        },
        toggle(){
            this.isShow ? this.hideSel() : this.showSel();
        }
       
    },
    watch: {}

  }

</script>
<style lang='less' scoped>
.select-box{
    position: relative;
    display: inline-block;
    vertical-align: middle;
    height: 34px;
    line-height: 34px;
    .select-title{
        position: relative;
        padding: 0 30px 0 15px;
        height: 100%;
        border: 1px solid #e0e0e0;
        cursor: pointer;
        color: #a1a2a4;
        i{
            position: absolute;
            top: 50%;
            right: 10px;
            margin-top: -2.5px;
            width: 10px;
            height: 5px;
            background: url('../../assets/icon.png') -42px -32px no-repeat;
        }
        
    }
    .select-title.fouse{
        border-color : #f90;
        i{
            background: url('../../assets/icon.png') -29px -32px no-repeat;
        }
    }
    .select-title.active{
        color: #000;
    }
    ul,li{
        padding: 0;
        list-style: none;
    }
    ul{
        position: absolute;
        top: 36px;
        left: 0;
        width: 100%;
        box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
        z-index: 2;
    }
    li{
        padding: 0 10px;
        line-height: 34px;
        cursor: pointer;
        background: #fff;
    }
    li.active{
        background: #f5f7fa;
        color: #f90;
    }
    li:hover{
       background: #f5f7fa;
       color: #f90;
    }
}

</style>