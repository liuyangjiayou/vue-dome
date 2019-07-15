<template>
  <div>
      <div>
          <CropperComponent class="view-img"></CropperComponent>
      </div>

    <div class="wrap">
        <file-upload ref="upload" postAction='https://www.baidu.com' :drop="true" :maximum="3" :multiple="true" @input-filter="inputFilter"  v-model="files" input-id="111" name="aaa">上传文件</file-upload>
    </div>
    <ul class="img-wrap">
        <li v-for="(file,key) in files" :key="key">
            <img :src="file.blob" alt="">
            <span @click="remove(file)">删除</span>
            <span @click="replace(file,files[key-1])">向左走</span>
            <span @click="replace(file,files[key+1])">向右走</span>
            <span @click="edit(file)">开始裁减</span>
        </li>
    </ul>
    <file-upload input-id="111">继续添加文件</file-upload>
    <span @click="$refs.upload.active = true">开始上传</span>
    <span @click="$refs.upload.active = false">停止上传</span>
    <zf-openBox :isshow.sync="editImgShow">
        <div>
            <div>
                <img :src="editFile.blob" @load="loadImage" ref="img">
            </div>
        </div>
    </zf-openBox>
  </div>
</template>

<script>
import 'cropperjs/dist/cropper.min.css'
import Cropper from 'cropperjs'
import FileUpload from 'vue-upload-component'
import CropperComponent from '../test/Cropper'
import { futimes } from 'fs';
  export default {
    name:'',
    props:[''],
    data () {
      return {
        files: [], //绑定的数组 可使用v-model绑定
        editImgShow : false,
        option : {
            input_id : '',//代表上传按钮input的ID
            name : '', //代表上传按钮input的name值
            post_action : '', //上传文件的API POST请求
            headers : {},  //请求头数据
            data : {}, //请求体数据
            accept : '', //传输文件的类型 accept="image/png,image/gif,image/jpeg,image/webp"
            multiple : false, //多文件上传
            size : '1024 * 1024',//允许上传文件的最大字节
            maximum : 3, //允许文件上传的最大数量
            thread : '1', //同时上传文件的数量默认值是1
            drop : true, //拖拽上传，如果设置成 true 则读取父组件作为容器
        },
        editFile : {
            blob : '',
        },
        viewImg : [],
        cropper : '',
      };
    },

    components: {
        FileUpload,
        CropperComponent
    },

    computed: {},

    beforeMount() {},

    mounted() {

    },

    methods: {
        edit(file){
            this.editImgShow = true;
            this.editFile.blob = file.blob
        },
        loadImage(){
            console.log(123);
            this.cropper = new Cropper(this.$refs.img, {
                aspectRatio: 4/3,
            });
        },
        remove(file){
            /* 删除文件 */
            this.$refs.upload.update(file, { name : '我就是要改革名字' })
            return false;
            this.$refs.upload.remove(file);
            
        },
        replace(key1,key2){
            /* 两个文件之间的排序 */
            this.$refs.upload.replace(key1,key2);
        },
        inputFilter(newFile, oldFile, prevent) {
            let that = this;
            if (newFile && !oldFile) {
                if(that.files.some(item => item.name == newFile.file.name)){
                    /* 禁止添加重复文件 */
                    that.zfMsg({
                        type : 3,
                        msg : '禁止添加重复文件'
                    });
                    return prevent();
                }
                // 添加文件
                console.log('添加文件');
              
                // 过滤非图片文件
                // 不会添加到 files 去
                if (!/\.(jpeg|jpe|jpg|gif|png|webp)$/i.test(newFile.name)) {
                    /* 只能上传图片类型的文件 */
                    that.zfMsg({
                        type : 3,
                        msg : '只能上传图片类型的文件'
                    });
                    return prevent(); //此方法用于截断
                }
                // 创建 `blob` 字段 用于缩略图预览
                newFile.blob = ''
                let URL = window.URL || window.webkitURL
                if (URL && URL.createObjectURL) {
                    newFile.blob = URL.createObjectURL(newFile.file);
                   console.log(newFile.file);
                }
            }

            if (newFile && oldFile) {
                // 更新文件
                // console.log('更新文件');
                // 增加版本号
                // if (!newFile.version) {
                // newFile.version = 0
                // }
                // newFile.version++;

                 // update
                if (newFile.active && !oldFile.active) {
                // beforeSend
                /* 在发送之前 */
                // min size
                    console.log('我是上传文件之前的');
                    if (newFile.size >= 0 && this.minSize > 0 && newFile.size < this.minSize) {
                        this.$refs.upload.update(newFile, { error: 'size' })
                    }
                }
                if (newFile.progress !== oldFile.progress) {
                    /* 上传的过程中 */
                      console.log('上传过程中')
                // progress
                }
                if (newFile.error && !oldFile.error) {
                    /* 单个文件上传失败 */
                    console.log('上传失败')

                // error
                }
                if (newFile.success && !oldFile.success) {
                    /* 单个文件上传成功 */
                    console.log('成功')
                // success
                }
            }

            if (!newFile && oldFile) {
                // 移除文件
                console.log('删除文件');
                // 拒绝删除文件
                // return prevent()
            }
        }
    },

    watch: {}

  }

</script>
<style lang='less' scoped>
.view-img{
    width: 100%;
    height: 100%;
}
.wrap{
    width: 200px;
    height: 200px;
    background: red;
}
.img-wrap{
    overflow: hidden;
    li{
        float: left;
        width: 200px;
        img{
            width: 100%;
            height: auto;
        }
    }
}
.big-img{
    width: 300px;
    height: 500px;
    img{
        width: 100%;
        height: auto;
    }
}

</style>