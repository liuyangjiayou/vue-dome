import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: resolve => require(['./views/Home.vue'], resolve)
    },
    {
      path : '/record',
      name : 'record',
      component: resolve => require(['./views/Record.vue'], resolve)
    },
    {
      path : '/attendance',
      name : 'attendance',
      component: resolve => require(['./views/Attendance/Attendance.vue'], resolve),
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
      component : resolve => require(['./views/Integral.vue'],resolve),
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
})
