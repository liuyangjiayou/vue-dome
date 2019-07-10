<template>
    <ul v-show="isShow">
        <li v-for="(item,index) in optionList" :key="index" @click="change(item)" :class="[
            {'hover' : optionID == item.id}
        ]">
            {{item.title}}
        </li>
    </ul>
</template>
<script>

  export default {
    name:'',
    props:{
        optionList : {
            type : Array,
        },
        isShow : {
            type : Boolean,
        },
        optionID : {},
        value : {},
        isShow : {
            type :Boolean,
        }
    },
    data () {
      return {

      };
    },

    components: {},

    computed: {
    },

    beforeMount() {},
    create(){

    },
    mounted() {},

    methods: {
        change(val){
            this.$emit('change',val);
        }
    },

    watch: {}

  }

</script>
<style lang='less' scoped>
    ul,li{
        padding: 0;
        list-style: none;
    }
    ul{
        width: 100%;
        height: 100%;
    }
    li{
        padding: 0 10px;
        line-height: 30px;
        cursor: pointer;
    }
    li.hover{
        background: #f5f7fa;
    } 
    li:hover{
       background: #f5f7fa;
    }
</style>