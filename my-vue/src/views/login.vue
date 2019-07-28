<template>
  <div>
    <div class="main-box">
        <div class="content-box">
            <div class="l left">
                <p class="logo-title"><span></span><span>找房ERP系统</span></p>
                <p>让找房更轻松、更便捷</p>
                <div class="nav-list ell">
                    <span>AS系统</span><em>·</em> 
                    <span>FS系统</span><em>·</em> 
                    <span>HR系统</span><em>·</em> 
                    <span>OA系统</span> 
                </div>
                <div>
                    <div class="img-box"><img src="" alt=""></div>
                    <div class="dowload-box">
                        <p>
                            <a><i></i><span>iPhone</span></a>
                        </p>
                        <p class="Aandroid">
                            <a><i></i><span>Android</span></a>
                        </p>
                    </div>
                </div>
            </div>
            <div class="r right">
                <p class="title"><span @click="spanActive = !spanActive" :class="{'active' : spanActive}">密码登录</span><span @click="spanActive = !spanActive" :class="{'active' : !spanActive}">扫码登录</span></p>
                <div class="input-box">
                    <ul>
                        <li>
                            <p class="text">系统账号</p>
                            <p>
                                <i></i>
                                <zf-input w="267px" v-validate.initial="'required'" data-vv-as="请填写账号" v-model="data.username" placeholder="请输入系统账号"></zf-input>
                            </p>
                        </li>
                        <li>
                            <p class="text">登录密码</p>
                            <p>
                                <i></i>
                                <zf-input w="267px" v-validate.initial="'required'" data-vv-as="请填写密码" v-model="data.password" placeholder="请输入密码"></zf-input>
                            </p>
                        </li>
                        <li>
                            <zf-button @click.native="login" w="267px" m="25px auto 10px" h="40px" brd="3px" state="success">登录</zf-button>
                        </li>
                        <li>
                             <p class="retrieve"> <a href="https://sjz.as.fc.wang/password/find.html">忘记密码？</a> <a class="r" href="/index/register/index.html">注册终端</a> </p>
                            <p class="container"> 为确保最佳使用效果，推荐使用 <a href="http://down.fc.wang/ChromeSetup.exe" target="_blank">谷歌浏览器</a>。 </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="footer-box">
        <p>Copyright © 2016 zhaofang.com All rights reserved. Powered by 找房网. 冀IC备14013255</p>
        <p>公司名称：河北团结网络科技有限公司</p>
    </div>
  </div>
</template>

<script>
    import {post} from '../api/api'
  export default {
    name:'',
    props:[''],
    data () {
      return {
          spanActive : true,
          data : {
              username : '',
              password : '',
          }
      };
    },

    components: {},

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {
        login(){
            let that = this;
            this.$validator.validateAll().then((result) => {
                if (result) {
                    post('/api/login',that.data).then(res=>{
                        this.zfMsg({
                            type : 1,
                            msg : '登陆成功',
                            time : 1500,
                            callback : function(){
                                localStorage.setItem('zfToken',JSON.stringify({token :res.data.token}))
                                that.$router.push({
                                    path : '/home'
                                })
                            }
                        });

                    });
                    return false;
                }
                this.zfMsg({
                    type : 3,
                    msg : this.$validator.errors.all()[0],
                });
            });
          
        }
    },

    watch: {}

  }

</script>
<style lang='less' scoped>
    @import url(../assets/css/common.less);
    .main-box{
        padding-top: 60px;
        height: 598px;
        background: url(../assets/bgIng.jpg) top no-repeat;
    }
    .content-box{
        width: 1200px;
        margin: 0 auto;
        .left{
            .logo-title{
                    height: 65px;
                    line-height: 65px;
                    margin: 20px 0;
                span{
                    display: inline-block;
                    vertical-align: middle;
                    font-size: 18px;
                }
                :nth-child(1){
                    width: 39px;
                    height: 39px;
                    margin-right: 15px;
                    background: url('../assets/login_logo.png') no-repeat;
                }
            }
            .nav-list{
                line-height: 52px;
                font-size: 30px;
                font-size: 18px;
                color: #333;
            }
            :nth-child(3){
                line-height: 42px;
                em{
                    text-align: center;
                    margin: 0 14px;
                    line-height: 42px;
                    font-size: 14px;
                }
                
            }
            :nth-child(4){
                width: 386px;
                .img-box{
                    display: inline-block;
                    vertical-align: top;
                    margin-right: 25px;
                    width: 114px;
                    height: 114px;
                    background: red;
                }
                .dowload-box{
                    display: inline-block;
                    vertical-align: top;
                    padding-top: 8px;
                    p{
                        margin-bottom: 14px;
                        a{
                            display: block;
                            line-height: 42px;
                            span{
                                font-size: 16px;
                                color: @white;
                            }
                        }
                        width: 128px;
                        height: 42px;
                        line-height: 42px;
                        background: @yellow;
                        text-align: center;
                        i{
                            display: inline-block;
                            vertical-align: -2px;
                            background: url(../assets/icon.png) -4px -302px no-repeat;
                            margin-right: 12px;
                            width: 18px;
                            height: 22px;
                        }
                    }
                    p.Aandroid i{
                         background: url(../assets/icon.png) -27px -303px no-repeat;
                    }
                }

            }
        }
        .right{
            background: @white;
            .title{
                width: 354px;
                line-height: 50px;
                box-shadow: inset 0 -13px 22px -10px #f6f6f6;
                border-bottom: 1px solid #f6f6f6;
                span{
                    display: inline-block;
                    width: 50%;
                    text-align: center;
                    color: #b2b2b2;
                    cursor: pointer;
                }
                span.active{
                    color: @c333;
                }
            }
            .input-box{
                padding: 10px 0 20px;
                width: 276px;
                margin: 0 auto;
                .text{
                    height: 35px;
                    line-height: 35px;
                    font-size: 12px;
                    color: @c999;
                }

                .retrieve{
                    line-height: 20px;
                    a{
                        display: inline-block;
                        line-height: 20px;
                        font-size: 12px;
                        color: @c999;
                        border-bottom: 1px solid @c999;
                        padding: 0 3px;
                    }
                    a:hover{
                        color: @yellow;
                        border-bottom: 1px solid  @yellow;
                    }
                }
                .container{
                    line-height: 30px;
                    font-size: 12px;
                    margin-top: 10px;
                }
            }
        }
    }
    .footer-box{
        background: @white;
        text-align: center;
        font-size: 14px;
        color: @c999;
        line-height: 22px;
        padding: 20px 0;
    }
</style>