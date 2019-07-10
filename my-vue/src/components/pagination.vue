<template>
<!-- 
    封装的vue分页组件 
    需要在父级传两个值 
    v-model="cur"这个是当前页(cur)可以是一个变量 
    all代表着总页数 
    callback代表着回调函数会将当前的页数通过参数返回去 
    -->
    <div class="page-bar">
        <ul>
            <li><a :class="setButtonClass(0)" @click="prvePage(model)">上一页</a></li>
            <li v-for="(index,key) in indexs" :key="key"  :class="{ active: model == index }">
                <a v-if="index < 1" @click="btnClick(index)">...</a>
                <a v-if="index >= 1" @click="btnClick(index)">{{index}}</a>
            </li>
            <li><a :class="setButtonClass(1)" @click="nextPage(model)">下一页</a></li>
        </ul>
    </div>
</template>

<script>
import { log } from 'util';

  export default {
    name:'',
    props: {
        value : {},
        all : {},   
    },
    data () {
      return {

      };
    },

    components: {},

    computed: {
        indexs: function () {
            var left = 1
            var right = this.all
            var ar = []
            if (this.all >= 11) {
                if (this.model > 5 && this.model < this.all - 4) {
                    left = this.model - 5
                    right = this.model + 4
                } else {
                    if (this.model <= 5) {
                        left = 1
                        right = 10
                    } else {
                        right = this.all
                        left = this.all - 9
                    }
                }
            }
            while (left <= right) {
                ar.push(left)
                left++
            }
          
            if (ar[0] > 1) {
                ar[0] = 1;
                ar[1] = -1;
            }
            if (ar[ar.length - 1] < this.all) {
                ar[ar.length - 1] = this.all;
                ar[ar.length - 2] = 0;
            }
            return ar
        },
        model : {
            get(){
                return this.value;
            },
            set(val){
                this.$emit('callback', val);
            }
        }
    },
    watch: {

    },
    beforeMount() {},

    mounted() {},

    methods: {
            // 页码点击事件
        btnClick: function (data) {
            if (data < 1) return;
            if (data != this.model) {
                this.model = data
            }
        },
        // 下一页
        nextPage: function (data) {
            if (this.model >= this.all) return;
            this.btnClick(this.model + 1);
        },
        // 上一页
        prvePage: function (data) {
            if (this.model <= 1) return;
            this.btnClick(this.model - 1);
        },
        // 设置按钮禁用样式
        setButtonClass: function (isNextButton) {
            if (isNextButton) {
                return this.model >= this.all ? "page-button-disabled" : ""
            }
            else {
                return this.model <= 1 ? "page-button-disabled" : ""
            }
        }
    }
  }

</script>
<style lang='less' scoped>
ul, li {
    margin: 0px;
    padding: 0px;
}

.page-bar {
    display: inline-block;
    text-align: center;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}


.page-bar li {
    list-style: none;
    display: inline-block;
}

.page-bar li:first-child > a {
    margin-left: 0px;
}

.page-bar a {
    margin: 0 3px;
    text-decoration: none;
    position: relative;
    float: left;
    padding: 6px 12px;
    min-width: 30px;
    box-sizing: border-box;
    color: #555555;
    background: #f5f5f5;
    cursor: pointer;
}

.page-bar a:hover {
    background-color: #394043;
    color: #fff;
}

.page-bar .active a {
    color: #fff;
    cursor: default;
    background-color: #394043;
}

.page-bar i {
    font-style: normal;
    color: #d44950;
    margin: 0px 4px;
    font-size: 12px;
}
.page-bar .page-button-disabled {
    color:#ddd;
}
.page-bar .page-button-disabled:hover {
    color:#ddd;
    background: #f5f5f5;
    cursor: not-allowed;
}
</style>