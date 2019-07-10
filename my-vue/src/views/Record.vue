<template>
  <div>
    <Header></Header>
    <div class="main-box">
        <div class="sreach-min-box">
            <div class="sreach-box">
                <zf-input m="0 11px 0 0" placeholder="输入姓名、联系方式或系统号"></zf-input>
                <zf-input w="190px" h="40px" placeholder="部门名称"></zf-input>
                <zf-button w="90px" h="40px" f="16px" brd="2px" state="success">搜索</zf-button>
            </div>
            <div class="sreach-nav-box">
                <div class="nav-list">
                    <div class="nav-title">状态 :</div>
                    <NavList v-for="(i,k) in stateList" :key="k" :label="i.id" v-model="statename" name="statename[]">{{i.title}}</NavList>
                </div>
                <div class="nav-list">
                    <div class="nav-title">来源 :</div>
                    <NavList v-for="(i,k) in stateList" :key="k" :label="i.id" v-model="statename" name="statename[]">{{i.title}}</NavList>
                </div>
                <div class="nav-list">
                    <div class="nav-title">文化 :</div>
                    <NavList v-for="(i,k) in stateList" :key="k" :label="i.id" v-model="statename" name="statename[]">{{i.title}}</NavList>
                </div>
                <div class="nav-list">
                    <div class="nav-title">性别 :</div>
                    <NavList v-for="(i,k) in stateList" :key="k" :label="i.id" v-model="statename" name="statename[]">{{i.title}}</NavList>
                </div>
                <div class="nav-list">
                    <div class="nav-title">婚姻 :</div>
                    <NavList v-for="(i,k) in stateList" :key="k" :label="i.id" v-model="statename" name="statename[]">{{i.title}}</NavList>
                </div>
                <div class="nav-list">
                    <div class="nav-title">已选 :</div>
                    <ul class="selected-list">
                        <li>店面接待<i>X</i></li>
                        <li class="btn"><i></i>清空已选</li>
                    </ul>
                </div>
            </div>
        </div>
        <h5 class="ovh"><span class="l">档案列表</span><span class="r">共<span class="btn2">5</span>条</span></h5>
        <div class="table-box">
            <Table :thlist="thList" :tdlist="tdList">
                <template slot="th" slot-scope="slotProps">
                    <th>{{slotProps.todo}}</th>
                </template>
                <template slot="td" slot-scope="slotProps">
                    <tr>
                        <td>{{slotProps.todo.number}}</td>
                        <td>{{slotProps.todo.name}}</td>
                        <td>{{slotProps.todo.phone}}</td>
                        <td>{{slotProps.todo.region}}</td>
                        <td>{{slotProps.todo.state}}</td>
                        <td>{{slotProps.todo.date}}</td>
                        <td>{{slotProps.todo.typeIn}}</td>
                        <td class="btn">查看</td>
                    </tr>
                </template>
            </Table>
            <div class="page-box">
                <Pagination v-model="cur" :all="all"></Pagination>
            </div>
        </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '../pageComponent/Header';
import Footer from '../pageComponent/Footer';
import Table from '../components/table';
import Pagination from '../components/pagination';
import NavList from '../pageComponent/NavList';
  export default {
    name:'',
    props:[''],
    data () {
      return {
          cur : 1,
          all : 19,
          statename : [1,3],
          stateList : [
              {
                  id : 0,
                  title : '不限'
              },
              {
                  id : 1,
                  title : '试用期'
              },
              {
                  id : 2,
                  title : '在职',
              },
              {
                  id : 3,
                  title : '休假',
              },
              {
                  id : 4,
                  title : '在入职',
              },
              {
                  id : 5,
                  title : '离职'
              }
          ],
          thList : ['档案编号','姓名','手机号','部门','状态','入职日期','录入人','操作'],
          tdList : [
              {
                  number : 1,
                  name : '刘杨',
                  phone : '15111111111',
                  region : '技术部',
                  state : '在职',
                  date : '2018-06-29',
                  typeIn : '张三',
              },
               {
                  number : 1,
                  name : '刘杨',
                  phone : '15111111111',
                  region : '技术部',
                  state : '在职',
                  date : '2018-06-29',
                  typeIn : '张三',
              },
               {
                  number : 1,
                  name : '刘杨',
                  phone : '15111111111',
                  region : '技术部',
                  state : '在职',
                  date : '2018-06-29',
                  typeIn : '张三',
              },
               {
                  number : 1,
                  name : '刘杨',
                  phone : '15111111111',
                  region : '技术部',
                  state : '在职',
                  date : '2018-06-29',
                  typeIn : '张三',
              }, {
                  number : 1,
                  name : '刘杨',
                  phone : '15111111111',
                  region : '技术部',
                  state : '在职',
                  date : '2018-06-29',
                  typeIn : '张三',
              }
          ],
      }
    },

    components: {
        Header,
        Footer,
        Table,
        Pagination,
        NavList,
    },

    computed: {},

    beforeMount() {},

    mounted() {},

    methods: {

    },

    watch: {}

  }

</script>
<style lang='less' scoped>
.main-box{
    width: 1200px;
    margin: 0 auto;
}
.page-box{
    padding: 33px 0 37px;
    text-align: center;
}
.table-box{
    background: #fff;
    margin-bottom: 83px;
    border: 1px solid #ebebeb;
}
.sreach-min-box{
    padding: 0 20px;
    background: #fff;
}
.sreach-box{
    padding-top: 20px;
}
.nav-list{
    position: relative;
    padding-left: 50px;
    border-bottom: 1px solid #ebebeb; 
    .nav-title{
        position: absolute;
        top: 0;
        left: 0;
        line-height: 48px;
        font-size: 14px;
    }
}
.selected-list{
    line-height: 48px;
    li{
        position: relative;
        display: inline-block;
        vertical-align: middle;
        margin: 0 10px;
        padding: 0 38px 0 7px;
        line-height: 26px;
        font-size: 14px;
        color: #535d6a;
        border: 1px solid #f90;
        i{
            position: absolute;
            top: 0;
            right: 0;
            width: 31px;
            height: 26px;
            background: #f90;
            color: #fff;
            cursor: pointer;
        }
    }
    li:last-child{
        padding: 0 7px 0 38px;
        border: none;
        cursor: pointer;
        i{
            position: absolute;
            top: 0;
            left: 0;
            width: 31px;
            height: 26px;
            color: #fff;
            cursor: pointer;
        }
    }
}
</style>