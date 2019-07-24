<template>
  <div>
    <!-- 头部 -->
    <Header></Header>
    <!-- main -->
     <div class="main">
        <!-- 档案详情页面的 个人信息 -->
        <div class="content-box info-content-box ovh">
          <div class="l img-box">
            <img src="" alt="">
          </div>
          <div class="l info-box">
            <p class="name"><span>杨淑莲</span><span>（女）</span><span>别名：杨澜</span><span>在职</span></p>
            <p class="address">新华大区 - 新华一区-新西里A店 - 经纪人<span>A5</span></p>
            <ul class="ovh info">
              <li class="l">
                <p>系统号</p>
                <p>12378946</p>
              </li>
              <li class="l">
                <p>系统号</p>
                <p>12378946</p>
              </li>
              <li class="l">
                <p>系统号</p>
                <p>12378946</p>
              </li>
            </ul>
          </div>
        </div>
        <!-- 基本信息 -->
        <div class="content-box content-box-content">
          <h4><span class="l">基本信息</span><span class="btn r">编辑</span></h4>
          <div class="ovh">
            <ul class="l">
              <li><p>入职时间</p><p>2018-11-06</p></li>
              <li><p>籍贯</p><p>河北省张家口</p></li>
              <li><p>最高学历</p><p>本科</p></li>
              <li><p>银行卡</p><p>暂无</p></li>
            </ul>
            <ul class="l">
              <li><p>出生日期</p><p>2018-11-06</p></li>
              <li><p>民族</p><p>汉</p></li>
              <li><p>毕业年份</p><p>2016</p></li>
              <li><p>开户银行</p><p>暂无</p></li>
            </ul>
            <ul class="l">
              <li><p>招聘渠道</p><p>转介绍</p></li>
              <li><p>政治面貌</p><p>群众</p></li>
              <li><p>毕业院校</p><p>河北大学</p></li>
              <li><p>社保账号</p><p>暂无</p></li>
            </ul>
            <ul class="l">
              <li><p>推荐人</p><p>新石店张三</p></li>
              <li><p>婚姻状况</p><p>未婚</p></li>
              <li><p>专业</p><p>计算机通信</p></li>
              <li><p>公积金号</p><p>暂无</p></li>
            </ul>
          </div>
        </div>
        <!-- 联系方式 -->
        <div class="content-box content-box-content">
          <h4><span class="l">联系方式</span><span class="btn r">编辑</span></h4>
          <div class="ovh">
            <ul class="l">
              <li><p>QQ</p><p>暂无</p></li>
              <li><p>现居住地</p><p>河北省张家口</p></li>
            </ul>
            <ul class="l">
              <li><p>微信</p><p>2018-11-06</p></li>
              <li><p>户口地址</p><p>汉</p></li>
            </ul>
             <ul class="l">
              <li><p>电子邮件</p><p>2018-11-06</p></li>
              <li><p>紧急联系人</p><p>2016</p></li>
            </ul>
             <ul class="l">
              <li><p>备用电话</p><p>2018-11-06</p></li>
              <li><p>紧急联系电话</p><p>暂无</p></li>
            </ul>
          </div>
        </div>
        <!-- 工作经历 -->
        <div class="content-box content-box-content">
          <h4><span class="l">工作经历</span><span class="btn r">添加</span></h4>
          <div>
             <ol>
              <li class="ovh"><p class="l">时间</p><p class="l">公司名称</p><p class="l">职务名称</p><p class="l">工作描述</p></li>
              <li class="ovh">
                <p class="l"></p>
                <p class="l"></p>
                <p class="l"></p>
                <p class="l">
                  <span>编辑</span>
                  <span>编辑</span>
                </p>
              </li>  
              <li class="ovh">
                <p class="l">暂无</p>
                <p class="l">暂无</p>
                <p class="l">经纪人</p>
                <p class="l">
                  <span>暂无</span>
                  <span>编辑</span>
                </p>
              </li>
            </ol>
          </div>
        </div>
        <!-- 其他 -->
        <div class="content-box content-box-content">
          <h4><span class="l">其他</span><span class="r btn">编辑</span></h4>
          <div class="ovh">
            <ul class="l"><li><p>技能证书</p><p>转介绍</p></li></ul>
            <ul class="l"><li><p>荣誉奖项</p><p>群众</p></li></ul>
            <ul class="l"><li><p>兴趣爱好</p><p>河北大学</p></li></ul>
            <ul class="l"><li><p>备注</p><p>暂无</p></li></ul>
          </div>
        </div>
    </div>
    <!-- 尾部 -->
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../../pageComponent/Header';
import Footer from '../../pageComponent/Footer';
  export default {
    name:'',
    props:[''],
    data () {
      return {

      };
    },

    components: {
      Header,
      Footer
    },

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
    @import url(../../assets/css/common.less);
    .main{
      .marginAuto(1200px,0);
    }
    .content-box{
      .mg(0 0 10px 0);
      .pd(0 20px);
      box-sizing: border-box;
      width: 870px;
      background: @white;
      border: 1px solid @ceb;
    }
    .info-content-box{
      .pd(20px);
      .img-box{
        .pd(0 20px 0 0);
        width: 110px;
        height: 147px;
        img{
          width: 100%;
          height: auto;
          background: red;
        }
      }
      .info-box {
        width: 698px;
        .name{
          span{
            display: inline-block;
            vertical-align: bottom;
          }
          :nth-child(1){
            line-height: 36px;
            font-size: 28px;
            color: @cblack;
          }
          :nth-child(2){
            margin-right: 20px;
          }
          :nth-child(3){
            margin-right: 10px;
            color: #808080;
          }
          :nth-child(4){
            .pd(0 8px);
            line-height: 22px;
            background:@green;
            color: @white;
            font-size: 14px;
          }
        }
        .address{
          line-height: 48px;
          border-bottom: 1px solid @ceb;
          font-size: 14px;
          color: #323942;
        }
        .info{
          padding-top: 4px;
          li{
            margin-right: 50px;
            :nth-child(1){
              line-height: 40px;
              font-size: 14px;
              color: #808080;
            }
            :nth-child(2){
              line-height: 16px;
              font-size: 14px;
              color: @cblack;
            }
          }
        }
      }
      
    }
    .content-box-content{
      .fw(400);
      h4{
        overflow: hidden;
        line-height: 58px;
        border-bottom: 1px solid @ceb;
        :nth-child(1){
          font-size: 16px;
          color: @cblack;
        }
        :nth-child(2){
          font-size: 14px;
        }
      }
      ul{
        width: 25%;
        li{
          .pd(16px 0 14px 0);
          p{ line-height: 28px;font-size: 14px};
          :nth-child(1){color: #808080; };
          :nth-child(2){color: @cblack; };
        }
      }
    }
</style>