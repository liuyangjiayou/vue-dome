import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Button from './components/button/button';
import Input from './components/input/input';
import Alert from './components/alertCom/alertComponent';
import Msg from './components/msgCom/msgComponent';
import OpenBox from './components/openBox/openBoxComponent';
import datePicker from './components/inputDate/inputDate';
Vue.use(Button);
Vue.use(Input);
Vue.use(Alert);
Vue.use(OpenBox);
Vue.use(Msg);
Vue.use(datePicker);
import './validator/validator';
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
