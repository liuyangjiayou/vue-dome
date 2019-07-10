<template>
  <div class="dib">
    <input :style="style" v-model="model" type="text" :placeholder="placeholder">
  </div>
</template>

<script>

  export default {
    name:'zf-input',
    props:{
        placeholder : {},
        value : '',
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
    created(){
        this.style.width = this.w ? this.w : '300px';   
        this.style.height = this.h ? this.h : '40px';
        this.style.margin = this.m ? this.m : '0';
    },
    mounted() {

    },
    methods: {},

    watch: {}

  }

</script>
<style lang='less' scoped>
input{
    box-sizing: border-box;
    padding: 0 14px;
    outline: none;
    border: 1px solid #e6e6e6;
    border-radius: 2px;
}
input:focus{
     border-color: #f90;
}
</style>