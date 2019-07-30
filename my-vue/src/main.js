import Vue from 'vue';
import App from './App.vue';
/* 这个地方是router路由 */
import router from './router';
/* 这个地方是vuex 的 store库*/
import store from './store/store';
/* 以下是自己封装的组件 start*/
import Button from './components/button/button';
import Input from './components/input/input';
import Alert from './components/alertCom/alertComponent';
import Msg from './components/msgCom/msgComponent';
import OpenBox from './components/openBox/openBoxComponent';
import Menu from './components/menu/menuList';
import datePicker from './components/inputDate/inputDate';
/* 以下是自己封装的组件 end*/
Vue.use(Button);
Vue.use(Input);
Vue.use(Alert);
Vue.use(Menu);
Vue.use(OpenBox);
Vue.use(Msg);
Vue.use(datePicker);
import './validator/validator';
let vue = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
export default vue