<template>
    <!--  
        这个是封装的vue的复选框  v-model="model"代表着需要绑定的数据 可以是数组也可以是Boolean值 规则和原生的vue绑定checkbox的方式是一样的，
        name是input的name值 label是input的value值 slot是该组件的插槽是可以写文本的 callback是回调函数，input发生改变的时候会执行callback
     -->
  <div>
    <label :class="[
    {'check' : check}
    ]">
        <i></i>
        <span><slot></slot></span>
        <input @change="change" v-model="model" type="checkbox" :name="name" :value="label">   
    </label>
  </div>
</template>

<script>
import { get } from 'http';

  export default {
    name:'',
    props:{
        name : {},
        label : {},
        value : {}
    },
    data () {
      return {
          
      };
    },

    components: {},

    computed: {
        model:{
            get(){
                return this.value;
            },
            set(val){
                this.$emit('input',val);
            }
        },
        check : {
            get(){
                return this.value.indexOf(this.label) > -1;
            }
        }
    },

    beforeMount() {},

    mounted() {},

    methods: {
        change(event){
            this.$emit('callback',event.target);
        }
    },
    watch: {}
  }

</script>
<style lang='less' scoped>
    label{
        display: inline-block;
        vertical-align: middle;
        cursor: pointer;
        line-height: 28px;
        i{
            margin-right: 10px;
            display: inline-block;
            vertical-align: middle;
            width: 14px;
            height: 14px;
            background: url('../assets/icon.png') -181px -23px no-repeat;
        }
        span{
            display: inline-block;
            vertical-align: middle;
        }
        input{
            width: 0;
            height: 0;
            opacity: 0;
        }
    }
    label.check{
        i{
            background: url('../assets/icon.png') -200px -23px no-repeat; 
        }
    }
</style>