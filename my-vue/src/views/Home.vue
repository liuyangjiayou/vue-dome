<template>
  <div>
      <Header></Header>
      <div class="main-box ovh">
        <div class="l">
          <Menu></Menu>
        </div>
        <div class="r right-box">
          <div>
              <zf-input v-model="keyword" v-validate.initial="'required|mobile'" data-vv-as="关键字不能为空" data-vv-name="keyword" placeholder="输入姓名、手机号或系统号"></zf-input>
              <zf-button @click.native="changeSex" state="success">点击我改变性别</zf-button>
              <zf-button @click.native="sreachFn(keyword)" w="90px" h="40px" f="16px" brd="2px" state="success">搜索</zf-button>
          </div>
          <div class="table-list">
            <TableLi :list="tdlist">
                <template slot="table2" slot-scope="scope">
                  <ul>
                     <li>
                        <p><span class="name">{{scope.todo.name}}</span>&emsp;<span>{{scope.todo.position}}</span></p>
                        <p><span class="c9">系统号</span>&emsp;<span>{{scope.todo.system}}</span></p>
                      </li>
                      <li>
                          <p><span class="c9">手机号</span>&emsp;<span>{{scope.todo.phone}}</span></p>
                      </li>
                      <li>
                          <p><span class="c9">呼出号</span>&emsp;<span>{{scope.todo.cell_phone}}</span></p>
                      </li>
                      <li>
                          <p><span>{{scope.todo.region_1}}</span>&nbsp;-&nbsp;<span>{{scope.todo.region_2}}</span>&nbsp;-&nbsp;<span>{{scope.todo.region_3}}</span></p>
                          <p><span @click="resetPass({id : scope.todo.id})" class="cur btn">重置密码</span>&nbsp;<span @click="fetter({state :scope.todo.state,id : scope.todo.id})" class="cur btn">{{scope.todo.state == 0 ? '锁定' : '解锁'}}</span>&nbsp;<span class="cur btn">调动</span>&nbsp;<span class="cur btn">权限</span>&nbsp;<span class="cur btn">档案</span></p>
                      </li>
                  </ul>
                </template>
            </TableLi>
          </div>
          <div class="page-box">
            <Pagination v-model="curPage" :all="allPage"></Pagination>
          </div>
        </div>
      </div>
      <Footer></Footer>
  </div>
</template>

<script>
  import Header from '../pageComponent/Header';
  import Footer from '../pageComponent/Footer';
  import Menu from '../pageComponent/Menu';
  import TableLi from '../components/table2';
  import Pagination from '../components/pagination';
  import { mapState,mapGetters,mapActions} from 'vuex'
  export default {
    name:'',
    props:[''],
    data () {
      return {
        keyword : '',
        curPage : 1,
        allPage : 1,
        tdlist : [
          {
              id : 1,
              name : '张素敏',
              position : '商圈经理',
              system : '12345678',
              phone : '13028658706',
              cell_phone : '0311-8806119',
              region_1 : '新华大区',
              region_2 : '新华一区',
              region_3 : '西里一店',
              state : 0, //锁定
          },
           {
              id : 2,
              name : '刘杨',
              position : '前端',
              system : '87654321',
              phone : '13333333333',
              cell_phone : '0311-8806119',
              region_1 : '总部',
              region_2 : '技术部',
              region_3 : '一组',
              state : 1, //解锁
          },
          {
              id : 3,
              name : '刘杨2',
              position : '前端2',
              system : '222222',
              phone : '12222222222',
              cell_phone : '0311-8806119',
              region_1 : '总部3',
              region_2 : '技术部3',
              region_3 : '一组3',
              state : 0, //锁定
          },
          {
              id : 4,
              name : '刘杨3',
              position : '前端3',
              system : '3333333',
              phone : '13333333333',
              cell_phone : '0311-8806119',
              region_1 : '总部3',
              region_2 : '技术部3',
              region_3 : '一组3',
              state : 0, //锁定
          }
        ],
      }
    },

    components: {
      Header,
      Footer,
      Menu,
      TableLi,
      Pagination,
    },

    computed: {
      ...mapState({
        count : state => state.count,
        number : state => state.number,
        info : state => state.info,
      }),
      ...mapGetters(['test'])
    },

    beforeMount() {},

    mounted() {
    },
    methods: {
      ...mapActions([
        'changeinfosex'
      ]),
      sreachFn(keyword){
        this.$validator.validateAll().then((result) => {
          if (result) {
            console.log(1);
            return false;
          }
          // this.$validator.fields.find
          console.log(this.$validator.fields.find({name : Object.entries(this.$validator.errors.collect())[0][0]}).el);
          // let ele = this.$validator.errors.collect().find(item=>{
          //   console.log(item);
          // })
        });
        // this.zfMsg({
        //   type : 2,
        //   msg : this.$validator.errors.first('keyword'),
        // });
        // return false;
       
      },
      resetPass(data){
        let id =  data.id;
        this.alertFn({
          str : `重置id是（${id}）的用户`,
        })
      },
      fetter(data){
        let str = data.state == 0 ? '锁定' : '解锁';
        let id =  data.id;
        this.alertFn({
          str : `${str}id是（${id}）`,
        })
      },
      alertFn(opts) {
          this.zfAlert({
          msg : '确定要' + opts.str + '吗?',
          sucFn : (com)=>{
            com.$el.remove();
            this.zfMsg({
              msg : opts.str + '成功',
            })
          }
        });
      },
      /* 修改性别 */
      changeSex(){
        this.changeinfosex('女');
      }
    },
    watch: {}

  }

</script>
<style lang='less' scoped>
  @import url(../assets/css/common.less);
  .main-box{
    .marginAuto(1200px,0);
    .pd(20px);
    box-sizing: border-box;
    margin-bottom: 60px;
    height: 824px;
    background: #fff;
    border: 1px solid #e5e5e5;
  }
  .right-box{
    position: relative;
    box-sizing: border-box;
    .pd(9px 9px 82px 9px);
    width: 894px;
    height: 704px;
    border: 1px solid @ceb;
  }
  .table-list{
    max-height: 100%;
    overflow: auto;
  }
  .page-box{
    position:absolute;
    left: 0;
    bottom: 39px;
    width: 100%;
    text-align: center;
  }

</style>
