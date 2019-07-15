<template>
  <div>
      <div id="demo">  
          <!-- 遮罩层 -->  
          <div class="view-img">  
              <img :src="newUrl" ref="image" alt="">
          </div>  

          <div>  
              <input type="file" id="change" accept="image" @change="change">  
          </div>  
          <div @click="test">
            裁减
          </div>
      </div>  
  </div>
</template>

<script>
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.min.css'
  export default {
    name:'',
    props:[''],
    data () {
      return {
            cropper:'',
            newUrl : '',

        };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {
         
    },

    methods: { 
        change (e) {  
            let files = e.target.files[0];
            this.$refs.image.src = window.URL.createObjectURL(files);
           
            // this.cropper.crop();
        },
        test(){
            this.cropper = new Cropper(this.$refs.image, {
                aspectRatio: 4/3,
            });
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
</style>