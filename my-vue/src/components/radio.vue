<template>
<!-- 封装的单选的插件 v-model 是绑定的数据， name代表input的name label代表着input的值 callback代表着回调函数，当input的状态发生改变的时候会执行此函数并且将这个input通过参数传出去-->
  <div>
    <label :class="[
    {'check' : model===label}
    ]">
        <i></i>
        <span><slot></slot></span>
        <input @change="change" v-model="model" type="radio" :name="name" :value="label">   
    </label>
  </div>
</template>

<script>
import { log } from 'util';

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
        model : {
            get(){
                return this.value;
            },
            set(val){
                this.$emit('input',val);
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
            background: url('../assets/icon.png') -116px -44px no-repeat;
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
           background: url('../assets/icon.png') -134px -44px no-repeat; 
        }
    }
</style>