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
      component: resolve => require(['./views/Home.vue'], resolve),
      meta : {
        title : '首页'
      }
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['./views/login.vue'], resolve),
      title : '登录页'
    },
    {
      path: '/',
      redirect : {
        path : '/login',
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
    name : 'record',
    component: resolve => require(['./views/Record.vue'], resolve),
    meta : {
      title : '档案',
      role : 'record'
    }
  },
  {
    path : '/attendance',
    name : 'attendance',
    component: resolve => require(['./views/Attendance/Attendance.vue'], resolve),
    meta : {
      title : '考勤',
      role : 'attendance'
    },
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
    name : 'integral',
    component : resolve => require(['./views/Integral.vue'],resolve),
    meta : {
      title : '积分',
      role : 'integral'
    },
  },
  {
    path : '/test',
    name : 'test',
    component : resolve => require(['./views/test.vue'],resolve),
    meta : {
      title : '测试',
      role : 'test'
    },
  },
]
store.dispatch('setRouter',dynamic);
router.addRoutes(dynamic);
router.beforeEach((to,form,next)=>{
  if (to.path === '/login') {
    next();
  } else {
    let token = JSON.parse(localStorage.getItem('zfToken'));
    if (token && token != '') {
      next();
    } else {
      next('/login');
    }
  }
});
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