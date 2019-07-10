<template>
   <label :class="[{'btn' : check}]" @change="change">
        <span><slot></slot></span>
        <input :name="name" v-model="model" type="checkbox" :value="label"> 
    </label>
</template>

<script>

  export default {
    name:'',
    props:{
        value : {},
        label : {},
        name : {},
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
            this.$emit('callback',event);
        }
    },

    watch: {}

  }

</script>
<style lang='less' scoped>
    label{
            display: inline-block;
            vertical-align: middle;
            margin: 0 10px;
            line-height: 48px;
            cursor: pointer;
            font-size: 14px;
        }
        label:hover{
            color: #f90;
            text-decoration: underline;
        }
    input{
        opacity: 0;
    }
</style>