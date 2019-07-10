<template>
    <div :class="[
      'zf-msg-box',
      'zf-msg-box' + type
    ]">
      <i class="icon"></i>
      <p v-html="msg"></p>
    </div>
</template>

<script>

  export default {
    name:'',
    props:[''],
    data () {
      return {
        type : 1,
        msg : 'msg传参错误，或msg为空！'
      };
    },
    components: {},

    computed: {},
    beforeMount() {},
    mounted() {},
    methods: {},
    watch: {}
  }

</script>
<style lang='less' scoped>
.zf-msg-box{
    min-width: 380px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    border-width: 1px;
    border-style: solid;
    border-color: #EBEEF5;
    background-color: #fff;
    position: fixed;
    left: 50%;
    top: 20px;
    transform: translateX(-50%);
    animation : anim .2s;
    padding: 15px 15px 15px 20px;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 14px;
    box-shadow: 0 0 8px #ebebeb;
}
@keyframes anim {
  0%{
    top: -100px,
  }
  100%{
    top: 20px;
  }
}
.icon{
  display: inline-block;
  margin-right: 10px;
  width: 14px;
  height: 14px;
}
.zf-msg-box1 .icon{
  background: url('../../assets/moon_icon.png') 0 -18px no-repeat;
}
.zf-msg-box2 .icon{
  background: url('../../assets/moon_icon.png') -17px -18px no-repeat;
}
.zf-msg-box3 .icon{
  background: url('../../assets/moon_icon.png') -34px -18px no-repeat;
}
.zf-msg-box4 .icon{
  background: url('../../assets/moon_icon.png') -52px -18px no-repeat;
}
</style>