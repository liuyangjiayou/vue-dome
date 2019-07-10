<template>
<!-- 
    封装的按钮
    type 为按钮的类型不传为默认值 success为成功按钮
 -->
    <button :style="style" type="button" :class="[
        'zf-button',
        'dib',
        'zf-button-'+state,
    ]">
        <slot></slot>
    </button>
</template>

<script>
import { Stream } from 'stream';

  export default {
    name:'zf-button',
    props:{
        state : {
            type : String,
            default : 'default'   
        },
        w : '',
        h : '',
        m : '',
        f : '',
        brd : '',
    },
    data () {
      return {
          style : {},
      };
    },

    components: {},

    computed: {},

    beforeMount() {},
    created() {
        this.style.width = this.w ? this.w : '';   
        this.style.height = this.h ? this.h : '';
        this.style.margin = this.m ? this.m : '';
        this.style['font-size'] = this.f ? this.f : '';
        this.style['border-radius'] = this.brd ? this.brd : '';
    },
    mounted() {},

    methods: {},

    watch: {}

  }

</script>
<style lang='less' scoped>
    .zf-button{
        margin: 0 8px;
        box-sizing: border-box;
        padding: 6px 24px;
        border: 1px solid #e6e6e6;
        font-size: 14px;
        cursor: pointer;
        outline: none;
    }
    .zf-button:hover{
        opacity: .9;
    }
    .zf-button-default{
        background: #fff;
        border: 1px solid #e6e6e6;
    }
    .zf-button-success{
        background: #f90;
        border: 1px solid #f90;
        color: #fff;
    }
</style>