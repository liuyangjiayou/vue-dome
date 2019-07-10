<template>
  <div>
      <div class="wrap">
          <file-upload :drop="true" :multiple="true" @input-filter="inputFilter"  v-model="files" input-id="111" name="aaa">上传文件</file-upload>
      </div>
   <ul>
       <li v-for="(item,key) in viewImg" :key="key">
           <img :src="item" alt="">
       </li>
   </ul>
  </div>
</template>

<script>
import FileUpload from 'vue-upload-component'
//   const VueUploadComponent = require('vue-upload-component')
  export default {
    name:'',
    props:[''],
    data () {
      return {
        files: [], //绑定的数组 可使用v-model绑定
        option : {
            input_id : '',//代表上传按钮input的ID
            name : '', //代表上传按钮input的name值
            post_action : '', //上传文件的API POST请求
            headers : {},  //请求头数据
            data : {}, //请求体数据
            accept : '', //传输文件的类型 accept="image/png,image/gif,image/jpeg,image/webp"
            multiple : false, //多文件上传
            size : '1024 * 1024',//允许上传文件的最大字节
            maximum : '10', //允许文件上传的最大数量
            thread : '1', //同时上传文件的数量默认值是1
            drop : true, //拖拽上传，如果设置成 true 则读取父组件作为容器
        },
        viewImg : [],
      };
    },

    components: {
        FileUpload
    },

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
        inputFilter(newFile, oldFile, prevent) {
            let that = this;
            if (newFile && !oldFile) {
                console.log(newFile);
                console.log(oldFile);
                console.log(prevent);
                // 添加文件

                // 过滤非图片文件
                // 不会添加到 files 去
                if (!/\.(jpeg|jpe|jpg|gif|png|webp)$/i.test(newFile.name)) {
                    return prevent(); //此方法用于截断
                }
                // 创建 `blob` 字段 用于缩略图预览
                newFile.blob = ''
                let URL = window.URL || window.webkitURL
                if (URL && URL.createObjectURL) {
                    newFile.blob = URL.createObjectURL(newFile.file);
                    that.viewImg.push(newFile.blob);
                }
            }

            if (newFile && oldFile) {
                // 更新文件

                // 增加版本号
                if (!newFile.version) {
                newFile.version = 0
                }
                newFile.version++
            }

            if (!newFile && oldFile) {
                // 移除文件

                // 拒绝删除文件
                // return prevent()
            }
        }
    },

    watch: {}

  }

</script>
<style lang='less' scoped>
.wrap{
    width: 200px;
    height: 200px;
    background: red;
}

</style>