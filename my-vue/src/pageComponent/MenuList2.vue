<template>
  <ul class="l_tree">
      <li class="l_tree_branch" v-for="item in list" :key="item.id">
          <div class="l_tree_click">
              <button type="button" class="l_tree_children_btn" v-if="item.children"  @click="toggle(item)">{{ !item.show ? '-' : '+' }}</button>
              <span class="l_folder">{{ item.name }}</span>
          </div>
          <ew-tree v-show="!item.show" v-if="item.children" :list="item.children"></ew-tree>
      </li>
  </ul>
</template>

<script>
    
  export default {
    name:'ew-tree',
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

    methods: {},

    watch: {}

  }

</script>
<style lang='less' scoped>
*{
	box-sizing: border-box;
	margin: 0;padding: 0;
}
*:before,*:after{
	box-sizing: border-box;
}
ul,
li {
	list-style: none;
}

.l_tree_container {
	width: 100%;
	height: 100%;
	box-shadow: 0 0 3px #ccc;
	margin: 13px;
	position: relative;
}

.l_tree {
	width: calc(100% - 44px);
	height: 100%;
	padding-left: 42px;
}
.l_tree_branch {
	width: 100%;
	height: 100%;
	display: block;
	padding: 13px;
	position: relative;
}

.l_tree_branch .l_tree_children_btn {
	width: 19px;
	height: 19px;
	background-color: #23b1f0;
	font-size: 14px;
	text-align: center;
	color: #ffffff;
	outline: none;
	border: 0;
	cursor: pointer;
}

ul.l_tree:before {
	content: '';
	border-left: 1px dashed #999999;
	height: calc(100%);
	position: absolute;
	left: 10px;
	top: 0px;
}

.l_tree .l_tree_branch:last-child::before {
	content: '';
	width: 3px;
	height: calc(100% - 24px);
	display: block;
	background-color: #ffffff;
	position: absolute;
	bottom: 0;
	left: -34px;
}

.l_tree,
.l_tree_branch {
	position: relative;
}

.l_tree_branch::after {
	content: '';
	width: 40px;
	height: 0;
	border-bottom: 1px dashed #000;
	position: absolute;
	right: calc(100% - 9px);
	top: 22px;
}

.l_tree_container>.l_tree::before,
.l_tree_container>.l_tree>.l_tree_branch::after {
	display: none;
}
</style>