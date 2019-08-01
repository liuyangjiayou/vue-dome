<template>
  <div>
    <Header></Header>
    <div class="main-box ovh">
        <div class="l">
          <div class="menu-box">
              <p class="title">组织结构</p>
              <div class="menu_container">
                <zf-menu :list="testdata"></zf-menu>
            </div>
          </div>
        </div>
        <div class="r right-box">
          <div class="sreach-from">
              <zf-input v-model="keyword" placeholder="输入姓名、手机号或系统号"></zf-input>
              <zf-picker w="120px" m="0 13px 0 14px" v-model="year" id="yearDate" format="yyyy" type="year" placeholder="请选择年"></zf-picker>
              <zf-picker w="120px" @callback="callback" v-model="month" format="dd" id="mouthDate" type="month" placeholder="请选择月"></zf-picker>
              <zf-button @click.native="sreachFn(keyword)" w="90px" h="40px" f="16px" brd="2px" state="success">搜索</zf-button>
          </div>
          <div class="table-list">
            <TableLi :tdlist="tdlist" :thlist="thlist">
                <template slot="th" slot-scope="scope">
                    <th>{{scope.todo}}</th>
                </template>
                 <template slot="td" slot-scope="scope">
                     <tr>
                        <td>{{scope.todo.name}}</td>
                        <td>{{scope.todo.position}}</td>
                        <td>{{scope.todo.present}}</td>
                        <td>{{scope.todo.leave}}</td>
                        <td>{{scope.todo.late}}</td>
                        <td>{{scope.todo.early}}</td>
                        <router-link :to="{path : '/attendance/details',query: {id :scope.todo.id}}" class="btn" tag="td">详情</router-link>
                     </tr>
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
import Header from '../../pageComponent/Header';
import Footer from '../../pageComponent/Footer';
// import Menu from '../../pageComponent/Menu';
import TableLi from '../../components/table';
import Pagination from '../../components/pagination';
  export default {
    name:'attendance',
    props:[''],
    data () {
      return {
        year : '',
        month : '',
        keyword : '',
        curPage : 1,
        allPage : 1,
        thlist : ['姓名(系统号)','职务','出勤天数','请假','迟到','早退','操作'],
        tdlist : [
          {
              id : 1,
              name : '李红胜（12345678）',
              position : '商圈经理',
              present : '22',
              leave : '1',
              late : '1',
              early : '1',
          },
            {
              id : 2,
              name : '李红胜（12345678）',
              position : '商圈经理',
              present : '22',
              leave : '1',
              late : '1',
              early : '1',
          },
          {
              id : 3,
              name : '李红胜（12345678）',
              position : '商圈经理',
              present : '22',
              leave : '1',
              late : '1',
              early : '1',
          },
          {
              id : 4,
              name : '李红胜（12345678）',
              position : '商圈经理',
              present : '22',
              leave : '1',
              late : '1',
              early : '1',
          },
        ],
        testdata: [
                    {
                      name: "一级菜单",
                      children: [
                          {
                              name: '二级菜单',
                              children: [
                                  {
                                      name: '三级菜单'
                                  },
                                  {
                                      name: '三级菜单'
                                  }
                              ]
                          },
                          {
                              name: '二级菜单',
                              children: [
                                  {
                                      name: '三级菜单',
                                      children: [
                                          {
                                              name: '四级菜单'
                                          },
                                          {
                                              name: '四级菜单'
                                          },
                                          {
                                              name: '四级菜单'
                                          }
                                      ]
                                  },
                                  {
                                      name: '三级菜单',
                                      children: [
                                          {
                                              name: '四级菜单',
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              name: '二级菜单',
                              children: [
                                  {
                                      name: '三级菜单'
                                  },
                                  {
                                      name: '三级菜单'
                                  }
                              ]
                          }
                      ]
                  },
                  {
                      name: "一级菜单",
                      children: [
                          {
                              name: '二级菜单',
                              children: [
                                  {
                                      name: '三级菜单'
                                  },
                                  {
                                      name: '三级菜单'
                                  }
                              ]
                          },
                          {
                              name: '二级菜单',
                              children: [
                                  {
                                      name: '三级菜单',
                                      children: [
                                          {
                                              name: '四级菜单'
                                          },
                                          {
                                              name: '四级菜单'
                                          },
                                          {
                                              name: '四级菜单'
                                          }
                                      ]
                                  },
                                  {
                                      name: '三级菜单',
                                      children: [
                                          {
                                              name: '四级菜单',
                                          }
                                      ]
                                  }
                              ]
                          },
                          {
                              name: '二级菜单',
                              children: [
                                  {
                                      name: '三级菜单'
                                  },
                                  {
                                      name: '三级菜单'
                                  }
                              ]
                          }
                      ]
                  }
              ]
      };
    },
    components: {
        Header,
        Footer,
        // Menu,
        TableLi,
        Pagination,
    },

    computed: {},

    beforeMount() {},

    mounted() {
      
    },

    methods: {
      callback(value){
        console.log(value);
      }
    },

    watch: {}

  }

</script>
<style lang='less' scoped>
  @import url(../../assets/css/common.less);
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
  .sreach-from{
    margin-bottom: 17px;
  }
  .menu-box{
      width: 253px;
      border: 1px solid @ceb;
      height: 754px;
  }
  .title{
      .marginAuto(237px,0);
      .height(46px);
      .ft(16px);
      border-bottom: 1px solid @ceb;
      color: @c666;
  }
  .menu_container{
    height: 706px;
    max-height: 706px;
    font-size: 14px;
    overflow: auto;
  }
</style>