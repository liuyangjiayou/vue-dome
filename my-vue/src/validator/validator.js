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