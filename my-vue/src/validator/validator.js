/* 这个地方是表单验证的组件 在这个地方注入到vue中 */

import Vue from 'vue';
import VeeValidate,{Validator} from 'vee-validate';
import zh_CN from 'vee-validate/dist/locale/zh_CN';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
/* 中文提示 */
const i18n = new VueI18n({
  locale: 'zh_CN',
})
/* 引入整个验证 */
Vue.use(VeeValidate,{
  i18n,
  i18nRootKey: 'validation',
  dictionary: {
    zh_CN
  }
});
/* 自定义验证手机号 */
Validator.extend('mobile', {
    getMessage: field => "请输入正确的手机号码",
    validate: value => {
        return value.length === 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(value)
    }
});
/* 自定义验证checkBox表单 */
Validator.extend('checked', {
    getMessage: field => "至少选择一个",
    validate: value => {
        return value.length >= 1
    }
});
 // 自定义validate
 const Dictionary = {
    zh_CN: {
      messages: {
        required: field => field
      },
      attributes: {
        name: "请输入账号",
        mobile : "请输入手机",
        checked : "必须选择一个且最少一个",
      }
    }
  };
  // 自定义validate error 信息
Validator.localize(Dictionary);


/* 以下是 自己的一些笔记  因为老忘所以做一个笔记 */ 

// initial，immediate  验证初始值(这两个都可以用 但是目前官方文档是immediate)；
// data-vv-name（重新指向name，也就是要验证哪一个name的表单 这样就不会和以前的name弄混了）
// data-vv-as（验证成功后,演示的文字）
// 这是以上 三个属性的使用的方法  <input v-model="keyword" v-validate.initial="'required'" data-vv-as="关键字不能为空" data-vv-name="keyword" ></input>

// this.$validator.errors.first('keyword') 这个方法是获取验证成功后 演示的内容 也是就 data-vv-as 里面的内容
// this.$validator.errors.has('keyword') // 这个是是否验证成功 成功返回true 失败返回的是false;

//data-vv-scope 代表着领域 比如现在有两个form 需要分别的验证 如下（现在有两个表单里面需要验证）
// <form @submit.prevent="validateForm('form-1')"  data-vv-scope="form-1"></form>
// <form @submit.prevent="validateForm('form-2')"  data-vv-scope="form-2"></form>
/* 这是需要验证的动作 scope指向是 data-vv-scope的值*/
// validateForm(scope) {
//   this.$validator.validateAll(scope).then((result) => {
//     if (result) {
//       console.log('所有的都验证成功了');
//     }
//     this.$validator.errors.all() 获取所有验证失败消息的集合
//     this.$validator.errors.collect() 获取所有验证失败消息的集合对象形式
//   });
// }




