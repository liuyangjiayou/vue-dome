import Vue from 'vue'
import Router from 'vue-router'
import store from './store/store';
Vue.use(Router)

let router = new Router({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['./views/Home.vue'], resolve)
    },
    {
      path: '/',
      redirect : {
        path : '/home',
      }
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
});

let dynamic = [
  {
    path : '/record',
    name : '档案',
    routerName : '档案1',
    component: resolve => require(['./views/Record.vue'], resolve),
    meta : {role : 'record'}
  },
  {
    path : '/attendance',
    name : '考勤',
    routerName : '档案2',
    component: resolve => require(['./views/Attendance/Attendance.vue'], resolve),
    meta : {role : 'attendance'},
    children: [
      {
        path : '/attendance',
        redirect : {
          path : '/attendance/list'
        }
      },
      {
        path: '/attendance/list',
        component: resolve => require(['./views/Attendance/AttendanceList.vue'], resolve),
      },
      {
        path: '/attendance/details',
        component: resolve => require(['./views/Attendance/AttendanceDetails.vue'], resolve),
      },
    ]
  },
  {
    path : '/integral',
    name : '积分',
    routerName : '档案3',
    component : resolve => require(['./views/Integral.vue'],resolve),
    meta : {role : 'integral'},
  },
  {
    path : '/test',
    name : '测试',
    routerName : '档案4',
    component : resolve => require(['./views/test.vue'],resolve),
    meta : {role : 'test'},
  },
]
store.dispatch('setRouter',dynamic);
router.addRoutes(dynamic);
// let newRouterArr = [];
// let newRouter = dynamic.filter(item =>{
//     let isRouter =  store.getters.getRoles.some(role=>item.meta.role == role);
//     if(isRouter){
//       let routerData = {};
//       routerData.path = item.path;
//       routerData.name = item.routerName;
//       newRouterArr.push(routerData);
//       store.dispatch('setRouter',routerData);
//     }
//     store.dispatch('setRouter',newRouterArr);
//     return isRouter
// });
// console.log(store.state.newRouter);
// router.addRoutes(newRouter);
export default router