<template>

  <ul class="menu-list">
	  <li class="menu-item" v-for="(item,index) in list" :key="index">
		<div :class="[
			'text-title',
			{'active' : !item.children}
		]" @click="toggle(item)"><i class='icon'></i><span>{{ item.name }}</span></div>
		<zf-menu v-show="item.show" @callback="callback" v-if="item.children" :list="item.children"></zf-menu>
	  </li>
  </ul>
</template>

<script>
  export default {
    name:'zf-menu',
    props:{
        list : {},
    },
    data () {
      return {

      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
        toggle: function (item) {
            var idx = this.list.indexOf(item);
            this.$set(this.list[idx], 'show', !item.show);
            this.callback(item);
        },
        callback(item){
             this.$emit('callback',item);
        }
    },

    watch: {}

  }

</script>
<style lang='less' scoped>
 @import url(../../assets/css/common.less);
.menu-list{
	position: relative;
	margin-left: 17px;
	line-height: 40px;
}
.menu-list:before{
	content: '';
	border-left: 1px solid #ebebeb;
	height: calc(100% - 28px);
	position: absolute;
	left: 6px;
	top: 0px;
}
.menu-item{
	div{
		position: relative;
	}
	div:before{
		content: '';
		border-top: 1px solid #ebebeb;
		position: absolute;
		width: 8px;
		left: 14px;
		top: 20px;
		z-index: 0;
	}
	
	.icon{
		margin-right: 15px;
		display: inline-block;
		vertical-align: middle;
		width: 12px;
		height: 12px;
		background: url('../../assets/icon.png') -244px -4px no-repeat;
		cursor: pointer;
	}
	.icon.active{
		background: url('../../assets/icon.png') -262px -4px no-repeat;
	}
}
.menu-item:last-child{
	position: relative;
}
.menu-item:last-child::before{
	content: '';
	border-left: 1px solid #fff;
	position: absolute;
	height: ceil(100%);
	left: 6px;
	top: 20px;
	z-index: 0;
}
.text-title{
	cursor: pointer;
}
.text-title:hover{
	color: #f90;
}
.text-title.active .icon{opacity: 0;}
.text-title.active div:before{width: 8px;}
</style>