<template>
  <div>
    我是一个详情页

  </div>
</template>

<script>

  export default {
    name:'',
    props:[''],
    data () {
      return {

      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {
        console.log(this.$route.query);
    },

    methods: {},

    watch: {}

  }

</script>
<style lang='less' scoped>

</style>